import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'

const setup = () => render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

describe ('Renderizado de elementos',() =>{
    test('Verificar renderizado del logotipo',() => {
        setup();
        expect(screen.getByText('Digital Booking')).toBeTruthy();
    });

    test('Verificar renderizado del lema del sitio',() => {
        setup();
        expect(screen.getByText('Sentite como en tu hogar')).toBeTruthy();
    });

    test('Verificar renderizado de botón Iniciar sesión',() => {
        setup();
        expect(screen.getByText('Iniciar sesión')).toBeTruthy();
    });

    test('Verificar renderizado de botón Crear cuenta',() => {
        setup();
        expect(screen.getByText('Crear cuenta')).toBeTruthy();
    });
});

// describe ('Evento onClick', () => {
//     test('Verificar evento onclick iniciar sesion', async () => {
//         setup();
//         const boton_iniciar_sesion = screen.getByText("Iniciar sesión");
//         // eslint-disable-next-line testing-library/no-unnecessary-act
//         act(() => {
//             fireEvent.click(boton_iniciar_sesion);
//         });
//         expect(boton_iniciar_sesion).not.toHaveTextContent('Iniciar sesión');
//     });
// });