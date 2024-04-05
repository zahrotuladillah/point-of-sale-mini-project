package com.zo.pointofsale.transaction;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zo.pointofsale.HttpResponseModel;

import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TransactionController {
    @Autowired
    TransactionService transactionService;
    
    @PostMapping("/saveTransaction")
    public HttpResponseModel<Transaction> saveTransaction(@RequestBody Transaction transaction){
        HttpResponseModel<Transaction> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(transactionService.saveTransactionData(transaction));
        return resp;
    }

    @GetMapping("/getTransaction")
    public HttpResponseModel<List<Transaction>> getTransactions(){
        HttpResponseModel<List<Transaction>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(transactionService.getTransactions());
        return resp;
    }

    @GetMapping("/getTransactionById/{tId}")
    public HttpResponseModel<Optional<Transaction>> getTransactionById(@PathVariable Long tId){
        HttpResponseModel<Optional<Transaction>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(transactionService.getTransactionById(tId));
        return resp;
    }

    @PutMapping("/updateTransaction/{tId}")
    public HttpResponseModel<Transaction> updateTrasnaction(@PathVariable Long tId, @RequestBody Transaction transaction) {
        HttpResponseModel<Transaction> resp = new HttpResponseModel<>();
        transaction.setTId(tId);
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(transactionService.saveTransactionData(transaction));
        return resp;
    }
}
