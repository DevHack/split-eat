/**
 * Created by debayan.das on 14-10-2016.
 */
(function () {
    var mongoose = require("mongoose"),
        user = require("./user"),
        Schema = mongoose.Schema,
        transactionSchema = new Schema({
            transactionDate: {type: String, required: true},
            transactionid: {type: Number, unique: true},
            description: {type: String},
            cost: {type: Number, required: true},
            payee: [{type: Number, required: true}],
            participants: [{
                type: Number
            }],
            groupieid: {type: Number, required: true}
        });

    transactionSchema.pre('save', function (next) {
        console.log("on pre")
        this.updateUser((function () {
            if (this.transactionid) {
                next();
            } else {
                this.getTransactionId(next);
            }
        }).bind(this));
    });

    transactionSchema.methods.getTransactionId = function (callback) {
        mongoose.connection.db.eval('getNextSequenceValue("transactionid")', (function (err, returnValue) {
            this.transactionid = returnValue;
            callback();
        }).bind(this));
    };

    transactionSchema.methods.updateUser = function (callback) {
        var cost = this.cost,
            noOfParticipants = this.participants.length;
        var costPerParticipant = cost / noOfParticipants;
        for (var i = 0; i < this.participants.length; i++) {
            var currentParticipant = this.participants[i],
                participantCost = this.payee.indexOf(currentParticipant) > -1 ? cost - costPerParticipant : -costPerParticipant;
            (function (participantCost, context) {
                user.findOne({"userid": currentParticipant}, (function (err, userObj) {
                    var userGroups = userObj.groupies;
                    var currentGroup;
                    for (var i = 0; i < userGroups.length; i++) {
                        if (userGroups[i].groupieid === this.groupieid) {
                            currentGroup = userGroups[i];
                            break;
                        }
                    }
                    currentGroup.outstanding += participantCost;
                    userObj.save(function (err) {
                        if (err) console.log('Error on save transaction!');
                        console.log("transaction saved successfully");
                    });
                }).bind(context));
            }(participantCost, this));

        }
        callback();
    };

    module.exports = mongoose.model("transaction", transactionSchema);
}());