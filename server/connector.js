/**
 * Created by debayan.das on 14-10-2016.
 */

(function(){
    var mongoose = require("mongoose");
    var conf = require("./db.conf");
    var dbUrl = conf.dbUrl;   
    var connector = {};
    /**
     * callback function for db connection
     * @param err
     * @param res
     */
    connector.connectCallback = function(err , res){
        if(err){
            throw new Error("connection to "+dbUrl+ " Failed");
        }
        console.log("Succeeded connected to: "+dbUrl);
    };
    /**
     * init function
     */
    connector.connect = function(){
        mongoose.connect(dbUrl,this.connectCallback);
    };
    module.exports = connector;
}());