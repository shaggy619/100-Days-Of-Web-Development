function openPlayerConfig(event) {
  overlayElement.style.display = "block";
  backdropElement.style.display = "block";
  const selectedPlayer = +event.target.dataset.playerid; //We need to first use data attribute in HTML file and give it a name and then we can use dataset property.
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
  event.preventDefault(); //Prevents the default behaviour of the submit button
  const formData = new FormData(formElement);
  const enteredPlayerName = formData.get("playername").trim(); //get() keyword is used to get the value from FormData which can be extracted using the name attribute used in input field.

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
