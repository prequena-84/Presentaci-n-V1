import { App_Module } from './App.js';
import { About_Hover,Diseño_Hover,Portafolio_Hover,Contacto_Hover } from './Modulos.js';
import { ordenBloque_1,ordenBloque_3,ordenBloque_4 } from './App-Resize.js';

// Emulate a mini template engine:
window.onload = function() {
    App_Module();
    ordenBloque_1();
    ordenBloque_3();
    ordenBloque_4();
    About_Hover();
    Diseño_Hover();
    Portafolio_Hover();
    Contacto_Hover();
};