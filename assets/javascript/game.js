//alert("I'm loaded!");

var randomComputerNum = 0;
var randomCrystalNum1 = 0;
var randomCrystalNum2 = 0;
var randomCrystalNum3 = 0;
var randomCrystalNum4 = 0;
var userTotalScoreCount = 0;
var wins = 0;
var loses = 0; 
var arrayForCrystalNumTotal = [];

function computerRandomNum() {  
  return Math.floor( Math.random() * (120 - 19) + 19 );
}

function getCrystalNumber() {
  return Math.floor( Math.random() * (12 - 1) + 1 );
} 

function updateWins() {
  wins++;
  $('#wins').html(wins);
}

function updateLoses() {
  loses++;
  $('#loses').html(loses);
}

function updateScore() {
  $('#score').html(userTotalScoreCount);
}

function resetGame () {

  randomComputerNum = computerRandomNum();
  $('#computerscore').html(randomComputerNum);
  randomCrystalNum1 = getCrystalNumber();
  $('#crystal1').attr('data-value', randomCrystalNum1);
  randomCrystalNum2 = getCrystalNumber();
  $('#crystal2').attr('data-value', randomCrystalNum2);
  randomCrystalNum3 = getCrystalNumber();
  $('#crystal3').attr('data-value', randomCrystalNum3);
  randomCrystalNum4 = getCrystalNumber();
  $('#crystal4').attr('data-value', randomCrystalNum4);

  userTotalScoreCount = 0;
  updateScore();

}

function updateGameOver(text) {
    $('#gameover').html(text);
}

$(document).ready(function() {
 
  resetGame();

  
  $(".crystal").on('click', function(event) {
    // alert(event); 
    userTotalScoreCount += parseInt($(this).attr('data-value'));
    updateScore();

    if (randomComputerNum === userTotalScoreCount) {
        updateWins();        
        updateGameOver('     You won...let\'s play again!');
        resetGame();


    } else if (randomComputerNum < userTotalScoreCount) {
         updateLoses();
         updateGameOver('You lost...let\'s play again!') ;      
         resetGame();
    }




   })





 })


// window.onload = function(event) {
//   randomComputerNum = computerRandomNum();
//   randomCrystalNum1 = getCrystalNumber();
//   randomCrystalNum2 = getCrystalNumber();
//   randomCrystalNum3 = getCrystalNumber();
//   randomCrystalNum4 = getCrystalNumber();
//   console.log("In onload event: " + randomComputerNum);"
//   console.log("In onload event crystal 1: " + randomCrystalNum1);
//   console.log("In onload event crystal 2: " + randomCrystalNum2);
//   console.log("In onload event crystal 3: " + randomCrystalNum3);
//   console.log("In onload event crystal 4: " + randomCrystalNum4);
// }



//console.log (computerRandomNum());