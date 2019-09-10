// ANIMAZIONE 1

// listen for scroll event and call animate function
document.addEventListener('scroll', function () { animate("point"); });
document.addEventListener('scroll', function () { animate("point2"); });

// check if element is in view
function inView(element) {

  var elementHeight = element.clientHeight;
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate(elementId) {
  // get the element to animate
  var element = document.getElementById(elementId);
  // is element in view?
  if (inView(element)) {
    // element is in view, add class to element
    element.classList.add('animate');
  }
}
