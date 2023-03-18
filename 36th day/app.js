let maxLength = 60;
let inputElement = document.querySelector("input");
let remainingChars = document.getElementById("remaining-chars");
let remainingCharacter;
function charCount() {
  let length = inputElement.value.length;
  remainingCharacter = maxLength - length;
  remainingChars.textContent = remainingCharacter;
}
inputElement.addEventListener("input", charCount);

//STYLING ELEMENTS WITH JAVASCRIPT
//There are different ways to style elements with the help of JavaScript

//1.Using style keyword
//First we need to select the element we want to style and we need to write "style" keyword followed by dot
//Then we need to write the property we need to style and give it a value as string.
remainingChars.style.color = "green";

//2.Using className keyword
//First we need to select the element we want to style and we need to write "className" keyword followed by dot
//In this approach we don't write these classes to html element insted we style these classes in CSS and call it in JavaScript
inputElement.className = "warning";

//3. Using classList keyword
//The process is same as we did in className method but we need to add some add or remove keyword followed by classList and dot
let characterCount = document.getElementById("character-count");
characterCount.classList.add("gray");
