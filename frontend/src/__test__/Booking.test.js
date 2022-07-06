import React from "react";
import Booking from "../components/Booking/Booking.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";
import userEvent from "@testing-library/user-event";


const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <Booking />
        </UserProvider>
    </BrowserRouter>
    );

describe('Verificar renderizado de elementos de la pantalla', () => {
    test('Verificar renderizado de titulo de las diferentes secciones',() => {
        setup();
        expect(screen.getByText('Completá tus datos')).toBeInTheDocument();
        expect(screen.getByText('Tu horario de llegada')).toBeInTheDocument();
        expect(screen.getByText('Seleccioná tu fecha de reserva')).toBeInTheDocument();
        expect(screen.getByText('Qué tenés que saber')).toBeInTheDocument();
        expect(screen.getByText('Detalle de la reserva')).toBeInTheDocument();
    });
    test('Verificar renderizado de botón Confirmar reserva',() => {
        setup();
        expect(screen.getByRole('button', { name: 'Confirmar reserva'})).toBeInTheDocument();
    });
    test('Verificar renderizado de labels de nombre, apellido, correo electrónico, ciudad y datos para el vendedor',() => {
        setup();
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Apellido')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo electronico')).toBeInTheDocument();
        expect(screen.getByLabelText('Ciudad')).toBeInTheDocument();
        expect(screen.getByLabelText('Datos para el vendedor (opcional)')).toBeInTheDocument();
        expect(screen.getByLabelText(/¿Se encuentra vacunado contra el COVID-19?/)).toBeInTheDocument();
    });
});
describe('Verificar que pueda escribirse texto en los inputs', () => {
   
    test('Verificar que input Ciudad permite escribir texto' , () => {
        setup();
        const cityInput = screen.getByLabelText('Ciudad');
        expect((cityInput).value).toBe('');
        fireEvent.change(cityInput, {target: {value: 'prueba'}})
        expect(cityInput.value).toMatch('prueba');
});
    test('Verificar que input Datos para el vendedor permite escribir texto' , () => {
                setup();
                const infoInput = screen.getByLabelText('Datos para el vendedor (opcional)');
                expect((infoInput).value).toBe('');
                // eslint-disable-next-line testing-library/no-unnecessary-act
                act(() => {
                    fireEvent.change(infoInput, {target: {value: 'prueba'}})
                });
                expect(infoInput.value).toMatch('prueba');
    });
    test('Verificar que pueden seleccionarse casilla vacunación Covid', () => {
        setup();
        const checkCovid = screen.getByLabelText(/¿Se encuentra vacunado contra el COVID-19?/);
        expect(checkCovid.checked).toBe(false);
        fireEvent.click(checkCovid);
        expect(checkCovid.checked).toBe(true);
    })
});

describe('Verificar lista desplegable de horarios', () => {
    test('Verificar renderizado de select',() => {
        setup();
        expect(screen.getByRole('combobox', { name: 'Indicá tu horario estimado de llegada'})).toBeInTheDocument();
    });
    test('Select muestra la opción por default correctamente', () => {
        setup()
        expect(screen.getByRole('option', { name: 'Seleccionar hora' }).selected).toBe(true)
    });
    test('Se muestran en el select un correcto número de opciones', () => {
        setup()
        expect(screen.getAllByTestId('select-option').length).toBe(24)
    })
    test('Verificar que pueden seleccionarse opciones', () => {
        setup();
        userEvent.selectOptions(
            screen.getByRole('combobox', { name: 'Indicá tu horario estimado de llegada'}),
            screen.getByText(/00:00AM/)
        );
        expect(screen.getByText(/00:00AM/).selected).toBe(true);
    })
});


describe('Verificar que no se efectue la reserva sin completar campos obligatorios',() =>{
     test('Verificar error en city input' , async() => {
        setup();
        const nameInput = screen.getByLabelText('Nombre');
        expect((nameInput).value).toBe('');
        fireEvent.change(nameInput, {target: {value: 'prueba'}});
        expect((nameInput).value).toBe('prueba');

        const lastnameInput = screen.getByLabelText('Apellido');
        expect((lastnameInput).value).toBe('');
        fireEvent.change(lastnameInput, {target: {value: 'prueba2'}});
        expect((lastnameInput).value).toBe('prueba2');

        const emailInput = screen.getByLabelText(/Correo electronico/);
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'prueba3@mail.com'}});
        expect((emailInput).value).toBe('prueba3@mail.com');
                
        const cityInput = screen.getByTestId('city_input');
        expect((cityInput).value).toBe('');
        fireEvent.change(cityInput, {target: {value: '' }});
        expect((cityInput).value).toBe(''); 

        const boton_confirmar_reserva = screen.getByRole('button', { name: 'Confirmar reserva'});
        fireEvent.click(boton_confirmar_reserva);
        expect((cityInput)).toHaveClass('error');
    });
    test('Verificar error en combobox si no selecciono fecha' , async() => {
        setup();
        const nameInput = screen.getByLabelText('Nombre');
        expect((nameInput).value).toBe('');
        fireEvent.change(nameInput, {target: {value: 'prueba'}});
        expect((nameInput).value).toBe('prueba');

        const lastnameInput = screen.getByLabelText('Apellido');
        expect((lastnameInput).value).toBe('');
        fireEvent.change(lastnameInput, {target: {value: 'prueba2'}});
        expect((lastnameInput).value).toBe('prueba2');

        const emailInput = screen.getByLabelText(/Correo electronico/);
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'prueba3@mail.com'}});
        expect((emailInput).value).toBe('prueba3@mail.com');
                
        const cityInput = screen.getByTestId('city_input');
        expect((cityInput).value).toBe('');
        fireEvent.change(cityInput, {target: {value: 'ciudadPrueba' }});
        expect((cityInput).value).toBe('ciudadPrueba'); 

        const hourSelect = screen.getByRole('combobox', { name: 'Indicá tu horario estimado de llegada'});

        const boton_confirmar_reserva = screen.getByRole('button', { name: 'Confirmar reserva'});
        fireEvent.click(boton_confirmar_reserva);
        expect((hourSelect)).toHaveClass('error'); 
    });
 })