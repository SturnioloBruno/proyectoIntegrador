import React, { Component } from "react";
import CreateHotel from "../components/Admin/CreateHotel"; 
import { render, screen, act, fireEvent, cleanUp} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";
import userEvent from "@testing-library/user-event";

const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <CreateHotel />
        </UserProvider>
    </BrowserRouter>
    );

    describe('Verificar renderizado del titulos de la sección ', () => {
        test('Verificar renderizado del titulo de la sección',() => {
            setup();
            expect(screen.getByText('Administración de productos')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 2',() => {
            setup();
            expect(screen.getByText('Crear propiedad')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 3',() => {
            setup();
            expect(screen.getByText('Nombre de la propiedad')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 4',() => {
            setup();
            expect(screen.getByText('Categoría')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 5',() => {
            setup();
            expect(screen.getByText('Dirección')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 6',() => {
            setup();
            expect(screen.getByText('Ciudad')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 7',() => {
            setup();
            expect(screen.getByText('Latitud')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 8',() => {
            setup();
            expect(screen.getByText('Longitud')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 9',() => {
            setup();
            expect(screen.getByText('Agregar atributos')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 10',() => {
            setup();
            expect(screen.getByText('Políticas del producto')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 11',() => {
            setup();
            expect(screen.getByText('Normas de la casa')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 12',() => {
            setup();
            expect(screen.getByText('Salud y seguridad')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 13',() => {
            setup();
            expect(screen.getByText('Política de cancelación')).toBeInTheDocument();
        });
        test('Verificar renderizado del titulo de la sección 14',() => {
            setup();
            expect(screen.getByText('Cargar imágenes')).toBeInTheDocument();
        });
        test('Verificar renderizado de botón agregar',() => {
            setup();
            expect(screen.getByRole('button', {name:'Agregar'})).toBeInTheDocument();
        });
        test('Verificar renderizado de botón crear',() => {
            setup();
            expect(screen.getByRole('button', {name:'Crear'})).toBeInTheDocument();
        });
        
    });
    describe('Verificar que pueda escribirse texto en los inputs', () => {
        test('Verificar que input Nombre de la propiedad permite escribir texto' , () => {
            setup();
            const nombreInput = screen.getByLabelText('Nombre de la propiedad');
            expect((nombreInput).value).toBe('');
            fireEvent.change(nombreInput, {target: {value: 'nombrePrueba'}})
            expect(nombreInput.value).toMatch('nombrePrueba');
            
        });
        test('Verificar que input dirección permite escribir texto' , () => {
            setup();
            const direccionInput = screen.getByLabelText(/Dirección/); 
            expect((direccionInput).value).toBe('');
            fireEvent.change(direccionInput, {target: {value: 'direccionPrueba'}})
            expect(direccionInput.value).toMatch('direccionPrueba');
        });
        test('Verificar que input descripcion permite escribir texto' , () => {
            setup();
            const descripcionInput = screen.getByLabelText(/Descripción/); 
            expect((descripcionInput).value).toBe('');
            fireEvent.change(descripcionInput, {target: {value: 'descripcionPrueba'}})
            expect(descripcionInput.value).toMatch('descripcionPrueba');
        });
    });

    // describe('Verificar lista desplegable de categorías', () => {
        
    //     test('Verificar renderizado de select',() => {
    //         setup();
    //         expect(screen.getByRole('combobox', { name: 'Categoría'})).toBeInTheDocument();
    //     });
       
    //     test('Se muestran en el select un correcto número de opciones', () => {
    //         setup()
    //         expect(screen.getAllByRole('option').length).toBe(4)
    //     })
    //     test('Verificar que pueden seleccionarse opciones', () => {
    //         setup();
    //         userEvent.selectOptions(
    //             screen.getByRole('combobox', { name: 'Categoría'}),
    //             screen.getByRole('option', {value:"{category.title}"})
    //         );

    //         expect(screen.getByText(/Hotel/).selected).toBe(true);
    //     })
    // });
    