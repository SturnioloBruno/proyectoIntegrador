package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.City;
import com.grupo01.proyectointegrador.Repository.ICityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    @Autowired
    ICityRepository cityRepository;

    // Select All
    public List<City> getListAll() throws Exception{
        return cityRepository.findAll();
    }

    // Select All Names and Counntry
    public List<String> getListNanesAndCountry() throws Exception{
        List<String> listaNombres = new ArrayList<>();

        for (City city: cityRepository.findAll()) {
            listaNombres.add(city.getCityName()+ " " +city.getCountry());
        }

        return listaNombres;
    }

    // Select for id
    public City buscarId(Long id) throws  Exception{
        Optional<City> city = cityRepository.findById(id);

        return city.orElse(null);//si esta lo retorna si no manda null
    }

    // Insert
    public City guardar(City city) throws  Exception{
        return cityRepository.save(city);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe
        City city = buscarId(id);

        if(city == null){
            throw new Exception("Ciudad con id: "+ id + " no existe");
        }

        cityRepository.deleteById(id);
    }

    // Update
    public City actualizar(City city) throws Exception{
        City cityBuscada = buscarId(city.getId());

        if(cityBuscada== null){
            throw new Exception("Ciudad con id: "+ city.getId() + " no existe");
        }

        return cityRepository.save(city);
    }
}
