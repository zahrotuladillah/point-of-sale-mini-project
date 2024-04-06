package com.zo.pointofsale.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.zo.pointofsale.category.CategoryRepository;
import com.zo.pointofsale.transaction_detail.Transaction_Detail;
import com.zo.pointofsale.transaction_detail.Transaction_DetailRepository;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    Transaction_DetailRepository transaction_DetailRepository;

    public boolean isProductExists(Long id) {
        return productRepository.existsById(id);
    }

    public Product saveProductData(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long pId) {
        return productRepository.findById(pId);
    }

    public String getNameProductById(Long pId) {
        return productRepository.findProductNameById(pId);
    }

    public List<Product> getBypNameAndCategory(String name, String cName, String sortBy, String direction) {
        Sort sort = null;
        Long cId;
        if (direction != null && sortBy != null) {
            if ("ASC".equalsIgnoreCase(direction)) {
                sort = Sort.by(Sort.Direction.ASC, sortBy);
            } else if ("DESC".equalsIgnoreCase(direction)) {
                sort = Sort.by(Sort.Direction.DESC, sortBy);
            }
        }

        if (name != null && !name.equals("null")) {
            if (cName != "") {
                cId = categoryRepository.findCategoryByName(cName);
                return sort != null ? productRepository.findBypNameContainsAndPCategoryId(name, cId, sort)
                        : productRepository.findBypNameContainsAndPCategoryId(name, cId);
            } else {
                return sort != null ? productRepository.findBypNameContains(name, sort)
                        : productRepository.findBypNameContains(name);
            }
        } else {
            if (cName != "") {
                cId = categoryRepository.findCategoryByName(cName);
                return sort != null ? productRepository.findByPCategoryId(cId, sort)
                        : productRepository.findByPCategoryId(cId);
            } else {
                return sort != null ? productRepository.findAll(sort) : productRepository.findAll();
            }
        }
    }

    public List<Product> deleteProductById(Long id) {
        List<Transaction_Detail> transactionDetail = transaction_DetailRepository.findByTdProductId(id);

        if (transactionDetail.size() != 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Product already registered in Transaction History!");
        }
        productRepository.deleteById(id);
        return productRepository.findAll();
    }

}
