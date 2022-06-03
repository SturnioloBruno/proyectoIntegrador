package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Characteristic;
import com.grupo01.proyectointegrador.Model.Policy;
import com.grupo01.proyectointegrador.Repository.IPolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class PolicyService {

    @Autowired
    IPolicyRepository policyRepository;

    public Policy guardar(Policy policy) throws Exception {
        return policyRepository.save(policy);
    }

    public Policy buscarId(Long id) throws Exception {
        Optional<Policy> policy = policyRepository.findById(id);
        return policy.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        Policy policy = buscarId(id);
        if(policy != null) {
            policyRepository.deleteById(id);
        }
        else{
            throw new Exception("Politica con id: "+ id + " no existe");
        }
    }

    public Policy actualizar (Policy policy) throws Exception {
        Policy policy1 = buscarId(policy.getId());
        if (policy1 != null){
            return policyRepository.save(policy);
        }
        else{
            throw new Exception("Politica con id: "+ policy.getId() + " no existe");
        }
    }
}
