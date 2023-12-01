
let loader = document.getElementById("loading");
let messagecontainer = document.getElementById("container");

window.onload = function() {       
    setTimeout(function(){
        loader.style.opacity = 0;
        messagecontainer.style.opacity = 100;
    },3000);

    setTimeout(function(){
        
        messagecontainer.style.transform = "translateY(0%)";
    },3200);
    
    
}
  