/**
 * Created by debayan.das on 15-10-2016.
 */
(function () {
    var mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        userSchema = new Schema({
            "userid" : {type : Number , unique : true},
            "name" : String,
            "groupies" : [{
                "groupieid" : Number,
                "outstanding" : {type : Number , default : 0}
            }]
        });
    
    userSchema.pre('save', function(next) {
        console.log("hochhe to!!!");
        if(this.userid){
            next();
        }else{
            mongoose.connection.db.eval('getNextSequenceValue("userid")', (function(err, returnValue){
                this.userid = returnValue;
                next();
            }).bind(this));
        }
    });
    module.exports = mongoose.model("user", userSchema);
}());