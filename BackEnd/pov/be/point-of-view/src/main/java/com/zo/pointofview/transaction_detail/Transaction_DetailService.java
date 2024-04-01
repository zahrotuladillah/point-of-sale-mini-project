package com.zo.pointofview.transaction_detail;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Transaction_DetailService {

    @Autowired
    Transaction_DetailRepository transaction_DetailRepository;

    public boolean isTransactionDetailExists(Long id){
        return transaction_DetailRepository.existsById(id);
    }
    
    public Transaction_Detail saveTransactionDetailData(Transaction_Detail transaction_Detail) {
        return transaction_DetailRepository.save(transaction_Detail);
    }

    public List<Transaction_Detail> getTransactionDetail() {
        return transaction_DetailRepository.findAll();
    }

    public Optional<Transaction_Detail> getTransactionDetailById(Long tdId) {
        return transaction_DetailRepository.findById(tdId);
    }

}
