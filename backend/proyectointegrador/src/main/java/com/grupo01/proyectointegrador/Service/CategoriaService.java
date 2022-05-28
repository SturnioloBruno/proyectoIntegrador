package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Categoria;
import com.grupo01.proyectointegrador.Repository.ICategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    ICategoriaRepository categoriaRepository;

    // Select All
    public List<Categoria> listarTodos() throws Exception{
        return categoriaRepository.findAll();
    }

    // Select All Titulos
    public List<String> listarTitulos() throws Exception{
        List<String> listaNombres = new ArrayList<>();

        for (Categoria categoria: categoriaRepository.findAll()) {
            listaNombres.add(categoria.getTitulo());
        }

        return listaNombres;
    }

    // Select for name
    public Categoria buscarTitulo(String titulo) throws  Exception{
        Optional<Categoria> categoria = categoriaRepository.findByTitulo(titulo);

        return categoria.orElse(null);//si esta lo retorna si no manda null
    }

    // Select for id
    public Categoria buscarId(Long id) throws  Exception{
        Optional<Categoria> categoria = categoriaRepository.findById(id);

        return categoria.orElse(null);//si esta lo retorna si no manda null
    }

    // Insert
    public Categoria guardar(Categoria categoria) throws  Exception{
        return categoriaRepository.save(categoria);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe
        Categoria categoria = buscarId(id);

        if(categoria == null){
           throw new Exception("Categoria con id: "+ id + " no existe");
        }

        categoriaRepository.deleteById(id);
    }

    // Update
    public Categoria actualizar(Categoria categoria) throws Exception{
        Categoria categoriaBuscada = buscarId(categoria.getId());

        if(categoriaBuscada== null){
            throw new Exception("Categoria con id: "+ categoria.getId() + "no existe");
        }

            return categoriaRepository.save(categoria);
    }
}
