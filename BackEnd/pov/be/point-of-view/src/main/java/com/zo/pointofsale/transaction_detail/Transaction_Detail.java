package com.zo.pointofsale.transaction_detail;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@Data
@NoArgsConstructor
public class Transaction_Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long tdId;
    @Column(name = "quantity")
    private Long tdQuantity;
    @Column(name = "subtotal")
    private Long tdSubtotal;
    @Column(name = "product id")
    private Long tdProductId;
}
