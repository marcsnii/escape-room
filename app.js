//We write the greeting and give the user a brief description about the game using console.log
//Write a loop that requests for user input
//Write loop conditions that is/are triggered due to the user's' response to the prompt
//---we write the set of conditions to be triggered:
//  if user inputs hole => player dies and game ends
//else if user inputs go to door => readlinesynch, if key is already found, door opens or
//you must find the key to open the door--the loop starts all over
//else if user inputs key => store boolean in variable and return user to choose door or hole
//if user chooses door => he wins the game

// var readLineSync = require("readline-sync");
// var hasKey = false;
// var greeting = "Greetings!!! If you just woke up, you are in a locked room with three options where only one of these options guarantees you life and freedom. In this room there is a hole in the wall where the contents of it  will only be revealed to you once you put your hand through it. There is also a key hidden in the room that should open the door, perhaps you should check the hole in the wall. Choose you this day wisely what your options are: Put hand in hole, Go to door, Find the key.     "
// console.log(greeting);
//
// while (true) {
//   var userResponseToPrompt = readLineSync.question("Enter your option: ");
//   if (userResponseToPrompt.indexOf("hole") !== -1) {
//     console.log("YOU DIED, GAME OVER!!!");
//     break;
//   } else if (userResponseToPrompt.indexOf("door") !== -1 && hasKey === false) {
//     console.log("You can't open the door without the key");
//
//   } else if (userResponseToPrompt.indexOf("key") !== -1) {
//     console.log("You found the key, what to do you want to do next? ");
//     hasKey = true;
//   } else if (userResponseToPrompt.indexOf("door") !== -1 && hasKey === true) {
//     console.log("You won!!! Go Home and enjoy your wife's food Francis");
//     break;
//   }
// }

var readLineSync = require("readline-sync");
var holeNumbers = [4, 7, 10, 13, 16, 19, 22, 25, 28];
var hasKey = false;
var openedDoors = [];
var hasEscaped = false;

var doorNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

var keyNumbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
var counter = 5;

while (!hasEscaped) {

  var userResponseToPrompt = readLineSync.question("Enter any number from 1 - 30 inclusive: ");
  //
  var check = function(door, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (door === arr[i]) {
        return true;
      }
    }
    return false;
  }
  // console.log(check(parseInt(userResponseToPrompt), doorNumbers));

  //



  for (var i = 0; i < holeNumbers.length; i++) {
    if (parseInt(userResponseToPrompt) === holeNumbers[holeNumbers.indexOf(holeNumbers[i])]) {
      counter -= 1
      console.log("Oh sorry you chose a hole number, you have " + counter + " lives left, TRY AGAIN");
    }else if (parseInt(userResponseToPrompt) === holeNumbers[holeNumbers.indexOf(holeNumbers[i])] && counter < 1){
      console.log("Sorry you died! Buy more lives to continue game!");
      hasEscaped = true;
    }

  }
  for (var i = 0; i < doorNumbers.length; i++) {
    if (parseInt(userResponseToPrompt) === doorNumbers[doorNumbers.indexOf(doorNumbers[i])] && hasKey === false) {

      console.log("Nice one there, you are at the door...but you need a key...go get it friend.");

    } else if (parseInt(userResponseToPrompt) === doorNumbers[doorNumbers.indexOf(doorNumbers[i])] && hasKey === true && openedDoors.indexOf(parseInt(userResponseToPrompt)) === -1) {
      console.log("Hurray!!! You opened and escaped Omar, the devil.");
      hasEscaped = true;
      break;
    }
  }
  if(openedDoors.indexOf(parseInt(userResponseToPrompt)) !== -1) {
    console.log("Sorry choose another number, number has already been used");

  }

  for (var i = 0; i < keyNumbers.length; i++) {
    if (parseInt(userResponseToPrompt) === keyNumbers[keyNumbers.indexOf(keyNumbers[i])]) {
      hasKey = true;
      console.log("You found the key, go get the door.");
    }
  }
  if (check(parseInt(userResponseToPrompt), doorNumbers) === true) {
    openedDoors.push(parseInt(userResponseToPrompt));
  }
}
