let age = 32;
let adultAge;
let userAge;
//It is better practice to give indentation the the objects.
let job = {
  title: "Web Developer",
  place: "Kathmandu",
  salary: "60K",
};

//Accessing Objects
//We can access objects by using the object name followed by the "." sign thenafter the title name
alert(job.title);

//Functions
/*We can create functions by using the "function" keyword followed by the function name after that we use ()
to hold the parameter of the function and {} bracket is used to write the actual operational code in the function.*/
function calculateAge() {
  adultAge = age - 18;
}
//for using the function we need to call it.
calculateAge();
alert(adultAge);

//Another function with return statement
userAge = 45;
function calculateuserAge() {
  return userAge - 18;
}
userAge = calculateuserAge();
alert(userAge);

//Function with parameter
function calculateValue(rollNo) {
  return rollNo - 18;
}

let number = calculateValue(32);
alert(number);
let ram = 20;
number = calculateValue(ram);
alert(number);
