package com.zo.pointofsale.product;

import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p.pName FROM Product p WHERE p.pId = :productId")
    String findProductNameById(@Param("productId") Long productId);

    List<Product> findBypNameContains(String pName);

    List<Product> findBypNameContains(String pName, Sort sort);

    List<Product> findByPCategoryId(Long pCategoryId);

    List<Product> findByPCategoryId(Long pCategoryId, Sort sort);

    List<Product> findBypNameContainsAndPCategoryId(String pName, Long pCategoryId);

    List<Product> findBypNameContainsAndPCategoryId(String pName, Long pCategoryId, Sort sort);
}
