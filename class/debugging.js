const pi = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * pi;
console.log(`When radius is 3, area is ${area}.`);
radius = 4;
area = radius * radius * pi;
console.log(`When radius is 4, area is ${area}.`);

const PI = 3.14;
let area2 = 0;
function circleArea(radius) {
  return radius * radius * PI;
}
area2 = circleArea(3);
console.log(area2);
