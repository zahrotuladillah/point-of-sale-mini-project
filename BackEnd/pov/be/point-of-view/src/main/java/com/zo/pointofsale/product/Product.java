package com.zo.pointofsale.product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
// import lombok.Getter;
import lombok.NoArgsConstructor;
// import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long pId;
    @Column(name = "name")
    private String pName;
    @Column(name = "price")
    private Long pPrice;
    @Column(name = "image")
    private String pImage;
    @Column(name = "categoryid")
    private Long PCategoryId;
}
