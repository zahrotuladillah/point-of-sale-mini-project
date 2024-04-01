package com.zo.pointofview.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.zo.pointofview.transaction_detail.Transaction_Detail;
import com.zo.pointofview.transaction_detail.Transaction_DetailRepository;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

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

    public List<Product> getBypNameAndCategory(String name, Long cId, String sortBy, String direction) {
        Sort sort = null;
        if (direction != null && sortBy != null) {
            if ("ASC".equalsIgnoreCase(direction)) {
                sort = Sort.by(Sort.Direction.ASC, sortBy);
            } else if ("DESC".equalsIgnoreCase(direction)) {
                sort = Sort.by(Sort.Direction.DESC, sortBy);
            }
        }

        if (name != null && !name.equals("null")) {
            if (cId != 0) {
                return sort != null ? productRepository.findBypNameContainsAndPCategoryId(name, cId, sort)
                        : productRepository.findBypNameContainsAndPCategoryId(name, cId);
            } else {
                return sort != null ? productRepository.findBypNameContains(name, sort)
                        : productRepository.findBypNameContains(name);
            }
        } else {
            if (cId != 0) {
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
