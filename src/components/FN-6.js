export default function Mover_Scrollbars(x,y) {
    try {

        window.scroll({
            top:y,
            left:x,
            behavior:"smooth"
        });

    } catch(err) {
    };
};