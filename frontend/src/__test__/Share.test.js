import React, { Component } from "react";
import Share from "../components/Products/Share.js"; 
import { render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";

const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <Share />
        </UserProvider>
    </BrowserRouter>
    );

    describe('Verificar renderizado del titulo de la sección e iconos', () => {
        test('Verificar renderizado del titulo de la sección',() => {
            setup();
            expect(screen.getByText('Comparte en redes sociales')).toBeInTheDocument();
        });
        test('Verificar renderizado de icono Facebook',() => {
            setup();
            const iconoFb = screen.getByRole('button',{name:"facebook"});
            expect(iconoFb).toBeInTheDocument();
        });
        test('Verificar renderizado de icono LinkedIn',() => {
            setup();
            const iconoLn = screen.getByRole('button',{name:"linkedin"});
            expect(iconoLn).toBeInTheDocument();
        });
        test('Verificar renderizado de icono Twitter',() => {
            setup();
            const iconoTw = screen.getByRole('button',{name:"twitter"});
            expect(iconoTw).toBeInTheDocument();
        });
        test('Verificar renderizado de icono Whatsapp',() => {
            setup();
            const iconoWp = screen.getByRole('button',{name:"whatsapp"});
            expect(iconoWp).toBeInTheDocument();
        });
        test('Verificar renderizado del texto para cerrar bloque y evento onClick del boton',() => {
            setup();
            const btnCerrar = screen.getByRole('link',{name:"Cerrar"});
            expect(btnCerrar).toBeInTheDocument();
            fireEvent.click(btnCerrar)
            expect(btnCerrar).toHaveClass('a__close-modal');
        });
    });

  