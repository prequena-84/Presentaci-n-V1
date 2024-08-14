import { Enunciado,Etiq_Span } from '../../assets/class/class-1.js';
import { Modulo_Menu,Modulo_articulos,Modulo_seccion,Modulo_figure,Modulo_p,Modulo_img } from '../../assets/class/class-2.js';
import { Titulo_Blq1,Texto_Blq1,Clase1 } from '../../assets/js/FN-texto.js';

export default function Bloque_1() {
    let 
        doc = document,
        Fn1 = new Modulo_Menu({
            clase:'menu'
        }),
        Fn2 = new Modulo_articulos(),
        Fn3 = new Modulo_seccion(),
        Fn4 = new Modulo_figure(),
        Fn5 = new Modulo_p({
            titulo_span: '01.',
            clase_span: 'numero',
            Texto:Titulo_Blq1
        }),
        Fn6 = new Modulo_p({
            titulo_span: '',
            clase_span: '',
            Texto:Texto_Blq1
        }),
        Fn_Img = new Modulo_img({
            alt:'photo-cv'
        }),
        Enun = new Enunciado({
            clase2:'',
            titulo2: Titulo_Blq1
        })
    ;

    Fn1.Menu();

    Fn2.Articulo('.menu','bloque-1');

    Fn3.Seccion('.bloque-1','imagen order-1');+
    Fn4.Figure('.bloque-1 .imagen');
    Fn_Img.Img('.bloque-1 .imagen > figure');
    doc.querySelector('.bloque-1 .imagen > figure > img').src = "../../../assets/images/foto_cv.jpg";

    Fn3.Seccion('.bloque-1','descripcion order-2');
    Fn5.P('.bloque-1 .descripcion','subtitulo');
    Fn6.P('.bloque-1 .descripcion','');

    Fn3.Seccion('.bloque-1','titulo order-3');
    Enun.H2('.bloque-1 .titulo');

    doc = null ;
    Fn1 = null ;
    Fn2 = null ;
    Fn3 = null ;
    Fn4 = null ;
    Fn5 = null ;
    Fn_Img = null ;
    Enun = null ;
};