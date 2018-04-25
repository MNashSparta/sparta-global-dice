var dice = 1;

var displaySquares = document.getElementsByClassName('square')

function clearDisplay() {
  for(var i = 0; i < displaySquares.length; i++) {
   displaySquares[i].style.backgroundColor="white";
  }
  rollDice();
}

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  displayResult();
}

function displayResult() {
  switch(dice) {
    case 1:
    console.log(displaySquares[5])
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
      displaySquares[0].style.backgroundColor="black";
      displaySquares[2].style.backgroundColor="black";
      displaySquares[4].style.backgroundColor="black";
      displaySquares[6].style.backgroundColor="black";
      displaySquares[8].style.backgroundColor="black";
      break;
    case 6:
      displaySquares[0].style.backgroundColor="black";
      displaySquares[2].style.backgroundColor="black";
      displaySquares[3].style.backgroundColor="black";
      displaySquares[5].style.backgroundColor="black";
      displaySquares[6].style.backgroundColor="black";
      displaySquares[8].style.backgroundColor="black";
      break;
  }

}
