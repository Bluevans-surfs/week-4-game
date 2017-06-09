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

window.onload = function(event) {
  randomComputerNum = computerRandomNum();
  randomCrystalNum1 = getCrystalNumber();
  randomCrystalNum2 = getCrystalNumber();
  randomCrystalNum3 = getCrystalNumber();
  randomCrystalNum4 = getCrystalNumber();
  console.log("In onload event: " + randomComputerNum);
  console.log("In onload event crystal 1: " + randomCrystalNum1);
  console.log("In onload event crystal 2: " + randomCrystalNum2);
  console.log("In onload event crystal 3: " + randomCrystalNum3);
  console.log("In onload event crystal 4: " + randomCrystalNum4);
}



//console.log (computerRandomNum());