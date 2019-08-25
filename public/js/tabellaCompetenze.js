document.getElementById("CompetenzeProfessionali").classList.add("inactive");
document.getElementById("CompetenzePersonali").classList.add("inactive");

function toggleBody(element) {
    if (document.getElementById(element).classList.contains("inactive")) {
        document.getElementById(element).classList.remove("inactive");
    } else {
        document.getElementById(element).classList.add("inactive");
    }
}