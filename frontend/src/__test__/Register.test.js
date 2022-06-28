import React from "react";
import ReactDOM from "react-dom";
import Register from "../components/login/Register.js";
import Header from "../components/Header.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";

const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <Register />
            <Header />
        </UserProvider>
    </BrowserRouter>
    );

describe('Verificar renderizado del formulario', () => {
    test('Verificar renderizado de labels de nombre, apellido, correo electrónico, contraseña y verificar contraseña',() => {
        setup();
        expect(screen.getByText('Nombre')).toBeInTheDocument();
        expect(screen.getByText('Apellido')).toBeInTheDocument();
        expect(screen.getByText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByText('Contraseña')).toBeInTheDocument();
        expect(screen.getByText('Confirmar contraseña')).toBeInTheDocument();
    });
    test('Verificar renderizado de botón Crear cuenta',() => {
        setup()
        expect(screen.getByRole('button', { name: 'Crear cuenta'})).toBeInTheDocument();
    });

    test('Verificar onClick en botón Crear cuenta', async () => {
        setup()
        const button = screen.getByTestId("Button"); 
        fireEvent.click(button);
        
        expect(screen.getByRole('banner')).toBeTruthy(); 
    });
});

describe('Verificar que pueda escribirse texto en los inputs', () => {
    test('Verificar que input Nombre permite escribir texto' , () => {
                setup();
                const nameInput = screen.getByLabelText('Nombre');
                expect((nameInput).value).toBe('');
                fireEvent.change(nameInput, {target: {value: 'prueba'}})
                expect(nameInput.value).toMatch('prueba');
        });
    test('Verificar que input Apellido permite escribir texto' , () => {
                setup();
                const lastnameInput = screen.getByLabelText('Apellido');
                expect((lastnameInput).value).toBe('');
                fireEvent.change(lastnameInput, {target: {value: 'prueba'}})
                expect(lastnameInput.value).toMatch('prueba');
            });
    test('Verificar que input Correo electrónico permite escribir texto' , () => {
                setup();
                const emailInput = screen.getByLabelText('Correo electrónico');
                expect((emailInput).value).toBe('');
                fireEvent.change(emailInput, {target: {value: 'prueba'}})
                expect(emailInput.value).toMatch('prueba');
            });
    test('Verificar que input Contraseña permite escribir texto' , () => {
                setup();
                const passwordInput = screen.getByTestId('password_input'); 
                expect((passwordInput).value).toBe('');
                fireEvent.change(passwordInput, {target: {value: 'prueba'}})
                expect(passwordInput.value).toMatch('prueba');
            });
    test('Verificar que input Confirmar contraseña permite escribir texto' , () => {
                setup();
                const passwordInput = screen.getByLabelText(/Confirmar contraseña/);
                expect((passwordInput).value).toBe('');
                fireEvent.change(passwordInput, {target: {value: 'prueba'}})
                expect(passwordInput.value).toMatch('prueba');
            });
  
});

describe('Verificar validaciones en los inputs', () => {
    test('Verificar que input email no acepte vacio' , () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((emailInput).value).toBe('');
        
        fireEvent.click(button);
        
        expect(screen.getByText("El campo es obligatorio")).toBeTruthy();

    });
    test('Verificar que input email contenga @' , () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByTestId('password_input'); 
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mailprueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'Prueba1'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo email no cumple con el formato")).toBeTruthy();

    });
    test('Verificar que input password no acepte vacio' , () => {
        setup();
        const passwordInput = screen.getByTestId('password_input'); 
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((passwordInput).value).toBe('');
        
        fireEvent.click(button);
        
        expect(screen.getByText("El campo es obligatorio")).toBeTruthy();

    });
    test('Verificar que input Confirmar contraseña no acepte vacio' , async () => {
        setup();
        const confirmPasswordInput = screen.getByLabelText(/Confirmar contraseña/);
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((confirmPasswordInput).value).toBe('');
        
        fireEvent.click(button);
        
        expect(screen.getByText("El campo es obligatorio")).toBeTruthy();

    });
    test('Verificar que input password tiene mas de seis caracteres' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByTestId('password_input');
        const button = screen.getByRole('button',{name:"Crear cuenta"})
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
        const passwordInput = screen.getByTestId('password_input');
        const button = screen.getByRole('button',{name:"Crear cuenta"})
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
        const passwordInput = screen.getByTestId('password_input'); 
        const button = screen.getByRole('button',{name:"Crear cuenta"})
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
        const passwordInput = screen.getByTestId('password_input');
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'Prueba'}})
        fireEvent.click(button);
         expect(screen.getByText("El campo debe contener al menos un número")).toBeTruthy();
    });
    test('Verificar que input password no sea distinto de Confirmar contraseña' , async () => {
        setup();
        const emailInput = screen.getByLabelText('Correo electrónico');
        const passwordInput = screen.getByTestId('password_input');
        const confirmPasswordInput = screen.getByLabelText(/Confirmar contraseña/)
        const button = screen.getByRole('button',{name:"Crear cuenta"})
        expect((emailInput).value).toBe('');
        fireEvent.change(emailInput, {target: {value: 'mail@prueba.com'}})
        expect((passwordInput).value).toBe('');
        fireEvent.change(passwordInput, {target: {value: 'Prueba1'}})
        expect((confirmPasswordInput).value).toBe('');
        fireEvent.change(confirmPasswordInput, {target: {value: 'Prueba2'}})
        fireEvent.click(button);
         expect(screen.getByText("No coinciden las contraseñas")).toBeTruthy();
    });
    test('Verificar cambio del icono de ojo al ser clickeado' , async () => {
        setup();
        const eyeButton = screen.getByTestId('eye');
        
        fireEvent.click(eyeButton);
         expect(screen.getByTestId('eye')).toHaveClass('show');
         fireEvent.click(eyeButton);
         expect(screen.getByTestId('eye')).not.toHaveClass('show');
    });


 });


