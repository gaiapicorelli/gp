var mq = window.matchMedia("(max-width: 950px)");
if (mq.matches) {
    document.getElementById("nav").classList.add("closed-header");
}

function toggleHeader() {
    var nav = document.getElementById("nav");
    if (nav.classList.contains("closed-header")) {
        nav.classList.remove("closed-header");
        nav.classList.add("open-header");
    }
    else if (nav.classList.contains("open-header")) {
        nav.classList.remove("open-header");
        nav.classList.add("closed-header");
    }
}