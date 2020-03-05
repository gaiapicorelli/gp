function filter(className) {
  Array.from(document.getElementsByClassName("card")).forEach(
    element => (element.style.display = "none")
  );
  const toShow = document.querySelectorAll(`.card.${className}`);
  if (toShow) {
    Array.from(toShow).forEach(element => (element.style.display = "block"));
  }
}

function showAll() {
  Array.from(document.getElementsByClassName("card")).forEach(
    element => (element.style.display = "block")
  );
}
