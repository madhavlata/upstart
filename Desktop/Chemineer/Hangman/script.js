var Dictionary = [
  "CYCLE",
  "GALAXY",
  "GOSSIP",
  "LUXURY",
  "ZODIAC",
  "STRETCH",
  "RHYTHM",
  "AWKWARD",
  "Excited"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = Dictionary[Math.floor(Math.random() * Dictionary.length)];
}

function generateButtons() {
  let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _____ ")).join('');
  document.getElementById('wordSpotlight').innerHTML = wordStatus;

}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function showHint() {
  if (answer == "CYCLE") {
    document.getElementById('hintsimage').src = "./images/CYCLE.jpg"
  }
  if (answer == "GALAXY") {
    document.getElementById('hintsimage').src = "./images/GALAXY.jpg"
  }
  if (answer == "AWKWARD") {
    document.getElementById('hintsimage').src = "./images/AWKWARD.jpg"
  }
  if (answer == "EXCITED") {
    document.getElementById('hintsimage').src = "./images/EXCITED.jpeg"
  }
  if (answer == "GOSSIP") {
    document.getElementById('hintsimage').src = "./images/GOSSIP.jpg"
  }
  if (answer == "LUXURY") {
    document.getElementById('hintsimage').src ="./images/LUXURY.jpg"
  }
  if(answer=="RHYTHM"){
    document.getElementById('hintsimage').src="./images/RHYTHM.jpg"
  }
  if(answer=="STRETCH"){
    document.getElementById('hintsimage').src="./images/STRETCH.jpg"
  }
  if(answer=="ZODIAC"){
    document.getElementById('hintsimage').src="./images/ZODIAC.jpg"
  }
}



function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';
  document.getElementById('hintsimage').src="./images/hint.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

