import React from "react";
import ReactDOM from "react-dom";
import Footer from "../components/Footer.js";
import { render, screen, act, fireEvent, cleanUp } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";

const setup = () => render(
        <BrowserRouter>
            <UserProvider>
                <Footer />
            </UserProvider>
        </BrowserRouter>
);

describe ('Renderizado de elementos',() =>{
    test('Verificar renderizado del logotipo, año y copyright',() => {
        setup();
        expect(screen.getByText('©2022 Digital Booking')).toBeTruthy();
    });
    test('Verificar renderizado de icono Facebook',() => {
        setup();
        expect(screen.getByText('Facebook')).toBeTruthy();
    });
    test('Verificar renderizado de icono LinkedIn',() => {
        setup();
        expect(screen.getByText('LinkedIn')).toBeTruthy();
    });
    test('Verificar renderizado de icono Twitter',() => {
        setup();
        expect(screen.getByText('Twitter')).toBeTruthy();
    });
    test('Verificar renderizado de icono Instagram',() => {
        setup();
        expect(screen.getByText('Instagram')).toBeTruthy();
    }); 

});