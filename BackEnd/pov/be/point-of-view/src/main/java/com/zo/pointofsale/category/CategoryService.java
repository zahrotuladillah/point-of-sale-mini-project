package com.zo.pointofsale.category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.zo.pointofsale.product.Product;
import com.zo.pointofsale.product.ProductRepository;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    public Category saveCategoryData(Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(Long cId) {
        return categoryRepository.findById(cId);
    }

    public boolean isCategoryExists(Long id){
        return categoryRepository.existsById(id);
    }

    public List<Category> deleteCategory(Long cId) {
        List<Product> products = productRepository.findByPCategoryId(cId);
        if (products.size() != 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Category already registered in Product!");
        }
        categoryRepository.deleteById(cId);
        return categoryRepository.findAll();
    }

    public Long getCategoryByName(String cName) {
        return categoryRepository.findCategoryByName(cName);
    }

}
