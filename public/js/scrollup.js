// quando vai sotto di 20px torna ad inizio documento cliccando

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btornasu").style.display = "block";
  } else {
    document.getElementById("btornasu").style.display = "none";
  }
}

// quando clicchi va ad inizio documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}