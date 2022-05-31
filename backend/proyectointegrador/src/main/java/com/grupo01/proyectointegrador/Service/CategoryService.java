package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Category;
import com.grupo01.proyectointegrador.Repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    // Select All
    public List<Category> listarTodos() throws Exception{
        return categoryRepository.findAll();
    }

    // Select All Titulos
    public List<String> listarTitulos() throws Exception{
        List<String> listaNombres = new ArrayList<>();

        for (Category category: categoryRepository.findAll()) {
            listaNombres.add(category.getTitle());
        }

        return listaNombres;
    }

    // Select for name
    public Category buscarTitulo(String titulo) throws  Exception{
        Optional<Category> category = categoryRepository.findByTitulo(titulo);

        return category.orElse(null);//si esta lo retorna si no manda null
    }

    // Select for id
    public Category buscarId(Long id) throws  Exception{
        Optional<Category> category = categoryRepository.findById(id);

        return category.orElse(null);//si esta lo retorna si no manda null
    }

    // Insert
    public Category guardar(Category category) throws  Exception{
        return categoryRepository.save(category);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe
        Category category = buscarId(id);

        if(category == null){
           throw new Exception("Categoria con id: "+ id + " no existe");
        }

        categoryRepository.deleteById(id);
    }

    // Update
    public Category actualizar(Category category) throws Exception{
        Category categoryBuscada = buscarId(category.getId());

        if(categoryBuscada== null){
            throw new Exception("Categoria con id: "+ category.getId() + " no existe");
        }

            return categoryRepository.save(category);
    }
}
