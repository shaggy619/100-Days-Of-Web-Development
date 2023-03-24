function openPlayerConfig(event) {
  overlayElement.style.display = "block";
  backdropElement.style.display = "block";
  const selectedPlayer = +event.target.dataset.playerid;
  editedPlayer = selectedPlayer;
}

function closeOverlay() {
  overlayElement.style.display = "none";
  backdropElement.style.display = "none";
  document.getElementById("form-control").classList.remove("error");
  errorOutputElement.textContent = "";
  document.getElementById("playername").value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    document.getElementById("form-control").classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closeOverlay();
}
