let image = document.getElementById('lamp');

function on() {
    image.src = "img/on.png";
    document.querySelector('.wall').style.background = 'yellow';
}

function off() {
    image.src = "img/off.png";
    document.querySelector('.wall').style.background = 'grey';
}

function blink() {
    var intervalo = 0;
    var contador = 0;
    while (contador < 10) {
        intervalo += 300;
        setTimeout("on()", intervalo);
        intervalo += 500;
        setTimeout("off()", intervalo);
        contador++;
    }
}

function changeImage() {
    if (image.src.match("on")) {
        off();
    } else {
        on();
    }
}
