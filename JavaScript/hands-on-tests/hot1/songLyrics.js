let button = document.getElementById("lyricBtn");
let lyricResult = document.getElementById("lyricResult");

button.addEventListener("click", viewLyric);

function viewLyric() {
  let inputValue = Number(document.getElementById("input").value);

  if (isNaN(inputValue)) {
    lyricResult.textContent = "Please enter a number, not a word!";
  } 
  else if (inputValue === 1) {
    lyricResult.textContent = "'One is the loneliest number that you'll ever do.'";
  } 
  else if (inputValue === 2) {
    lyricResult.textContent = "'Two can be as bad as one. It's the loneliest number since the number one.'";
  } 
  else if (inputValue === 3) {
    lyricResult.textContent = "'There is no three'";
  }
  else {
    lyricResult.textContent = "You didnt enter a valid number";
  }

  document.getElementById("input").value = '';
}