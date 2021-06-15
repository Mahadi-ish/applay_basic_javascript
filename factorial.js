// var factorial = 1;
// for (var i = 1; i <= 5; i++){
//     factorial = factorial * i;
//     console.log(i,factorial);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum = sum + i;
//     console.log(i,sum);
// }

function factorial(n){
    var number1 = 1;
    for (var i = 1; i <= n; i++){
        number1 = number1 * i;
    }
    return number1;
}
var result = factorial(10);
console.log('For loop result :',result);

// var num2=1;
// var i=1;
// while(i<=10){
//     num2=num2*i;
//     console.log(i,num2);
//     i++;
// }
function anotherFactorial(n){
    var num3=1;
    var i=1;
    while(i<=n){
        num3=num3*i;
        i++;
    }
    return num3;
}
var result2 = anotherFactorial(0);
console.log('while loop result :',result2);