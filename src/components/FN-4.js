import { Enunciado,Etiq_Span } from '../../assets/class/class-1.js';
import { Modulo_Menu,Modulo_articulos,Modulo_seccion,Modulo_figure,Modulo_p,Modulo_img } from '../../assets/class/class-2.js';
import { Modulo_ul } from '../../assets/class/class-3.js';
import { Texto_li1,Url_a1,Texto_a1,Texto_li2,Url_a2,Texto_a2,Texto_li3,Url_a3,Texto_a3, Titulo_Blq3  } from '../../assets/js/FN-texto.js';   

export default function Bloque_3() {
    let
        doc = document,
        Fn1 = new Modulo_articulos(),
        Fn2 = new Modulo_seccion(),
        Fn3 = new Modulo_figure(),
        Fn4 = new Modulo_p({
            titulo_span: '03.',
            clase_span: 'numero',
            Texto:Titulo_Blq3
        }),
        Fn5 = new Modulo_p({
            titulo_span: '',
            clase_span: '',
            Texto:Titulo_Blq3
        }),
        Fn_Img = new Modulo_img({
            alt:'idea'
        }),
        Enun = new Enunciado({
            clase2:  '',
            titulo2: Titulo_Blq3
        }),
        contenido_li = [
            {titulo1: Texto_li1,url: Url_a1,titulo2: Texto_a1},
            {titulo1: Texto_li2,url: Url_a2,titulo2: Texto_a2},
            {titulo1: Texto_li3,url: Url_a3,titulo2: Texto_a3}
        ],
        Fn6 = new Modulo_ul({
            object: contenido_li
        })
    ;

    Fn1.Articulo('.menu','bloque-3');

    Fn2.Seccion('.bloque-3','descripcion');
    Fn4.P('.bloque-3 .descripcion','subtitulo');
    Fn6.Ul('.bloque-3 .descripcion');
    Fn6.Li('.bloque-3 .descripcion > ul')

    Fn2.Seccion('.bloque-3','titulo');
    Enun.H2('.bloque-3 .titulo');

    doc = null ;
    Fn1 = null ;
    Fn2 = null ;
    Fn4 = null ;
    Fn5 = null ;
    Fn_Img = null ;
    Enun = null ;
    contenido_li = null ;
    Fn6 = null ;
};