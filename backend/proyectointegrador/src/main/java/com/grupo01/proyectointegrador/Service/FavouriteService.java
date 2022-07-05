package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Favourite;
import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Repository.IFavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FavouriteService {

    @Autowired
    IFavouriteRepository favouriteRepository;

    @Autowired
    UserService userService;

    public Favourite guardar(Favourite favourite) throws Exception {
        return favouriteRepository.save(favourite);
    }

    public Favourite buscarId(Long id) throws Exception{
        Optional<Favourite> favourite = favouriteRepository.findById(id);
        return favourite.orElse(null);
    }

    public void borrar(Long id) throws Exception {
        Favourite favourite = buscarId(id);
        if(favourite != null){
            favouriteRepository.deleteById(id);
        }
        else{
            throw new Exception("No existe favorito con el id: " + id);
        }
    }

    public List<Favourite> getByUserId(Long id) throws Exception {
        User user = userService.buscarId(id);

        List<Favourite> favouriteList = new ArrayList<>();
        Optional<List<Favourite>> optionalFavouriteList = favouriteRepository.getByUserId(user);

        if(!optionalFavouriteList.isEmpty()){
            for (Favourite favourite : optionalFavouriteList.get()){
                favouriteList.add(favourite);
            }
        }
        return favouriteList;
    }

}
