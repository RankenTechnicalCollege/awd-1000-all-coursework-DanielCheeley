document.addEventListener("click", function (evt) {


  //checks if the arrow was clicked
  // UPVOTE CLICK
  if (evt.target.classList.contains("arrow")) {
    //sets the target to the closest figure to the arrow clicked
    let fig = evt.target.closest("figure");

    //sets the correct spans for that specific figure
    let up = fig.querySelector(".upvotes");
    let total = fig.querySelector(".total");

    //adds the number
    up.textContent = Number(up.textContent) + 1;
    total.textContent = Number(total.textContent) + 1;
  }


  //everything works the same just subtracks number for total
  // DOWNVOTE CLICK
  if (evt.target.classList.contains("downArrow")) {
    let fig = evt.target.closest("figure");

    let down = fig.querySelector(".downvotes");
    let total = fig.querySelector(".total");

    down.textContent = Number(down.textContent) + 1;
    total.textContent = Number(total.textContent) - 1;
  }
});
