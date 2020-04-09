function filter(className) {
  // Nascondo tutto
  Array.from(document.getElementsByClassName("card")).forEach(
    element => (element.style.display = "none")
  );
  // Recupero gli elementi da mostrare
  const toShow = document.querySelectorAll(`.card.${className}`);
  // Se ce ne sono
  if (toShow) {
    Array.from(toShow).forEach(element => (element.style.display = "block"));
  }
  // Recupero i selectors
  Array.from(document.querySelectorAll(".filter-selector>*")).forEach(
    element => {
      // Se è attivo lo attivo
      if (element.classList.contains(className)) {
        element.classList.add("current");
      } else {
        // Altrimenti lo spengo
        element.classList.toggle("current", false);
      }
    }
  );
}

function showAll() {
  Array.from(document.getElementsByClassName("card")).forEach(
    element => (element.style.display = "block")
  );
  // recupero i selettori
  const selectors = document.querySelectorAll(".filter-selector>*");
  Array.from(selectors).forEach(element =>
    element.classList.toggle("current", false)
  );
  selectors[0].classList.add("current");
}
