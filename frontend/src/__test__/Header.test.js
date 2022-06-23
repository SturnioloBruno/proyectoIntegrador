import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header.js";
import { render, screen, act, fireEvent, cleanUp} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import { UserProvider } from "../components/Context/UserContext.js";

const setup = () => render(
    <BrowserRouter>
        <UserProvider>
            <Header />
        </UserProvider>
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

describe ('Evento onClick', () => {
    test('Verificar evento onclick iniciar sesion', async () => {
        setup();
        const boton_iniciar_sesion = screen.getByTestId("on-click-login");
        
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.click(boton_iniciar_sesion);
        });
        
        expect(screen.getByText(/Crear cuenta/, { hidden: false })).toBeTruthy();
        expect(screen.getByText(/Iniciar sesión/, { hidden: true })).toBeTruthy();

    });

    test('Verificar evento onclick Crear cuenta', async () => {
        setup();
        const boton_crear_cuenta = screen.getByTestId("on-click-register");
        
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.click(boton_crear_cuenta);
        });
        
        expect(screen.getByText(/Crear cuenta/, { hidden: true })).toBeTruthy();
        expect(screen.getByText(/Iniciar sesión/, { hidden: false })).toBeTruthy();
    });

    test('Verificar evento onclick en logotipo', async () => {
        setup();
        const logotipo = screen.getByText('Digital Booking');
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.click(logotipo);
        });
        expect(screen.getByText(/Crear cuenta/, { hidden: true })).toBeTruthy();
        expect(screen.getByText(/Iniciar sesión/, { hidden: true })).toBeTruthy();
    });

    test('Verificar evento onclick en botón Cerrar sesión', async () => {
        setup();
        const boton_cerrar_sesion = screen.getByTestId("on-click-logout");
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.click(boton_cerrar_sesion);
        });
        expect(screen.getByText(/Crear cuenta/, { hidden: false })).toBeTruthy();
        expect(screen.getByText(/Iniciar sesión/, { hidden: false })).toBeTruthy();
    });

    test('Verificar evento onclick icono para salir- mobile', async () => {
        setup();
        const boton_salir = screen.getByRole('link',{name:"Abrir/Cerrar"});
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.click(boton_salir);
        });
        expect(screen.getByText(/Crear cuenta/, { hidden: false })).toBeTruthy();
        expect(screen.getByText(/Iniciar sesión/, { hidden: false })).toBeTruthy();
    });
    
})
