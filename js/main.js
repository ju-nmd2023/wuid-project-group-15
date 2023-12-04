//-----------------Scroll change nav bg and border-----------------//
let nav = document.querySelector("header");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 1) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

//-----------------Mobile Menu-----------------//

let menu = document.querySelector("#mobile-nav");
let search = document.querySelector("#search");
let desktopSearch = document.querySelector("#desktop-search");

function toggleMenu() {
  menu.classList.toggle("active");
}

function toggleSearch() {
  search.classList.toggle("active");
  desktopSearch.classList.toggle("active");
}
