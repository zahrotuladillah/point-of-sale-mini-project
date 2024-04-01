package com.zo.pointofview.transaction;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    @Autowired
    TransactionRepository transactionRepository;

    public boolean isTransactionExists(Long id){
        return transactionRepository.existsById(id);
    }

    public Transaction saveTransactionData(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public List<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    public Optional<Transaction> getTransactionById(Long tId) {
        return transactionRepository.findById(tId);
    }

}
