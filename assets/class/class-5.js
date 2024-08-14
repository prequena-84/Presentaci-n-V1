import { Barra_Nav,Navegacion,Enunciado,Etiq_Span } from './class-1.js';

let 
    barraNavegacion = new Barra_Nav({
        clase:'barra-navegacion'
    }),Nav = new Navegacion({
        selector: 'header.barra-navegacion'
    }),Content_Link = [
        {url:'#',titulo:'acera de'},
        {url:'#',titulo:'diseño'},
        {url:'#',titulo:'portafolio'},
        {url:'#',titulo:'contacto'}
    ],
    etiqueta1 = new Enunciado({
        clase1: 'titulo order-1',
        titulo1: 'P. Requena'
    }),
    etiqueta2 = new Etiq_Span({
        titulo: 'Portafolio'
    }),
    etiqueta3 = new Etiq_Span({
        titulo: 'Menu'
    })
;    

export default class Header_2 {
    constructor() {
    };

    I(selector,clase) {
        let contenido_I = document.createElement('i');
        contenido_I.className = clase;
        document.querySelector(`${selector}`).appendChild(contenido_I);
    };

    Ul(selector) {
        let contenido_Ul = document.createElement('ul');
        document.querySelector(`${selector}`).appendChild(contenido_Ul);
    };

    Input(selector,tipo) {
        let contenido_In = document.createElement('input') ;
        contenido_In.type = tipo ;
        contenido_In.className = 'order-2';
        document.querySelector(`${selector}`).appendChild(contenido_In) ;
    };
 
    Div(selector,clase) {
        let contenido_Div = document.createElement('div') ;

        if ( clase !== '' ) {
            contenido_Div.className = clase ;
        };


        document.querySelector(`${selector}`).appendChild(contenido_Div) ;
    }

    Boton(selector,clase,id,texto) {
        let cotenido_Boton = document.createElement('button');

        if ( clase !== '' ) {
            cotenido_Boton.className = clase;
        };

        if ( id !== '') {
            cotenido_Boton.id = id;
        };

        if ( texto !== '' ) {
            cotenido_Boton.innerHTML = texto
        };

        document.querySelector(`${selector}`).appendChild(cotenido_Boton);
    }

    Li(selector) {
        let 
            content = ''
        ;

        content += Content_Link.map(items => (items.url != '') ? `<li><a href="${items.url}">${items.titulo}</a>` : `<a>${items.titulo}</a></li>`);
        document.querySelector(`${selector}`).innerHTML = content.replaceAll(',','');
    };

    Encabezado() {
        barraNavegacion.Header();
        this.Div('.barra-navegacion','');
        etiqueta3.Span('.barra-navegacion > div') ;
        this.Boton('.barra-navegacion > div','order-2','btn-1','&equiv;') ;
        Nav.Nav('order-3') ;
        this.Ul('.barra-navegacion > nav') ;
        this.Li('.barra-navegacion > nav > ul');
        etiqueta1.H1('header.barra-navegacion') ;
        etiqueta2.Span('header.barra-navegacion > h1') ;
    };

};