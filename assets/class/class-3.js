export class Modulo_ul {
    constructor({object}) {
        this.object = object ;
    };

    Ul(selector) {
        let ul = document.createElement('ul') ;
        document.querySelector(`${selector}`).appendChild(ul);
    };

    Li(selector) {
        let 
            content = '',
            obj = this.object
        ;
        
        content += obj.map(items => `<li><p>${items.titulo1}</p><a target="_blank" href="${items.url}">${items.titulo2}</a></li>`);
        document.querySelector(`${selector}`).innerHTML = content.replaceAll(',','');
    };
};