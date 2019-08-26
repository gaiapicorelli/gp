// Prende l'elemento e lo anima
var element = document.getElementById('slider-point');
var elementHeight = element.clientHeight;

// Ascolta l'evento scroll e chiama la funzione
document.addEventListener('scroll', animate);

// Guarda se l'elemento è visto
function inView() {
  // prende la finestra altezza
  var windowHeight = window.innerHeight;
  // Prende il numero di pixel del documento scrollato
  var scrollY = window.scrollY || window.pageYOffset;
  
  // Prende la posizione corrente dello scroll (la distanza dal top della pagina  al bottom del viwport corrente)
  var scrollPosition = scrollY + windowHeight;
  //Prende la posizione dell'elemento (distanza dal top della pagina al bottom dell'elemento)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      element.classList.add('animate');
  }
}
