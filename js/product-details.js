let buttons = document.querySelectorAll(".size-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

let dropdowns = document.querySelectorAll(".dropdownButton");
let dropdownActive = -1;

dropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("click", () => {
    toggleDropdown(index);
  });
});

function toggleDropdown(index) {
  if (dropdownActive == index) {
    dropdowns[index].classList.toggle("active");
    dropdownActive = -1;
  } else {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
    dropdowns[index].classList.toggle("active");
    dropdownActive = index;
  }
}
