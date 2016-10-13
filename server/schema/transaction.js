/**
 * Created by debayan.das on 14-10-2016.
 */
(function () {
    var mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        transactionSchema = new Schema({
            transactionDate: {type: Date, required: true},
            description: {type: String},
            cost: {type: Number, required: true},
            payee: [{type: String, required: true}],
            participants: [{
                name: String,
                contribution: Number
            }],
            groupId: String
        });

    module.exports = mongoose.model("transaction", transactionSchema);
}());