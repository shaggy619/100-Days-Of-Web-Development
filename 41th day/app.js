const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("config-overlay");

const editButton1 = document.getElementById("edit-button1");
const editButton2 = document.getElementById("edit-button2");
const cancelButton = document.getElementById("cancel-button");

editButton1.addEventListener("click", openPlayerConfig);
editButton2.addEventListener("click", openPlayerConfig);

cancelButton.addEventListener("click", closeOverlay);
backdropElement.addEventListener("click", closeOverlay);
