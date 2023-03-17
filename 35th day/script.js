//INSERTING NEW HTML ELEMENT WITH JAVASCRIPT.

//1.Create the new Element:
//We can create new Element using createElement keyword followed by the name of the element we want to create.
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "Google";

//2.Get access to the parent element that should hold the new element.
let secondParagraph = document.querySelector(".paragraph");

//3.Insert the new element into the parent element content.
secondParagraph.append(newAnchorElement); //We can insert new element into the parent element using append tag or
//using insertBefore keyword if we want to insert the element at the beginning section.

//DELETING ELEMENT
//1.Select the element that we want to delete.
let delText = document.querySelector("h1");
//2.Delete the element
delText.remove();

//MOVING ELEMENTS
//1.Select the element we want to move.
let firstParagraph = document.querySelector(".f-paragraph");

//2.Select the parent element
let parentElem = firstParagraph.parentElement;

//3.Move the element
parentElem.append(firstParagraph);
