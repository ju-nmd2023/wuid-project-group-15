//Inspired by Github copilot: chat
document.addEventListener("mousemove", function (e) {
  var x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
  var y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
  document.getElementById("surferImage").style.transform = "translate(" + (-50 + x * 5) + "%, " + (-50 + y * 5) + "%)";
});
