package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.ProductCharacteristic;
import com.grupo01.proyectointegrador.Repository.IProductCharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductCharacteristicService {

    @Autowired
    IProductCharacteristicRepository productCharacteristicRepository;

    public ProductCharacteristic save(ProductCharacteristic productCharacteristic){
        return productCharacteristicRepository.save(productCharacteristic);
    }
}
