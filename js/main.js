let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (nav) {
    if (y > 1) {
      nav.style.background = "#f3decc";
      nav.style.borderBottom = "1px solid #259d9466";
    } else {
      nav.style.background = "#f3decc00";
      nav.style.borderBottom = "1px solid #259d9400";
    }
  }
});
