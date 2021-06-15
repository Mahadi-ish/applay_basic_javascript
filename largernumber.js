var numbers = [12, 23, 13, 24, 23, 24, 45, 46, 56, 57, 67, 68, 79, 78, 90, 101, 1];

function largestNumber(input){
    var l_number = numbers[0]
    for(var i = 0; i < numbers.length; i++){
        var elements = numbers[i]
        if(elements > l_number){
            l_number = elements
        }
    }
    return l_number;
}
var output = largestNumber(numbers);
console.log(output);