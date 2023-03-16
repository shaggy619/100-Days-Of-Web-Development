//Inserting new HTML element with JavaScript.

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
