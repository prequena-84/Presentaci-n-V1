class Modulo_Menu {
    constructor({clase}) {
        this.clase = clase;
    };

    Menu() {
        let menu = document.createElement('main') ;
        menu.className = this.clase;
        document.body.appendChild(menu);
    };
};

class Modulo_articulos {
    constructor() {
    };

    Articulo(selector,clase) {
        let article = document.createElement('article') ;
        article.className = clase ;
        document.querySelector(`${selector}`).appendChild(article);
    };
};

class Modulo_seccion{
    constructor() {
    };

    Seccion(selector,clase) {
        let section = document.createElement('section') ;
        
        if ( clase !== '' ) {
            section.className = clase;
        };

        document.querySelector(`${selector}`).appendChild(section);
    };
};

class Modulo_figure{
    constructor(){
    };

    Figure(selector){
        let figure = document.createElement('figure') ;
        document.querySelector(`${selector}`).appendChild(figure);
    };
};

class Modulo_p {
    constructor({titulo_span,clase_span,Texto}) {
        this.titulo_span = titulo_span;
        this.clase_span = clase_span;
        this.Texto = Texto;
    };

    P(selector,clase) {
        let 
            p = document.createElement('p') 
        ;

        if ( clase !== '' ) {
            p.className = clase ;
        }

        if ( this.titulo_span !== '') {
            p.innerHTML += ( this.clase_span !== '' ) ? `<span class="${this.clase_span}">${this.titulo_span}</span>` : `<span>${this.titulo_span}</span>`
        };

        p.innerHTML += this.Texto;

        document.querySelector(`${selector}`).appendChild(p);
    };
};

class Modulo_img{
    constructor({alt}) {
        this.alt = alt;
    };

    Img(selector) {
        document.querySelector(`${selector}`).innerHTML += `<img alt="${this.alt}">`
    };
};

export {
    Modulo_Menu,
    Modulo_articulos,
    Modulo_seccion,
    Modulo_figure,
    Modulo_p,
    Modulo_img,
}