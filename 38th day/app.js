let maxLength = 30;
let inputElement = document.querySelector("input");
let remainingChars = document.getElementById("remaining-chars");
let remainingCharacter;
function charCount() {
  let length = inputElement.value.length;
  remainingCharacter = maxLength - length;
  remainingChars.textContent = remainingCharacter;
  if (remainingCharacter <= 10) {
    remainingChars.style.color = "red";
    inputElement.className = "warning";
  } else {
    remainingChars.style.color = "green";
    inputElement.className = "normal";
  }
}
inputElement.addEventListener("input", charCount);

let characterCount = document.getElementById("character-count");
characterCount.classList.add("gray");
