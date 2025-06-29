//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

const grades = ["A", "B", "A"];

function convertGPA(grade) {
  if (grade === "A") {
    return 4;
  } else if (grade === "B") {
    return 3;
  }
}
const gpaPoints = grades.map(convertGPA);
console.log(gpaPoints);

//reduce
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
console.log(pointsTotal);
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa);

//filter
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const sixfruit = fruits.filter((fruit) => fruit.length < 6);
console.log(sixfruit);

//indexOf
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const numbersIndexOf = numbers.indexOf(luckyNumber);
console.log("---");
console.log(numbersIndexOf);

// let new_array = Array.map(function callback( currentValue[, index[, array]]) {

// }[, this Arg])
