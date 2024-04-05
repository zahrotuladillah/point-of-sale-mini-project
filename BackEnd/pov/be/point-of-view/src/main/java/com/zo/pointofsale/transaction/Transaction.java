package com.zo.pointofsale.transaction;

// import java.sql.Date;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import com.zo.pointofsale.transaction_detail.Transaction_Detail;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long tId;
    
    @Column(name = "transaction_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp tTransactionDate = new Timestamp(new Date().getTime());

    @Column(name = "total_amount")
    private Long tTotalAmount;
    @Column(name = "total_pay")
    private Long tTotalPay;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "tdTransactionId", referencedColumnName = "id")
    private List<Transaction_Detail> transaction_details;

}
