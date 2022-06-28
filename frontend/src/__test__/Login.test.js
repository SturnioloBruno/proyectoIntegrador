/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import ReactDOM from "react-dom";
import Login from "../components/login/Login.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";

const setup = () => render(
        <BrowserRouter>
            <UserProvider>
                <Login />
            </UserProvider>
        </BrowserRouter>
    );

describe('Verificar renderizado del formulario', () => {
    test('Verificar renderizado de labels de correo electrónico y contraseña',() => {
        setup();
        expect(screen.getByText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByText('Contraseña')).toBeInTheDocument();
    });
    test('Verificar renderizado de Botón Ingresar',() => {
        setup();
        // expect(screen.getByText('Ingresar')).toBeInTheDocument();
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect(button.textContent).toBe("Ingresar");
    }); 
});

describe('Verificar que pueda escribirse texto en los inputs', () => {
    test('Verificar que input email permite escribir texto' , () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'prueba'}})
        expect(emailInput.value).toMatch('prueba');
        
    });
    test('Verificar que input contraseña permite escribir texto' , () => {
        setup();
        const passwordInput = screen.getByLabelText(/Contraseña/); 
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'prueba'}})
        expect(passwordInput.value).toMatch('prueba');
    });
});

describe('Verificar validaciones en los inputs', () => {
    test('Verificar que input email no acepte vacio' , () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        
        fireEvent.click(button);
        
        expect(screen.getByText("El campo es obligatorio")).toBeTruthy();

    });
    test('Verificar que input email contenga @' , () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByTestId('password_input'); 
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mailprueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'Prueba1'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo email no cumple con el formato")).toBeTruthy();

    });
    test('Verificar que input password no acepte vacio' , () => {
        setup();
        const passwordInput = screen.getByLabelText(/Contraseña/i);
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((passwordInput).value).toBe('');
        
        fireEvent.click(button);
        
        expect(screen.getByText("El campo es obligatorio")).toBeTruthy();

    });
    test('Verificar que input password tiene mas de seis caracteres' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByLabelText(/Contraseña/i);
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'hola'}})
        fireEvent.click(button);
         expect(screen.getByText("La contraseña debe contener más de 6 caracteres")).toBeTruthy();
    });
    test('Verificar que input password contiene una mayúscula' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByLabelText(/Contraseña/i);
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'prueba'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo debe contener al menos una letra mayúscula")).toBeTruthy();
    });
    test('Verificar que input password contiene al menos una minúscula' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByLabelText(/Contraseña/i);
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'PRUEBA'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo debe contener al menos una letra minúscula")).toBeTruthy();
    });
    test('Verificar que input password contiene al menos un número' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByLabelText(/Contraseña/i);
        const button = screen.getByRole('button',{name:"Ingresar"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'Prueba'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo debe contener al menos un número")).toBeTruthy();
    });
    test('Verificar cambio del icono de ojo al ser clickeado' , async () => {
        setup();
        const eyeButton = screen.getByRole('link', {name: 'Show/Hide'});
        
        fireEvent.click(eyeButton);
         expect(screen.getByRole('link', {name: 'Show/Hide'})).toHaveClass('show');
         fireEvent.click(eyeButton);
         expect(screen.getByRole('link', {name: 'Show/Hide'})).not.toHaveClass('show');
    });

    
});