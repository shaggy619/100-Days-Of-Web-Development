function startNewGame() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Please enter custom name of both players!");
    return;
  }
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
  console.log(gameData);

  switchPlayers();
}
