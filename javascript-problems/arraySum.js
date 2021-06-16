
function arraySuam(number){
    var sum = 0;
    for (var i = 0; i < number.length; i++ ){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
var sumNumber = [12, 23, 34, 45, 56, 67, 78, 89, 90,234];
var output = arraySuam(sumNumber);
console.log(output);