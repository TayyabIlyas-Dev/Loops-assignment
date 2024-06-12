// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.
// 1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
// 1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
var maxValue = 10;
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
var isGuessCorrect = false;
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
var userGuesses = [3, 7, 1, 9, 5, 4, 8, 12];
// Initialize a counter for the while loop
var index = 0;
// Check each guess against the random number using a while loop
while (index < userGuesses.length && !isGuessCorrect) {
    var guess = userGuesses[index];
    console.log("User guessed: ".concat(guess));
    if (guess === randomNumber) {
        isGuessCorrect = true;
        console.log("Correct guess!");
    }
    else {
        console.log("Incorrect guess.");
    }
    index++;
}
// Log the final result
if (!isGuessCorrect) {
    console.log("User did not guess the number.");
}
