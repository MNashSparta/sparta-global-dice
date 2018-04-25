// Variables
var dice = 1;
var displaySquares = document.getElementsByClassName('square');
var display5 = document.getElementsByClassName('five');

// Functions

// Run before every roll to reset the display
function clearDisplay() {
  for(var i = 0; i < displaySquares.length; i++) {
   displaySquares[i].style.backgroundColor="white";
  }
  rollDice();
}

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice); // For verification
  displayResult();
}

function displayResult() {
  switch(dice) {
    case 1:
      displaySquares[4].style.backgroundColor="black";
      break;
    case 2:
      displaySquares[0].style.backgroundColor="black";
      displaySquares[8].style.backgroundColor="black";
      break;
    case 3:
      displaySquares[0].style.backgroundColor="black";
      displaySquares[4].style.backgroundColor="black";
      displaySquares[8].style.backgroundColor="black";
      break;
    case 4:
      displaySquares[0].style.backgroundColor="black";
      displaySquares[2].style.backgroundColor="black";
      displaySquares[6].style.backgroundColor="black";
      displaySquares[8].style.backgroundColor="black";
      break;
    case 5:
      for(var i = 0; i < display5.length; i++) {
       display5[i].style.backgroundColor="black";
      }
      break;
    case 6:
      for(var i = 0; i < document.getElementsByClassName('six').length; i++) {
       document.getElementsByClassName('six')[i].style.backgroundColor="black";
      }
      break;
  }
}
