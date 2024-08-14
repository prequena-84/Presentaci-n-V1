import { Barra_Nav,Navegacion,Contenido,Enunciado,Etiq_Span } from '../../assets/class/class-1.js';

export default function Carga_Headers() {
    let 
        Header = new Barra_Nav({
            clase:'barra-navegacion'
        }),
        Nav = new Navegacion({
            selector: 'header.barra-navegacion'
        }),
        Content_Link = [
            {url:'',titulo:'acerca de'},
            {url:'',titulo:'diseño'},
            {url:'',titulo:'portafolio'},
            {url:'',titulo:'contacto'}
        ],
        Html_A = new Contenido({
            object: Content_Link
        }),
        Enun = new Enunciado({
            clase1: 'titulo',
            titulo1: 'P. Requena'
        }),
        Etiqueta_Span = new Etiq_Span({
            titulo: 'Portafolio'
        })
    ;

    Header.Header() ;
    Nav.Nav() ;
    Html_A.Link('header.barra-navegacion > nav') ;
    Enun.H1('header.barra-navegacion') ;
    Etiqueta_Span.Span('header.barra-navegacion > h1') ;

    Header = null ;
    Nav = null ;
    Content_Link = null ;
    Html_A = null ;
    Enun = null ;
    Etiqueta_Span = null ;
};