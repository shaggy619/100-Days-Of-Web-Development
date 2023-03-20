//Different Loops in JavaScript
//FOR LOOP
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//FOR..OF LOOP (Used for Array)
const userNames = ["Samyam", "Kritan", "Shaggy"];
for (const name of userNames) {
  console.log(name);
}

//FOR..IN LOOP (Used for Objects)
const user = {
  name: "Samyam",
  age: 21,
  isAdmin: true,
};

for (const details in user) {
  console.log(details);
  console.log(user[details]);
}

//WHILE LOOP
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");
