//EXERCISE
//1.Select the button and store in two different variable.
//-Select the first button without adding or using id.
const firstButton = document.body.children[1].children[4];
//-Select the second button using an "id"
const secondButton = document.getElementById("btn");

//2.Add "click" add event listner to both buttons with two different functions
//The function should console.dir the clicked button.
//-Output the first button by using the variable in which its stored.
function displayDirFirst() {
  console.dir(firstButton);
}
let firstChange = firstButton.addEventListener("click", displayDirFirst);
//-Output the second button without using the variable in which it is stored.
function displayDirSecond() {
  console.dir(document.getElementById("btn"));
}
let secondChange = document
  .getElementById("btn")
  .addEventListener("click", displayDirSecond);

//3.Now select and store the paragraphs mentioned in the text.
//Select the both paragraphs by drilling into the document.
const firstParagraph = document.body.children[1].children[1];
const thirdParagraph = document.body.children[1].children[3];

//4.Change the functions from (2) such that:
//-The first button removes the third paragraph.
function removeParagraph() {
  thirdParagraph.remove();
}
firstChange = firstButton.addEventListener("click", removeParagraph);

//-The second button changes the background color of the first paragraph to blue.
//-Using inline styling
function changeColor() {
  firstParagraph.style.backgroundColor = "rgb(133, 133, 255)";
}
secondChange = secondButton.addEventListener("click", changeColor);

//-Using CSS class
// function changeColor() {
//   firstParagraph.className = "blue";
//Or
//
//firstParagraph.classList.add("blue");
// }
// secondChange = secondButton.addEventListener("click", changeColor);
