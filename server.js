/**
 * Created by debayan.das on 14-10-2016.
 */
var express = require('express'),
    app = express(),
    connector = require('./server/connector'),
    Transaction = require("./server/schema/transaction"),
    User = require("./server/schema/user");
    bodyparser = require('body-parser');
/**
 * connect to database as soon as server starts
 */
connector.connect();
app.use(express.static('client'));
app.use(bodyparser.json());

function save(groupieId){
    var transaction = new Transaction();
    transaction.transactionDate = new Date();
    transaction.cost = 5000;
    transaction.payee =["Arnab"];
    transaction.groupieid = groupieId;
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
app.post("/saveTransaction/:groupieId", function(req , res){
    console.log("groupId : "+req.params.groupieId);
    var groupieId = req.params.groupieId;
    console.log(req.body);
    var transaction = new Transaction();
    transaction.transactionDate = new Date();
    transaction.cost = 5000;
    transaction.payee =["Arnab"];
    transaction.groupieid = groupieId;
// Saving it to the database.
    transaction.save(function (err) {if (err) console.log ('Error on save!'); console.log("saved successfully")});
    res.send("saved");
    res.end();
});

app.get("/user", function(req, res){
    User.find({} , function(err, result){
        console.log(result);
        res.send(result);
        res.end();
    })
});