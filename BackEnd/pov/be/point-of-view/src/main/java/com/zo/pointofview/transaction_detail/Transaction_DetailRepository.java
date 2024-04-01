package com.zo.pointofview.transaction_detail;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Transaction_DetailRepository extends JpaRepository<Transaction_Detail,Long>{
        List<Transaction_Detail> findByTdProductId(Long tdProductId);
}
