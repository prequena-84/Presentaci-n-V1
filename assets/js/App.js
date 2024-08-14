import Carga_Headers from '../../src/components/FN-1.js';
import Bloque_1 from '../../src/components/FN-2.js';
import Bloque_2 from '../../src/components/FN-3.js';
import Bloque_3 from '../../src/components/FN-4.js';
import Bloque_4 from '../../src/components/FN-5.js';

function App_Module() {
    Carga_Headers();
    Bloque_1();
    Bloque_2();
    Bloque_3();
    Bloque_4();
};

function App_Module_240px() {
    Bloque_1();
    Bloque_2();
    Bloque_3();
    Bloque_4();
};

function App_Bloque_1() {
    Carga_Headers();
    Bloque_1();
};

function App_Bloque_2() {
    Carga_Headers();
    Create_menu();
    Bloque_2();
};

function App_Bloque_3() {
    Carga_Headers();
    Create_menu();
    Bloque_3();
};

 function App_Bloque_4() {
    Carga_Headers();
    Create_menu()
    Bloque_4();
};

function Create_menu() {
    let menu = document.createElement('main');
    menu.className = 'menu';
    document.body.appendChild(menu);
};

export {
    App_Module,
    App_Module_240px,
    App_Bloque_1,
    App_Bloque_2,
    App_Bloque_3,
    App_Bloque_4,
    Create_menu,
};