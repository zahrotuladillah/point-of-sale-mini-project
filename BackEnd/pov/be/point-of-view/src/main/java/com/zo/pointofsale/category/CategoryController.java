package com.zo.pointofsale.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zo.pointofsale.HttpResponseModel;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/saveCategory")
    public HttpResponseModel<Category> saveCategory(@RequestBody Category category) {
        HttpResponseModel<Category> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.saveCategoryData(category));
        return resp;
    }

    @GetMapping("/getCategory")
    public HttpResponseModel<List<Category>> getCategories() {
        HttpResponseModel<List<Category>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.getCategories());
        return resp;
    }

    @GetMapping("/getCategoryById/{cId}")
    public HttpResponseModel<Optional<Category>> getCategoryById(@PathVariable Long cId) {
        HttpResponseModel<Optional<Category>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.getCategoryById(cId));
        return resp;
    }

    @GetMapping("/getCategoryByName")
    public HttpResponseModel<Long> getCategoryByName(@RequestParam String cName) {
        HttpResponseModel<Long> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.getCategoryByName(cName));
        return resp;
    }

    @PutMapping("/updateCategory/{cId}")
    public HttpResponseModel<Category> updateCategory(@PathVariable Long cId, @RequestBody Category category) {
        HttpResponseModel<Category> resp = new HttpResponseModel<>();
        category.setCId(cId);
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.saveCategoryData(category));
        return resp;
    }

    @DeleteMapping("/deleteCategorybyId")
    public HttpResponseModel<List<Category>> deleteCategoryById(@RequestParam("id") Long cId) {
        HttpResponseModel<List<Category>> resp = new HttpResponseModel<>();
        resp.setMessage("OK");
        resp.setStatus(200);
        resp.setData(categoryService.deleteCategory(cId));
        return resp;
    }
}
