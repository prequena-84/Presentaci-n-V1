class Barra_Nav {
    constructor({clase}) {
        this.clase = clase;
    };

    Header() {

        let contentido_Header = document.createElement('header') ;

        if ( this.clase != '' && this.clase != undefined ) {
            contentido_Header.className = this.clase;
        };

        document.body.appendChild(contentido_Header)
    };
};

class Navegacion {
    constructor ({selector}) {
        this.selector = selector;
    };

    Nav(clase) {
        try {

            let contentido_nav = document.createElement('nav') ;

                if ( clase != undefined ) {
                    contentido_nav.className = clase;
                };
                
            document.querySelector(`${this.selector}`).appendChild(contentido_nav);

        } catch(err) {
        };
    };
};

class Contenido {
    constructor({object}) {
        this.object = object;
    };

    Link(selector) {
        let 
            content = '',
            obj = this.object
        ;

        content += obj.map(items => (items.url != '') ? `<a href="${items.url}">${items.titulo}</a>` : `<a>${items.titulo}</a>`);
        document.querySelector(`${selector}`).innerHTML = content.replaceAll(',','');
    };
};

class Enunciado {
    constructor({clase1,clase2,clase3,titulo1,titulo2,titulo3}) {
        this.clase1 = clase1 ;
        this.clase2 = clase2 ;
        this.clase3 = clase3 ;
        this.titulo1 = titulo1 ;
        this.titulo2 = titulo2 ;
        this.titulo3 = titulo3 ;
    };

    H1(selector) {
        document.querySelector(`${selector}`).innerHTML += `<h1 class="${this.clase1}">${this.titulo1}</h1>`;
    };

    H2(selector) {
        let contentido_h2 = document.createElement('h2') ;

        if (this.clase2 !== '' ) {
            contentido_h2.className = this.clase2;
        };

        contentido_h2.innerHTML = ( this.titulo2 !== '' ) ? this.titulo2 : '';
        document.querySelector(`${selector}`).innerHTML += `<h2 class="${this.clase2}">${this.titulo2}</h2>`;
    };

    H3(selector) {
        document.querySelector(`${selector}`).innerHTML += `<h3 class="${this.clase3}">${this.titulo3}</h3>`;
    };
};

class Etiq_Span{
    constructor({titulo}) {
        this.titulo = titulo ;
    };

    Span(selector) {
        let contentido_span = document.createElement('span') ;
        contentido_span.innerHTML = this.titulo;
        document.querySelector(`${selector}`).appendChild(contentido_span);
    };
};

export {
    Barra_Nav,
    Navegacion,
    Contenido,
    Enunciado,
    Etiq_Span,
}