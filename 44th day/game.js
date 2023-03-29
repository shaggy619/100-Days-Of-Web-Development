function startNewGame() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Please enter custom name of both players!");
    return;
  }
  resetGameStatus();

  activeGame.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayers() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectedGame(event) {
  if (gameIsOver) {
    return;
  }
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  activePlayerName.textContent = players[activePlayer].name;
  selectedField.classList.add("disabled");
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnderId = checkGameOver();
  console.log(winnderId);
  if (winnderId !== 0) {
    endGame(winnderId);
  }

  currentRound++;

  switchPlayers();
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id = "winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function endGame(winnderId) {
  gameIsOver = true;

  gameOverElement.style.display = "block";

  if (winnderId > 0) {
    const winnerName = players[winnderId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
