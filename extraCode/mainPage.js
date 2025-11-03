let drinkMenu = ["Ski", "Apple Juice", "Pepsi", "Cola", "Miller Lite"];

window.addEventListener('load', displayMenu);

function displayMenu() {
    const list = document.getElementById("drinkList");
    list.innerHTML = "";
    if(drinkMenu.length === 0) {
      list.innerHTML = "<li>No drinks avalible</li>";
      return;
    }
    for (let drink of drinkMenu) { //same as i = 0; i < drinkMenu.length; i++
      const li = document.createElement("li");
      li.textContent = drink;
      list.appendChild(li);
    }
}

function addDrink() {
  const newDrink = document.getElementById("newDrink");
  const drinkName = newDrink.value.trim();
  if (drinkName === "") {
    alert("Please enter a drink name first");
    return;
  }
  newDrink.value = "";
  drinkMenu.push(drinkName);
  displayMenu();
}

function removeDrink() {
  const removeDrink = document.getElementById("removeDrink");
  const drinkName = removeDrink.value.trim();
  if (drinkName === "") {
    alert("Please enter a drink to remove first");
    return;
  }
  const index = drinkMenu.indexOf(drinkName);
  if (index === -1) {
    alert("That drink isn't on the menu");
    return;
  }

  drinkMenu.splice(index, 1); // removes the matching drink
  removeDrink.value = "";
  displayMenu();
}

function editDrink() {
   const oldNameInput = document.getElementById("oldName");
  const newNameInput = document.getElementById("editedName");
  const oldName = oldNameInput.value.trim();
  const newName = newNameInput.value.trim();
  const index = drinkMenu.indexOf(oldName);

  if (oldName === "" || newName === "") {
    alert("Please enter both the current and new names");
    return;
  }
  else if (index === -1) {
    alert("That drink isn't on the menu");
    return;
  }

  drinkMenu[index] = newName;
  oldNameInput.value = "";
  newNameInput.value = "";
  displayMenu();
}