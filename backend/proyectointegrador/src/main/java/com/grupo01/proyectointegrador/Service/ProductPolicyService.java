package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.ProductPolicy;
import com.grupo01.proyectointegrador.Repository.IProductPolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductPolicyService {

    @Autowired
    IProductPolicyRepository productPolicyRepository;

    public ProductPolicy save(ProductPolicy productPolicy){
        return productPolicyRepository.save(productPolicy);
    }
}
