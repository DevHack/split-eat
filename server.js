/**
 * Created by debayan.das on 14-10-2016.
 */
var express = require('express'),
    app = express(),
    connector = require('./server/connector'),
    transactionHandler = require('./server/handler/transaction_handler'),
    User = require("./server/schema/user");
    bodyparser = require('body-parser');
/**
 * connect to database as soon as server starts
 */
connector.connect();
app.use(express.static('client'));
app.use(bodyparser.json());

var server = app.listen("4000", function () {
    "use strict";
    console.log("Server Running on 4000");
});
/**
 * define APIs
 */
app.post("/saveTransaction/:groupieId", function(req , res){
    transactionHandler.saveTransaction(req, res);
});

app.get("/user", function(req, res){
    User.find({} , function(err, result){
        console.log(result);
        res.send(result);
        res.end();
    })
});