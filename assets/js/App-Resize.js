import { App_Module,App_Module_240px } from './App.js';
import { About_Hover,Diseño_Hover,Portafolio_Hover,Contacto_Hover } from './Modulos.js';
import  Mover_Scrollbars  from '../../src/components/FN-6.js';
import Header_2 from '../../assets/class/class-5.js';

let 
    Fn1 = new Header_2(),
    isCheked = false 
;

(function() {
    window.addEventListener('resize', function() {
        
        if ( (window.innerWidth >= 240) && (window.innerWidth <= 768) ) {
            this.document.body.innerHTML = '';
            App_Module();
            Fondo_Nav();
            ordenBloque_1();
            ordenBloque_2();
            ordenBloque_3();
            ordenBloque_4();
        } 
        else if( window.innerWidth < 240 ) {
            this.document.body.innerHTML = '';
            Fn1.Encabezado() ;
            App_Module_240px() ;
            ordenBloque_1() ;
            ordenBloque_2() ;
            ordenBloque_3() ;
            ordenBloque_4() ;
            Click_Menu() ;
        }
        else {
            this.document.body.innerHTML = '' ;
            App_Module() ;
        };
    });
})();

function Fondo_Nav() {
    document.querySelectorAll('header > nav a')[0].addEventListener("mouseover", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Bloque-1-Letra )"
    },false);

    document.querySelectorAll('header > nav a')[0].addEventListener("mouseout", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Fondo-Contenido )"
    },false);

    document.querySelectorAll('header > nav a')[1].addEventListener("mouseover", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Bloque-2-Fondo-Img )"
    },false);

    document.querySelectorAll('header > nav a')[1].addEventListener("mouseout", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Fondo-Contenido )"
    },false);

    document.querySelectorAll('header > nav a')[2].addEventListener("mouseover", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Bloque-3-Descripcion )"
    },false);

    document.querySelectorAll('header > nav a')[2].addEventListener("mouseout", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Fondo-Contenido )"
    },false);

    document.querySelectorAll('header > nav a')[3].addEventListener("mouseover", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Bloque-4-Descripcion )"
    },false);

    document.querySelectorAll('header > nav a')[3].addEventListener("mouseout", e =>{
        e.preventDefault()
        document.querySelector('nav').style.backgroundColor = "var( --Color-Fondo-Contenido )"
    },false)
}

export function ordenBloque_1() {
    try {
        if ( window.innerWidth <= 768 ) {
            let 
                orden_1 = ' order-1',
                orden_2 = ' order-2',
                orden_3 = ' order-3',
                clase_1 = document.querySelectorAll('.bloque-1 section')[0].className.replace(orden_1,''), //IMAGEN
                clase_2 = document.querySelectorAll('.bloque-1 section')[1].className.replace(orden_2,''), //DESCRIPCION
                clase_3 = document.querySelectorAll('.bloque-1 section')[2].className.replace(orden_3,''), //TITULO
                query = document.querySelectorAll('.bloque-1 section')
            ;

            query[2].className = clase_3 + orden_1;
            query[0].className = clase_1 + orden_2;
            query[1].className = clase_2 + orden_3;

            document.querySelectorAll('header nav a')[0].addEventListener("click",() => {
                Mover_Scrollbars(0,0);
            });
        };

        if ( window.innerWidth <= 414 ) { 

            document.querySelectorAll('header nav ul li')[0].addEventListener("click",() => {
                Mover_Scrollbars(0,0) ;
            });

        };

    } catch(err) {
    };
};

export function ordenBloque_2() {
    try {

        let 
            pos_inicial = document.querySelector('.bloque-1').getBoundingClientRect().top,
            pos_Bloque1 = document.querySelector('.bloque-1').getBoundingClientRect().bottom
        ;

        if (window.innerWidth <= 768) {
            let 
                orden_1 = ' order-1',
                orden_2 = ' order-2',
                orden_3 = ' order-3',
                clase_1 = document.querySelectorAll('.bloque-2 section')[0].className.replace(orden_1,''), //TITULO
                clase_2 = document.querySelectorAll('.bloque-2 section')[1].className.replace(orden_2,''), //IMAGNE
                clase_3 = document.querySelectorAll('.bloque-2 section')[2].className.replace(orden_3,''), //DESCRIPCION
                query = document.querySelectorAll('.bloque-2 section')
            ;

            query[0].className = clase_1 + orden_1; //TITULO
            query[1].className = clase_2 + orden_2; //IMGANE
            query[2].className = clase_3 + orden_3; //DESCRIPCION

            document.querySelectorAll('header nav a')[1].addEventListener("click",() => {
                Mover_Scrollbars(0,pos_Bloque1 - pos_inicial ) ;
            });
            
        };

        if ( window.innerWidth <= 414 ) {

            document.querySelectorAll('header nav ul li')[1].addEventListener("click",() => {
                Mover_Scrollbars(0,pos_Bloque1 - pos_inicial);
            });

        };
    } catch(err) {
    };
};

export function ordenBloque_3() {
    try {
        let 
            pos_inicial = document.querySelector('.bloque-1').getBoundingClientRect().top,
            pos_Bloque2 = document.querySelector('.bloque-2').getBoundingClientRect().bottom
        ;

        if (window.innerWidth <= 768) {
            let 
                orden_1 = ' order-1',
                orden_2 = ' order-2',
                clase_1 = document.querySelectorAll('.bloque-3 section')[0].className.replace(orden_1,''), //DESCRIPCION
                clase_2 = document.querySelectorAll('.bloque-3 section')[1].className.replace(orden_2,''), //TITULO
                query = document.querySelectorAll('.bloque-3 section')
            ;

            query[0].className = clase_1 + orden_2; //DESCRIPCION
            query[1].className = clase_2 + orden_1; //TITULO

            document.querySelectorAll('header nav a')[2].addEventListener("click",() => {
                Mover_Scrollbars(0,pos_Bloque2 - pos_inicial);
            });
        };

        if ( window.innerWidth <= 414 ) {

            document.querySelectorAll('header nav ul li')[2].addEventListener("click",() => {
                Mover_Scrollbars(0,pos_Bloque2 - pos_inicial);
            });
        };

    } catch(err) {    
    };
};

export function ordenBloque_4() {
    try {

        let 
            pos_inicial = document.querySelector('.bloque-1').getBoundingClientRect().top,
            pos_Bloque3 = document.querySelector('.bloque-3').getBoundingClientRect().bottom
        ;

        if ( window.innerWidth <= 768 ) {
            let 
                orden_1 = ' order-1',
                orden_2 = ' order-2',
                orden_3 = ' order-3',
                clase_1 = document.querySelectorAll('.bloque-4 section')[0].className.replace(orden_1,''), //DESCRIPCION
                clase_2 = document.querySelectorAll('.bloque-4 section')[1].className.replace(orden_2,''), //TITULO
                clase_3 = document.querySelectorAll('.bloque-4 section')[2].className.replace(orden_2,''), //FORM
                query = document.querySelectorAll('.bloque-4 section') ;
            ;

            query[1].className = clase_2 + orden_1; //TITULO
            query[0].className = clase_1 + orden_2; //DESCRIPCION
            query[2].className = clase_3 + orden_3; //FORM

            document.querySelectorAll('header nav a')[3].addEventListener("click",() => {
                Mover_Scrollbars( 0,pos_Bloque3 - pos_inicial);
            });


        };

        if ( window.innerWidth <= 414 ) {
            document.querySelectorAll('header nav ul li')[3].addEventListener("click",() => {
                Mover_Scrollbars(0,pos_Bloque3 - pos_inicial);
            });
           
        }; 

    } catch(err) {
    };
};

function Click_Menu() {
    document.querySelector('.barra-navegacion button#btn-1').addEventListener("click",() => {
        if ( isCheked === false ) {
            isCheked = true ;
            document.querySelector('ul').style.maxHeight = "100vh";
        }
        else {
            isCheked = false ; 
            document.querySelector('ul').style.maxHeight = "0";
        };
    });
};