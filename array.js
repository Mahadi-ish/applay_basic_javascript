var age = [12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(age);
age.push(21);
console.log(age);
var position = age.indexOf(21);
var lastDigit = age[position];
console.log(position);
console.log(lastDigit);
age.pop();
console.log(age);