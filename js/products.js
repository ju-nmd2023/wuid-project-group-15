/* */
let currentpage = 0;

/*All pages for this product*/
let allpages = document.getElementsByClassName("products_grid");

/*changePage recieves the commands on what page to load
and sends it to the pageLoader function*/
function changePage(command) {
    
  let f = "forward";
  let b = "back";
  /*If forward arrow is pressed*/
  if (command === f) {
    /*Make sure user can't scroll beyond 
        the current amount of pages*/
    if (currentpage < allpages.length) {
      currentpage = currentpage + 1;
      pageLoader();
    } else {
      currentpage = currentpage;
    }
  } 
  else if (command === b) {

  /*If backwards arrow is pressed*/
    if (currentpage > 0) {
      currentpage = currentpage - 1;
      pageLoader();
    } else {
      currentpage = currentpage;
    }
  } 
  else {

    animation();
  /*If specific page is pressed the requested
    page number is sent to pageLoader*/
    currentpage = command - 1;
    pageLoader();
  }
}

function pageLoader() {
  /*Show the product page with the according number*/
  /*The currently active page is made visible*/
  /*c = the currently viewed page*/
  let c = allpages[currentpage];
  c.style.display = "grid";

  /*Change style of correct button*/
  let numberedbuttons = document.getElementsByClassName("pagebutton");
  numberedbuttons[currentpage].classList.add("button_select");

  /*Toggle pages*/

  /*All other pages are made invisible*/
  for (let i = 0; i < allpages.length; i++) {
    /*Every page and button who's number doesn't 
        match with the number of the current page is made invisible*/
    if (i != currentpage) {
      allpages[i].style.display = "none";
      numberedbuttons[i].classList.remove("button_select");
    }
  }
}

function animation(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    
}
