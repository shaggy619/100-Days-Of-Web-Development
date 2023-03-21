//Calculator Section
const firstButton = document.getElementById("first-button");

function addNumbers() {
  const enteredNumberElement = document.getElementById("number");
  const enteredNumber = enteredNumberElement.value;
  let sumUpto = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    sumUpto = sumUpto + i;
  }
  const displayOutput = document.getElementById("calculated-sum");
  displayOutput.textContent = sumUpto;
  displayOutput.style.display = "block";
}
firstButton.addEventListener("click", addNumbers);

//Highlight Section
const secondButton = document.querySelector("#highlight button");
function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight a");
  for (const elements of anchorElements) {
    elements.classList.add("highlight");
  }
}
secondButton.addEventListener("click", highlightLinks);

//Information Section

const userData = {
  firstName: "Samyam",
  lastName: "Adhikari",
  age: "21",
};
const thirdButton = document.querySelector("#information button");
function displayData() {
  const informationUL = document.getElementById("user-data");
  informationUL.innerHTML = "";
  for (const datas in userData) {
    const newUserList = document.createElement("li");
    const outputText = datas.toUpperCase() + ": " + userData[datas];
    newUserList.textContent = outputText;
    informationUL.append(newUserList);
  }
}
thirdButton.addEventListener("click", displayData);

//Roll Dice Section
const rollDiceButton = document.querySelector("#statistics button");
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function numberOfDiceRolls() {
  const targetNumber = document.getElementById("target");
  const enteredNumber = targetNumber.value;
  const diceRollList = document.getElementById("dice-rolls");
  diceRollList.innerHTML = "";
  let hasRolledTarget = false;
  let numberOfRolls = 0;
  while (!hasRolledTarget) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTarget = true;
    // }
    //OR
    numberOfRolls++;
    const newRollList = document.createElement("li");
    const outputTExt = "Rolls" + numberOfRolls + ": " + rolledNumber;
    newRollList.textContent = outputTExt;
    diceRollList.append(newRollList);
    hasRolledTarget = rolledNumber == enteredNumber;
  }
  const outputTotalRolls = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");
  outputTargetNumber.textContent = enteredNumber;
  outputTotalRolls.textContent = numberOfRolls;
}

rollDiceButton.addEventListener("click", numberOfDiceRolls);
