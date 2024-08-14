import { Enunciado,Etiq_Span } from '../../assets/class/class-1.js';
import { Modulo_articulos,Modulo_seccion,Modulo_figure,Modulo_p,Modulo_img } from '../../assets/class/class-2.js';
import { Modulo_formulario } from '../../assets/class/class-4.js';
import { Titulo_Blq4,Texto_Blq4 } from '../../assets/js/FN-texto.js';   

export default function Bloque_4() {
    let
        doc = document,
        Fn1 = new Modulo_articulos(),
        Fn2 = new Modulo_seccion(),
        Fn3 = new Modulo_figure(),
        Fn4 = new Modulo_p({
            titulo_span: '04.',
            clase_span: 'numero',
            Texto: Titulo_Blq4
        }),
        Fn5 = new Modulo_p({
            titulo_span: '',
            clase_span: '',
            Texto: Texto_Blq4
        }),
        Fn_Img = new Modulo_img({
            alt:'idea'
        }),
        Enun = new Enunciado({
            clase2:  '',
            titulo2: Titulo_Blq4
        }),
        Fn6 = new Modulo_formulario()
    ;

    Fn1.Articulo('.menu','bloque-4');

    Fn2.Seccion('.bloque-4','descripcion');
    Fn4.P('.bloque-4 .descripcion','subtitulo');
    Fn5.P('.bloque-4 .descripcion','');

    Fn2.Seccion('.bloque-4','titulo');
    Enun.H2('.bloque-4 .titulo');

    Fn2.Seccion('.bloque-4','formulario');
    Fn6.formulario('.bloque-4 .formulario')
    Fn6.Input('.bloque-4 fieldset','','email','email','Detalla tu correo aqui');
    Fn6.Input('.bloque-4 div','btn','submit','seed me','Detalla tu correo aqui');

    doc = null ;
    Fn1 = null ;
    Fn2 = null ;
    Fn3 = null ;
    Fn4 = null ;
    Fn5 = null ;
    Fn_Img = null ;
    Enun = null ;
    Fn6 = null ;
};