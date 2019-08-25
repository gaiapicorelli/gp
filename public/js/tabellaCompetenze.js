function toggleBody(element) {
    if (document.getElementById(element).classList.contains("active")) {
        document.getElementById(element).classList.remove("active")
    } else {
        document.getElementById(element).classList.add("active")
    }
}