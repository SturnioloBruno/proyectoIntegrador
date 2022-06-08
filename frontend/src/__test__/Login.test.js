/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import ReactDOM from "react-dom";
import Login from "../components/login/Login.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'

const setup = () => render(
        <BrowserRouter>
            <Login />
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
        expect(screen.getByText('Ingresar')).toBeInTheDocument();
    });
});

// describe('Verificar que pueda escribirse texto en los inputs', () => {
//     test('Verificar que inputs email permite escribir texto' , () => {
//         const emailInput = 'test@mail.com';
//         expect(validateInput(emailInput).toBe(true);
//     });
// });

// test('submit login', () => {
//     setup();
//     fireEvent.change(screen.getByLabelText(/email_login/i), {target: {value: 'test@mail.com'}})
//     fireEvent.change(screen.getByLabelText(/password_login/i), {target: {value: 'password'}})
//     screen.getByText(/Ingresar/i).click()
   
//     expect(handleSubmit).toHaveBeenCalledTimes(1)
//     expect(handleSubmit).toHaveBeenCalledWith({
//      username: 'johndoe',
//      password: 'password'
//     })
//    })