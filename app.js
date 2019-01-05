/*
GAME FUNCTION:
- Player guess a number between min and max
- Player gets a certain amount of guesses
- Notify guesses remain
- Notify the player of the correct answer if loose
- Let player play again
*/

// Game value
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for play again
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between  ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct !`, 'green');
    playAgain();
  } else {
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game over - lost
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Game over !!! The correcr number was ${winningNum}`, 'red');
    } else {
      // Game continue - wrong answer
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      guessInput.value = '';
    }
  }
});

function playAgain() {
  guessBtn.value = 'Play again';
  guessBtn.className = 'play-again';
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}