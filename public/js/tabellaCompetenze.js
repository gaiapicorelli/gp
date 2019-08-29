document.getElementById("competenze-professionali").classList.add("inactive");
document.getElementById("competenze-personali").classList.add("inactive");

function toggleBody(element) {
    if (document.getElementById(element).classList.contains("inactive")) {
        document.getElementById(element).classList.remove("inactive");
    } else {
        document.getElementById(element).classList.add("inactive");
    }
}