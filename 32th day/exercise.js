let courseName = "100 Days of Web Development";
let coursePrice = 1300;
let courseGoals = [
  "internship",
  "junior web-developer",
  "senior web-developer",
];
// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

let courseDetails = {
  name: courseName,
  price: coursePrice,
  goals: courseGoals,
};
// alert(courseDetails.name);
// alert(courseDetails.price);
// alert(courseDetails.goals);
// alert(courseDetails.goals[1]);

function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
let firstGoal = getListItem(courseDetails.goals, 0);
alert(firstGoal);
