//Exercies:
//1.Select <h1> element by "drilling into the DOM"
let mainHeader = document.body.children[1];
//2. Use the variable from (1) to select the parent element & sibling element.
//Parent Element
mainHeader.parentElement;
//Sibling Element
mainHeader.nextElementSibling;
//3.Select <h1> element with getElementById and store in a variable.
mainHeader = document.getElementById("main-header");
//4.Select the 2nd <p> element with querySelector and store it in a new variable.
let secondParagraph = document.querySelector(".paragraph");
//5.Try changing the text content of the <p> element you selected and set it to any other text of your choice.
secondParagraph.textContent = "This is the Modified Text.";
