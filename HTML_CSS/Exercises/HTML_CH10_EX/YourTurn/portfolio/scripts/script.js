function hamburger() {
  var menu = document.querySelector("#menu-links");
  var menuicon = document.querySelector("#menu-icon");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}