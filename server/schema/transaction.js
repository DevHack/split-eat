/**
 * Created by debayan.das on 14-10-2016.
 */
(function () {
    var mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        transactionSchema = new Schema({
            transactionDate: {type: Date, required: true},
            transactionid: {type: Number, unique: true},
            description: {type: String},
            cost: {type: Number, required: true},
            payee: [{type: String, required: true}],
            participants: [{
                name: String,
                contribution: Number
            }],
            groupieid: {type: String, required: true}
        });

    transactionSchema.pre('save', function(next) {
        console.log("hochhe to!!!");
        mongoose.connection.db.eval('getNextSequenceValue("transactionid")', (function(err, returnValue){
            this.transactionid = returnValue;
            next();
        }).bind(this));
    });

    module.exports = mongoose.model("transaction", transactionSchema);
}());