package com.grupo01.proyectointegrador.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.grupo01.proyectointegrador.Model.Categoria;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class CategoriaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void listar() throws Exception {
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.get("/categories/getList")
                        .accept(MediaType.APPLICATION_JSON))
                        .andDo(MockMvcResultHandlers.print())
                        .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //evaluo que no venga vacio
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
    }

    @Test
    void listarTitulos() throws Exception {
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.get("/categories/getListNames")
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //evaluo que no venga vacio
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
    }

    @Test
    void testBuscarId() throws Exception {
        //creo un objeto writer para pasar de objeto a String
        ObjectWriter writer = new ObjectMapper()
                .configure(SerializationFeature.WRAP_ROOT_VALUE,false)
                .writer();

        String categoriaEsperada = writer.writeValueAsString(new Categoria(8L,"TEST-UPDATE","TEST-UPDATE","una url de test"));

        //Ejecuto
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.get("/categories/findById/{id}",8).accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        //evaluo que no venga vacio y que el objeto retornado sea igual al esperado
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
        Assert.assertEquals(categoriaEsperada,resultado.getResponse().getContentAsString());
    }

    @Test
    void testBuscarName() throws Exception {
        //creo un objeto writer para pasar de objeto a String
        ObjectWriter writer = new ObjectMapper()
                .configure(SerializationFeature.WRAP_ROOT_VALUE,false)
                .writer();

        String categoriaEsperada = writer.writeValueAsString(new Categoria(8L,"TEST-UPDATE","TEST-UPDATE","una url de test"));

        //Ejecuto
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.get("/categories/findByName/{titulo}","TEST-UPDATE").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        //evaluo que no venga vacio y que el objeto retornado sea igual al esperado
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
        Assert.assertEquals(categoriaEsperada,resultado.getResponse().getContentAsString());
    }

    @Test
    void borrar() throws Exception {
        //respuesta esperada
        String respuesta = "Categoria con id: 1 no existe";

        MvcResult resultado = mockMvc.perform(MockMvcRequestBuilders.delete(
                        "/categories/delete/{id}","1").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().is4xxClientError()).andReturn();

        //valido respuesta esparada con la devolucion
        Assert.assertEquals(respuesta,resultado.getResponse().getContentAsString());
    }

    @Test
    void actualizar() throws Exception {
        //creo un objeto writer para pasar de objeto a String
        ObjectWriter writer = new ObjectMapper()
                .configure(SerializationFeature.WRAP_ROOT_VALUE,false)
                .writer();

        String categoriaJSON = writer.writeValueAsString(new Categoria(8L,"TEST-UPDATE","TEST-UPDATE","una url de test"));
        String categoriaEsperada = writer.writeValueAsString(new Categoria(8L,"TEST-UPDATE","TEST-UPDATE","una url de test"));

        //Ejecuto
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.put("/categories/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(categoriaJSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        //evaluo que no venga vacio y que el objeto retornado sea igual al esperado
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
        Assert.assertEquals(categoriaEsperada,resultado.getResponse().getContentAsString());
    }

    @Test
    void guardar() throws Exception {
        //creo un objeto writer para pasar de objeto a String
        ObjectWriter writer = new ObjectMapper()
                .configure(SerializationFeature.WRAP_ROOT_VALUE,false)
                .writer();

        String categoriaJSON = writer.writeValueAsString(new Categoria("TEST","TEST","una url de test"));
        String categoriaEsperada = writer.writeValueAsString(new Categoria(8L,"TEST","TEST","una url de test"));

        //Ejecuto
        MvcResult resultado = this.mockMvc.perform(MockMvcRequestBuilders.post("/categories/insert")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(categoriaJSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        //evaluo que no venga vacio y que el objeto retornado sea igual al esperado
        Assert.assertFalse(resultado.getResponse().getContentAsString().isEmpty());
        Assert.assertEquals(categoriaEsperada,resultado.getResponse().getContentAsString());
    }
}