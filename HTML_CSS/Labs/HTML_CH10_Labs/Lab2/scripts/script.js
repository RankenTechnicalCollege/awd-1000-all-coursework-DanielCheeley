function hamburger() {
  var menu = document.querySelector("#menu-links");
  var menuicon = document.querySelector("#menu-icon");
  var hamburger = document.querySelector("#hamburger")
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menuicon.style.color = "#2a1f14";
  }
  else {
    menu.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}