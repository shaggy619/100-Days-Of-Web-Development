let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("config-overlay");

const editButton1 = document.getElementById("edit-button1");
const editButton2 = document.getElementById("edit-button2");
const cancelButton = document.getElementById("cancel-button");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

editButton1.addEventListener("click", openPlayerConfig);
editButton2.addEventListener("click", openPlayerConfig);

cancelButton.addEventListener("click", closeOverlay);
backdropElement.addEventListener("click", closeOverlay);

formElement.addEventListener("submit", savePlayerConfig);

const startNewGameBtn = document.getElementById("new-game");
startNewGameBtn.addEventListener("click", startNewGame);

const activeGame = document.getElementById("active-game");
const activeGameField = document.querySelectorAll("#active-game li");

for (const field of activeGameField) {
  field.addEventListener("click", selectedGame);
}

const activePlayerName = document.getElementById("active-player-name");

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const gameOverElement = document.getElementById("game-over");
const gameBoardElement = document.getElementById("game-board");

let gameIsOver = false;
