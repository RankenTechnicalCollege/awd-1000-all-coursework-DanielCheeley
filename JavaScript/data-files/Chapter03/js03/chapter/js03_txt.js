/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Daniel Cheeley
     Date:   10/30/25

     Filename: js03.js
 */

     //days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

//add weekdays function
function addWeekDays() {
    let i = 0; // for loop counter

    //get the heading cells
    let headingCells = document.getElementsByTagName("th");

    //write the days in the cells
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        //increase counter by 1
        i++;
    }
};

window.addEventListener("load", showGames);

function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        //open the paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        if (gameLocations[i] === "h"){
            gameInfo += "Vs. ";
        }
        else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        //include the opponent
        gameInfo += gameOpponents[i] + "<br>";
        //include result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        //display innings played for susspened games
        if (gameInnings[i] <= 5) {
            gameInfo += " [" + gameInnings[i] + "]***";
        }
        else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i] + "]*";
        }
        else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        }

        //close the paragraph
        gameInfo += "</p>";

        //write info to a table cell
        let tabelCell = document.getElementById(gameDates[i]);
        tabelCell.insertAdjacentHTML("beforeend", gameInfo);
    }


}
