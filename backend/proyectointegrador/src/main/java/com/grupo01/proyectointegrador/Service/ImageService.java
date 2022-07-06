package com.grupo01.proyectointegrador.Service;


import com.grupo01.proyectointegrador.Model.Image;
import com.grupo01.proyectointegrador.Repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    IImageRepository imageRepository;

    // Select All
    public List<Image> listAll() throws Exception{
        return imageRepository.findAll();
    }

    // Select for product id
    public List<String> findByProId(Long id) throws  Exception{
        List<String> imageReturn = new ArrayList<>();
        Optional<List<Image>> imagesDB = imageRepository.findByProId(id);
        if (!imagesDB.isEmpty()) {
            for (Image imageFind : imagesDB.get())             {
            imageReturn.add(imageFind.getNombre_url());
            }
        }
        return imageReturn;

    }

    // Insert
    public Image guardar(Image image) throws  Exception{
        return imageRepository.save(image);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe

        Optional<Image> imageFind = imageRepository.findById(id);

        if(imageFind.isEmpty()){
            throw new Exception("Image con id: "+ id + " no existe");
        }

        imageRepository.deleteById(id);
    }

    // Update
    public Image actualizar(Image image) throws Exception{
        Optional<Image> imageFind = imageRepository.findById(image.getId());
        if(imageFind.isEmpty()){
            throw new Exception("Image with id: "+ image.getId() + " no existe");
        }
        return imageRepository.save(image);
    }
}
