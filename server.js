/**
 * Created by debayan.das on 14-10-2016.
 */
var express = require('express'),
    app = express(),
    dirName = __dirname,
    connector = require('./server/connector'),
    Transaction = require("./server/schema/transaction");
/**
 * connect to database as soon as server starts
 */
connector.connect();
app.use(express.static('client'));

function save(req){
    var transaction = new Transaction();
    transaction.transactionDate = new Date();
    transaction.cost = 5000;
    transaction.payee =["Arnab"];
// Saving it to the database.
    transaction.save(function (err) {if (err) console.log ('Error on save!'); console.log("saved successfully")});
}

var server = app.listen("4000", function () {
    "use strict";
    console.log("Server Running on 4000");
});
/**
 * define APIs
 */
app.post("/save/:groupId", function(req , res){
    console.log("groupId : "+req.params.groupId);
    save();
    res.send("saved");
    res.end();
});