/**
 * Created by debayan.das on 15-10-2016.
 */
(function () {
    var mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        groupieSchema = new Schema({
            groupieid: {type : Number , unique : true},
            name : String,
            members : [
                {userid : Number}
            ]
        });

    groupieSchema.pre('save', function(next) {
        console.log("hochhe to!!!");
        mongoose.connection.db.eval('getNextSequenceValue("groupieid")', (function(err, returnValue){
            this.groupieid = returnValue;
            next();
        }).bind(this));
    });
    module.exports = mongoose.model("groupie", groupieSchema);
}());