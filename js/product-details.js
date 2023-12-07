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

  


let arrow = document.getElementById("arrow");

cartButton = document.getElementById("add-to-cart");
//-play arrow animation on the add to cart click-//
cartButton.addEventListener("click", function () {
  if(!arrow.classList.contains('arrow_animation')){
    arrow.classList.add('arrow_animation');
  }else{
    arrow.classList.remove('arrow_animation')
    setTimeout(function(){
      arrow.classList.add('arrow_animation');
  }, 500);
  }


})



