var num1 = 345;
var eachfeet = 12;
var feet = num1/eachfeet;
console.log(feet);

function enchToFeet(ench){
    var eachfeet = 12;
    var feet = ench/eachfeet;
    return feet;
}
var firstnumber = enchToFeet(256);
console.log('first number',firstnumber);
var secondNumber = enchToFeet(156);
console.log('second number',secondNumber);
var thirdNumber = enchToFeet(222);
console.log('third number',thirdNumber);