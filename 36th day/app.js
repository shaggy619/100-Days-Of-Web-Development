let maxLength = 60;
let inputElement = document.querySelector("input");
let remainingChars = document.getElementById("remaining-chars");
function charCount() {
  let length = inputElement.value.length;
  let remainingCharacter = maxLength - length;
  remainingChars.textContent = remainingCharacter;
}
inputElement.addEventListener("input", charCount);
