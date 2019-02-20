// create secretNumber
var randomNumber = Math.floor(Math.random() * 100) + 1;
// store guess
const guesses = document.querySelector('.guesses');
// last result
const lastResult = document.querySelector('.lastResult');
// lowOrHi
const lowOrHi = document.querySelector('.lowOrHi');
// guess Submit 
const guessSubmit = document.querySelector('.guessSubmit');
// guess Field
const guessField = document.querySelector ('.guessField');
// guess count
let guessCount = 1;

let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  };
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.TextContent = '';
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textCount = '!!!GAME OVER!!!';
    setGameOver   }
}
// if guess is not a number alert user with tooltip that guess has to be a number.