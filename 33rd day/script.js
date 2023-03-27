//DOM: Document Object Model
//Different Selection Method to get access to different HTML elements
//1.Drilling Method
document.body.children[1].children[0].href = "https://google.com";
document.body.firstElementChild;
//2.Selecting Element by Id
let elementLink = document.getElementById("link");
elementLink.href = "https://youtube.com";
//3.Using Query to Select Elements
//In querySelector, we select the elements as we used to select in CSS
document.querySelector("p a");
