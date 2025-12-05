"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-05

      Chess Objects used for Chess Games
      Author: Daniel Cheeley
      Date:   12/5/25

      Filename: project08-05.js
*/

// Constructor Function for Chess Piece
function piece(color, rank) {
   this.color = color;     // the color of the piece
   this.rank = rank;       // the rank (Pawn, Knight, etc.)
   this.square = null;     // the square it occupies
   this.image = null;      // HTML entity symbol
}

// Constructor Function for a Chess Set
function chessSet(game) {
   this.pieces = []; // empty array of chess pieces used in the game 
   
   for (let i = 0; i < 8; i++) {        
    for (let j = 0; j < 8; j++) {     

        let cell = game.board[i][j];   // SAFER
        if (!cell) continue;           // skip undefined/null
        if (cell.length !== 2) continue; // skip empty squares

        let color = (cell.charAt(0) === "B") ? "Black" : "White";

        let rank = "";
        switch (cell.charAt(1)) {
            case "P": rank = "Pawn"; break;
            case "N": rank = "Knight"; break;
            case "B": rank = "Bishop"; break;
            case "R": rank = "Rook"; break;
            case "Q": rank = "Queen"; break;
            case "K": rank = "King"; break;
        }

        let chessPiece = new piece(color, rank);
        chessPiece.square = String.fromCharCode(j + 97) + (8 - i);

        let image = "";
        switch (cell) {
            case "BP": image = "&#9823;"; break;
            case "BN": image = "&#9822;"; break;
            case "BB": image = "&#9821;"; break;
            case "BR": image = "&#9820;"; break;
            case "BQ": image = "&#9819;"; break;
            case "BK": image = "&#9818;"; break;
            case "WP": image = "&#9817;"; break;
            case "WN": image = "&#9816;"; break;
            case "WB": image = "&#9815;"; break;
            case "WR": image = "&#9814;"; break;
            case "WQ": image = "&#9813;"; break;
            case "WK": image = "&#9812;"; break;
        }

        chessPiece.image = image;
        this.pieces.push(chessPiece);
    }
}
}
