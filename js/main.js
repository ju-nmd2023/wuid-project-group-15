let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (nav) {
    if (y > 1) {
      nav.style.backdropFilter = "blur(16px)";
    } else {
      nav.style.backdropFilter = "blur(0px)";
    }
  }
});
