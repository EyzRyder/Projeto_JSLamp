let image = document.getElementById('lamp');

function on() {
    image = document.getElementById("lamp").src = "on.png";
    document.querySelector('.wall').style.background = 'yellow';
}

function off() {
    image = document.getElementById("lamp").src = "off.png";
    document.querySelector('.wall').style.background = 'grey';
}

function blink() {
    var intervalo = 0;
    var contador = 0;
    while (contador < 10) {
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='on.png'; document.querySelector('.wall').style.background = 'yellow';", intervalo);
        intervalo += 500;
        setTimeout("document.getElementById('lamp').src='off.png'; document.querySelector('.wall').style.background = 'grey';", intervalo);
        contador++;
    }
}

function changeImage() {
    if (image.src.match("on")) {
        image.src = "off.png";
        document.querySelector('.wall').style.background = 'grey';
    } else {
        image.src = "on.png";
        document.querySelector('.wall').style.background = 'yellow';
    }
}
