let button = document.getElementById("addBtn");

let favoriteMovies = ["Avatar", "Avatar 2", "Twilight"];

button.addEventListener("click", displayMovies);

function displayMovies() {
  let inputValue = document.getElementById("input").value;
  favoriteMovies.push(inputValue);

  for (i = 0; i < favoriteMovies.length; i++) {
    document.getElementById("movieDisplay").insertAdjacentHTML("beforeend", favoriteMovies[i] + "<br>");
  }

  document.getElementById("input").value = '';
}