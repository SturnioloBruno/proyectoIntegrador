import React from "react";
import Details from "../components/Booking/Details.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";
import userEvent from "@testing-library/user-event";


const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <Details />
        </UserProvider>
    </BrowserRouter>
    );
 
describe('Verificar renderizado de elementos de la pantalla', () => {
    test('Verificar renderizado de texto',() => {
        setup();
        expect(screen.getByText('Detalle de la reserva')).toBeInTheDocument(); 
        expect(screen.getByText('Check in')).toBeInTheDocument();
        expect(screen.getByText('Check out')).toBeInTheDocument();
    
    });
    test('Verificar renderizado de botón Confirmar reserva',() => {
        setup();
        expect(screen.getByRole('button', { name: 'Confirmar reserva'})).toBeInTheDocument();
    });
   
});