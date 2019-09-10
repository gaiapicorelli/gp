// ANIMAZIONE 1

// listen for scroll event and call animate function
document.addEventListener('scroll', function () {
    animate("point");
});
document.addEventListener('scroll', function () {
    animate("point2");
});

// check if element is in view
function inView(element) {

    const elementHeight = element.clientHeight;
    // get window height
    const windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    const scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    const scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    const elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    return scrollPosition > elementPosition;


}

// animate element when it is in view
function animate(elementId) {
    // get the element to animate
    const element = document.getElementById(elementId);
    // is element in view?
    if (inView(element)) {
        // element is in view, add class to element
        if (elementId === "point") {
            element.classList.add('animate');
        } else {
            element.classList.add('animate2');
        }
    }
}
