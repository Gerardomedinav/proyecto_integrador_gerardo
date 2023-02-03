
package com.argprog.gerardomedina.Interface;

import com.argprog.gerardomedina.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto persona
    public void savePersona (Persona persona);
    
    //Eliminar Persona por Id
    public void deletePersona(long id);
    
    //buscar persona por id
    public Persona findPersona(long id);
    
}

