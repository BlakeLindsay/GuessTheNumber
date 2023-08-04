/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let guessNumber = 0;

function randomNumber(userGuess, computersNumber) {
	// YOUR CODE BELOW

	if (userGuess < 1 || userGuess > 100) {
		return "Please input a number between 1 and 100";
	}

	guessNumber++;

	if (userGuess > computersNumber) {
		return `Lower\nGuesses: ${guessNumber}`;
	} else if (userGuess < computersNumber) {
		return `Higher\nGuesses: ${guessNumber}`;
	} else {
		return `The number was ${computersNumber}!\nGuesses: ${guessNumber}`;
	}

	// YOUR CODE ABOVE
}

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/
let currentNumber = 1;
let highest = 100;
let lowest = 1;
let computerGuesses = 0;

function startCompGuess(num) {
	// This should return a string that denotes the first guessed number
	// YOUR CODE ...
	currentNumber = num;
	highest = 100;
	lowest = 1;
	computerGuesses = 0;
	return `Is your number ${currentNumber}?`;
}

function compGuess(reply) {
	/* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
	computerGuesses++;

	if (computerGuesses > 7) {
		return `This is impossible. Restart the game.`;
	}

	switch (reply) {
		case "lower":
			highest = currentNumber - 1;
			console.log("highest:", highest);
			createGuess();
			return `Your number is lower? Is it ${currentNumber}?`;
		case "higher":
			lowest = currentNumber + 1;
			console.log("lowest:", lowest);
			createGuess();
			return `Your number is higher? Is it ${currentNumber}?`;
		default:
			return `I knew it was ${currentNumber}!`;
	}
}

let createGuess = () => {
	if (highest < 1) {
		highest = 1;
	}
	if (lowest > 100) {
		lowest = 100;
	}
	currentNumber = Math.floor((highest + lowest) / 2);
};