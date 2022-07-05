package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Characteristic;
import com.grupo01.proyectointegrador.Repository.ICharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicService {

    @Autowired
    ICharacteristicRepository characteristicRepository;

    public Characteristic guardar(Characteristic characteristic) throws Exception {
        return characteristicRepository.save(characteristic);
    }

    public Characteristic buscarId(Long id) throws Exception {
        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        return characteristic.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        Characteristic characteristic = buscarId(id);
        if(characteristic != null) {
            characteristicRepository.deleteById(id);
        }
        else{
            throw new Exception("Caracteristica con id: "+ id + " no existe");
        }
    }

    public Characteristic actualizar (Characteristic characteristic) throws Exception {
        Characteristic characteristic1 = buscarId(characteristic.getId());
        if (characteristic1 != null){
            return characteristicRepository.save(characteristic);
        }
        else{
            throw new Exception("Caracteristica con id: "+ characteristic.getId() + " no existe");
        }
    }

    public List<Characteristic> listarTodos() throws Exception{
        return characteristicRepository.findAll();
    }
}
