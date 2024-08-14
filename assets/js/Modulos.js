import { App_Module } from '../js/App.js';
import { App_Bloque_1,App_Bloque_2,App_Bloque_3,App_Bloque_4 } from '../js/App.js'
import { ordenBloque_1,ordenBloque_3,ordenBloque_4 } from './App-Resize.js';

function About_Hover() {
    document.querySelectorAll('header > nav a')[0].addEventListener("mouseover",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Bloque_1();
        ordenBloque_1();
        About_HoverOut();
    });
};

function About_HoverOut() {
    document.querySelectorAll('header > nav a')[0].addEventListener("mouseout",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Module()
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        About_Hover();
        Diseño_Hover();
        Portafolio_Hover();
        Contacto_Hover();
    });
};

function Diseño_Hover() {
    document.querySelectorAll('header > nav a')[1].addEventListener("mouseover",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Bloque_2();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        Diseño_HoverOut();
    });
};

function Diseño_HoverOut() {
    document.querySelectorAll('header > nav a')[1].addEventListener("mouseout",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Module();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        About_Hover();
        Diseño_Hover();
        Portafolio_Hover();
        Contacto_Hover();
    });
};

function Portafolio_Hover() {
    document.querySelectorAll('header > nav a')[2].addEventListener("mouseover",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Bloque_3();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        Portafolio_HoverOut();
    });
};

function Portafolio_HoverOut() {
    document.querySelectorAll('header > nav a')[2].addEventListener("mouseout",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Module();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        Portafolio_Hover();
        About_Hover();
        Diseño_Hover();
        Contacto_Hover();
    });
};

function Contacto_Hover() {
    document.querySelectorAll('header > nav a')[3].addEventListener("mouseover",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Bloque_4();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        Contacto_HoverOut();
    });
};

function Contacto_HoverOut() {
    document.querySelectorAll('header > nav a')[3].addEventListener("mouseout",e => {
        e.preventDefault();
        document.body.innerHTML = '';
        App_Module();
        ordenBloque_1();
        ordenBloque_3();
        ordenBloque_4();
        Contacto_Hover();
        About_Hover();
        Diseño_Hover();
        Portafolio_Hover();
    });
};

export {
    About_Hover,  
    Diseño_Hover,
    Portafolio_Hover,
    Contacto_Hover,
};