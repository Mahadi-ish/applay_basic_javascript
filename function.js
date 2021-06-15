function love(){
    console.log('I love my country');
    console.log('I love my parent');
    console.log('I love my family');
}

love();

function doubleIt(num){
    var sendNumber = num * 3;
    //console.log(sendNumber);
    return sendNumber;
}
var firstNumber = doubleIt(10);
console.log(firstNumber);
var secondNumber = doubleIt(100);
console.log(secondNumber);
var total = firstNumber + secondNumber;
console.log('Total number is',total);

function add(num1, num2){
    var total = num1 + num2;
    return total;
}
var result1 = add(29,21);
console.log(result1);
var result2 = add(50, 100);
console.log(result2);

function fullName(firstName, lastName){
    var full_name = firstName +' '+ lastName;
    return full_name;
}
var fname = fullName('mahadi','shohag');
console.log(fname);
