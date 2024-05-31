let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses");
let answer = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;
btn.addEventListener("click", () => {
  guessesNumber();
});
function guessesNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter between 1 to 100";
    numGuesses = 0;
  } else {
    numGuesses++;
    guesses.innerHTML = "No. of guess: " + numGuesses;
    if (input.value > answer) {
      wrng.innerHTML = "Lower";
      input.value = "";
    } else if (input.value < answer) {
      wrng.innerHTML = "Higher";
      input.value = "";
    } else {
      wrng.innerHTML = "Congratulation you have guessed correctly " + answer + " in " + numGuesses + " guesses";
      input.value = "";
      btn.disable = true;
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame() {
  numGuesses = 0;
  guesses.innerHTML = "No. of guess: " + numGuesses;
  wrng.innerHTML = "";
  btn.disable = false;
  answer = Math.floor(Math.random() * 100) + 1;
}
