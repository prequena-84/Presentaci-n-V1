import { Enunciado,Etiq_Span } from '../../assets/class/class-1.js';
import { Modulo_Menu,Modulo_articulos,Modulo_seccion,Modulo_figure,Modulo_p,Modulo_img } from '../../assets/class/class-2.js';
import { Titulo_Blq2,Texto_Blq3 } from '../../assets/js/FN-texto.js';      

export default function Bloque_2() {
    let
        doc = document,
        Fn1 = new Modulo_articulos(),
        Fn2 = new Modulo_seccion(),
        Fn3 = new Modulo_figure(),
        Fn4 = new Modulo_p({
            titulo_span: '02.',
            clase_span: 'numero',
            Texto:Titulo_Blq2
        }),
        Fn5 = new Modulo_p({
            titulo_span: '',
            clase_span: '',
            Texto:Texto_Blq3
        }),
        Fn_Img = new Modulo_img({
            alt:'idea'
        }),
        Enun = new Enunciado({
            clase2:'',
            titulo2: Titulo_Blq2
        })
    ;

    Fn1.Articulo('.menu','bloque-2');

    Fn2.Seccion('.bloque-2','titulo');
    Enun.H2('.bloque-2 .titulo');
    
    Fn2.Seccion('.bloque-2','imagen');
    Fn3.Figure('.bloque-2 .imagen');
    Fn_Img.Img('.bloque-2 .imagen > figure');
    doc.querySelector('.bloque-2 .imagen > figure > img').src = "../../../assets/icons/idea.svg";

    Fn2.Seccion('.bloque-2','descripcion');
    Fn4.P('.bloque-2 .descripcion','subtitulo');
    Fn5.P('.bloque-2 .descripcion','');

    doc = null ;
    Fn1 = null ;
    Fn2 = null ;
    Fn3 = null ;
    Fn5 = null ;
    Fn_Img = null ;
    Enun = null ;
};