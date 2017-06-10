/**
 * Created by debayan.das on 17-10-2016.
 */
(function(){
    var transactionSchema = require("./../schema/transaction");
    function TransactionHandler(){}
    TransactionHandler.prototype.saveTransaction = function(req, res){
        try{
            var groupieId = parseInt(req.params.groupieId,10),
                transactionDetails = req.body,
                transaction = new transactionSchema();
            console.log(transactionDetails);
            transaction.transactionDate = transactionDetails.transactionDate;
            transaction.description = transactionDetails.description;
            transaction.payee = transactionDetails.payee;
            transaction.participants = transactionDetails.participants;
            transaction.cost = transactionDetails.cost;
            transaction.groupieid = groupieId;
            // Saving it to the database.
            transaction.save(function (err) {
                if (err){
                    console.error(err);
                    console.log('Error on save!');
                    res.send({
                        transactionId : "error on save"
                    });
                    res.end();
                    return;
                }
                console.log("saved successfully");
                res.send({
                    transactionId : transaction.transactionid
                });
                res.end();
                
            });
        }catch(e){
            console.error("error saving transacrion");
            console.error(req.body);
            res.send("saved");
            res.end();
        }
    }
    module.exports =  new TransactionHandler();
}());