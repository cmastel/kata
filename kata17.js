let prompt = require("prompt-sync")();

// create a random number between 0 and 10
const randomNumber = Math.floor(Math.random() * 10 + 1);
let answerHistory = []; // initialize an empty array to hold valid guesses
let answer;

// use a while loop to keep the user guessing until their answer matches
// the randomNumber
while (answer != randomNumber) {
  answer = prompt("Guess a number: "); // request the users input
  if (isNaN(answer)) { // checks if answer is Not a Number
    console.log("Not a number! Try again!"); // if so, user guesses again
  } else if (answerHistory.includes(answer)) { // checks if the answer has already been guessed
    console.log("Already guessed!"); // if so, user guesses again
  } else if (answer > randomNumber) { // check if the answer is higher than randomNumber
    console.log("Too high!");
    answerHistory.push(answer); // if so, answer is logged and user guesses again
  } else if (answer < randomNumber) { // check if answer is less than randomNumber
    console.log("Too low!");
    answerHistory.push(answer); // if so, answer is logged and user guesses again
  } 
} // end while loop

// as soon as answer matches randomNumber, the while loop ends
// therefore, final answer is logged
answerHistory.push(answer);
// and the final output gives the number of valid guesses
console.log("You got it! You took " + answerHistory.length + " attempts.");

