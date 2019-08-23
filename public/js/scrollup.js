// Calcola "n" vh
function vh(n) {
    height = $(window).height();
    return height * n / 100
}

// Calcola "n" rem basandosi sulla dimensione del font di default
function rem(n) {
    return n * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// quando vai sotto a 7em (dimensione header) torna ad inizio documento cliccando
function scrollFunction() {
    if (document.body.scrollTop > rem(7) || document.documentElement.scrollTop > rem(7)) {
        document.getElementById("btornasu").style.display = "block";
        document.getElementById("sidebutton").style.position = "fixed";
        document.getElementById("sidebutton").style.top = 0;
    } else {
        document.getElementById("sidebutton").style.position = "absolute";
        document.getElementById("sidebutton").style.top = rem(7)+"px";
        document.getElementById("btornasu").style.display = "none";
    }
}

window.onscroll = scrollFunction;

// quando clicchi va ad inizio documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
