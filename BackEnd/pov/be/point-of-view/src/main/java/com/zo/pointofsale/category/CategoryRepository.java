package com.zo.pointofsale.category;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CategoryRepository extends JpaRepository<Category,Long>{
    @Query("SELECT c.cId FROM Category c WHERE c.cName = :categoryName")
    Long findCategoryByName(@Param("categoryName") String categoryName);
}
