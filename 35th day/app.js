//ADDING EVENT LISTNER
//To add event listner we first select the element in which we want to use this property
//Then we need to add the keyword addEventListner followd by parenthesis.
//The first value in the bracket contains the event or action and the second value contains the function we want to implement through that action.
let firstParagraph = document.querySelector(".first-paragraph");
function changeText() {
  firstParagraph.textContent = "This paragraph was clicked!";
}
firstParagraph.addEventListener("click", changeText);

//Second example:
let inputElement = document.querySelector("input");
function displayValue() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}
inputElement.addEventListener("input", displayValue);
