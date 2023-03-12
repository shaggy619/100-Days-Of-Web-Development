//We can create a function inside a group.
//A function inside a group is called method.
//To create a function inside group we omit function keyword.
let person = {
  name: "Samyam", //Property
  greet() {
    console.log("Hi! I'm Samyam."); //Method
  },
};
person.greet();

//We can perform different mathematical operation on JavaScript.
//Eg:
console.log(5 + 10);
let a = 10;
let b = 20;
let add;
add = a + b;
console.log(add);

//We can use shortend of the operation
let x = 2;
x = x + 1;
x++;
console.log(x);

//We can also use "+" operation to add up string value and this is called concatenation.
let userName = "Samyam";
let surname = "Adhikari";
console.log(userName + " " + surname);

//We can use other different methods and operations in string value.
//Eg:
console.log(userName.length); //Used to determine the number the characters a string hold.
console.log(surname.toUpperCase()); //Used to make the text Uppercase.
