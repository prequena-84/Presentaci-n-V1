export class Modulo_formulario {
    constructor() {
    };

    formulario(selector) {
        let 
            form = document.createElement('form'),
            div = document.createElement('div'),
            fieldset = document.createElement('fieldset');
        ;

        document.querySelector(`${selector}`).appendChild(form);
        document.querySelector(`${selector} > form`).appendChild(div);
        document.querySelector(`${selector} > form > div`).appendChild(fieldset);
    };

    Input(selector,clase,type,name,placeholder) {
        let input = document.createElement('input') ;

        if ( clase !== '' ) {
            input.className = clase;
        };

        if ( type !== '' ) {
            input.type = type;
        };

        if ( name !== '' ) {
            input.name = name;
        };

        if ( placeholder !== '' ) {
            input.placeholder = placeholder;
        };

        document.querySelector(`${selector}`).appendChild(input);
    };
};