
package com.argprog.gerardomedina.Service;

import com.argprog.gerardomedina.Entity.Persona;
import com.argprog.gerardomedina.Interface.IPersonaService;
import com.argprog.gerardomedina.Repository.IPersonaRepositry;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepositry ipersonaRepository;
    
    @Override
    public List<Persona> getPersona() {
       List<Persona> persona = ipersonaRepository.findAll();
       return persona;
    }

    @Override
    public void savePersona(Persona persona) {
    ipersonaRepository.save(persona);  
    }

    @Override
    public void deletePersona(long id) {
       ipersonaRepository.deleteById(id);  
    
    }

    @Override
    public Persona findPersona(long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
