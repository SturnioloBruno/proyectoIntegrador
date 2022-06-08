import React from "react";
import ReactDOM from "react-dom";
import Register from "../components/login/Register.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'

const setup = () => render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

describe('Verificar renderizado del formulario', () => {
    test('Verificar renderizado de labels de nombre, apellido, correo electrónico, contraseña y verificar contraseña',() => {
        setup();
        expect(screen.getByText('Nombre')).toBeInTheDocument();
        expect(screen.getByText('Apellido')).toBeInTheDocument();
        expect(screen.getByText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByText('Contraseña')).toBeInTheDocument();
        expect(screen.getByText('Verificar contraseña')).toBeInTheDocument();
    });
    // test('Verificar renderizado de botón Crear cuenta',() => {
    //     const button = screen.getByRole('button');
    //     expect(button).toHaveTextContent('submit');
    // });
});