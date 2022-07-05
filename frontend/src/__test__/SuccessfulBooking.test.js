
import React from "react";
import ReactDOM from "react-dom";
import SuccessfulBooking from "../components/Booking/SuccessfulBooking.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";


const setupBooking = () => render(
    <BrowserRouter>
        <UserProvider>
            <SuccessfulBooking type={'booking-ok'} />
        </UserProvider>
    </BrowserRouter>
);

const setupCreate = () => render(
    <BrowserRouter>
        <UserProvider>
            <SuccessfulBooking type={'create-ok'} />
        </UserProvider>
    </BrowserRouter>
);

describe('Verificar renderizado de elementos en pantalla- Reserva exitosa', () => {
    test('Verificar renderizado de titulo',() => {
        setupBooking();
        const textoTitulo = screen.getByText(/¡Muchas gracias!/);
        expect(textoTitulo).toBeInTheDocument();
    });
    test('Verificar renderizado de mensaje',() => {
        setupBooking();
        expect(screen.getByText(/Su reserva se ha realizado con éxito/)).toBeInTheDocument();
    });
    test('Verificar renderizado de botón para volver al home',() => {
        setupBooking();
        expect(screen.getByRole('link', {name:'ok'})).toBeInTheDocument();
    });
});

describe('Verificar renderizado de elementos en pantalla- Creacion exitosa', () => {
   
    test('Verificar renderizado de mensaje',() => {
        setupCreate();
        expect(screen.getByText(/Tu propiedad se ha creado con con éxito/)).toBeInTheDocument();
    });
    test('Verificar renderizado de botón para volver al home',() => {
        setupCreate();
        expect(screen.getByRole('link', {name:'Volver'})).toBeInTheDocument();
    });
});