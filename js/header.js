// Add sticky class when the page is scrolled
window.onscroll = function () {
  addStickyClass();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function addStickyClass() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Toggle the mobile menu
function toggleMenu() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
