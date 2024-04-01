package com.zo.pointofview.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zo.pointofview.HttpResponseModel;

import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.data.domain.Sort;
// import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    @Autowired
    ProductService productService;

    @PostMapping("/saveProduct")
    public HttpResponseModel<Product> saveProduct(@RequestBody Product product) {
        HttpResponseModel<Product> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.saveProductData(product));
        return resp;
    }

    @GetMapping("/getProduct")
    public HttpResponseModel<List<Product>> getProducts() {
        HttpResponseModel<List<Product>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.getProducts());
        return resp;
    }

    @GetMapping("/getProductById/{pId}")
    public HttpResponseModel<Optional<Product>> getProductById(@PathVariable Long pId) {
        HttpResponseModel<Optional<Product>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.getProductById(pId));
        return resp;
    }

    @GetMapping("/getNameProductById")
    public HttpResponseModel<String> getNameProductById(@RequestParam Long pId) {
        HttpResponseModel<String> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.getNameProductById(pId));
        return resp;
    }

    @GetMapping("/getProductFiltered")
    public HttpResponseModel<List<Product>> findProductsByNameAndCategoryIdSorted(
            @RequestParam("name") String pName,
            @RequestParam("categoryId") Long pCategoryId,
            @RequestParam("sortBy") String sortBy,
            @RequestParam("sortDirection") String sortDirection) {
        HttpResponseModel<List<Product>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.getBypNameAndCategory(pName, pCategoryId, sortBy, sortDirection));
        return resp;
    }

    @PutMapping("/updateProduct/{pId}")
    public HttpResponseModel<Product> putMethodName(@PathVariable Long pId, @RequestBody Product product) {
        HttpResponseModel<Product> resp = new HttpResponseModel<>();
        product.setPId(pId);
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.saveProductData(product));
        return resp;
    }

    @DeleteMapping("/deleteProductbyId")
    public HttpResponseModel<List<Product>> deleteProductById(@RequestParam Long pId) {
        HttpResponseModel<List<Product>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(productService.deleteProductById(pId));
        return resp;
    }
}
