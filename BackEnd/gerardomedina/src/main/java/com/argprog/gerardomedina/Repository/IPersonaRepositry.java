
package com.argprog.gerardomedina.Repository;

import com.argprog.gerardomedina.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepositry extends JpaRepository<Persona,Long> {
    
}
