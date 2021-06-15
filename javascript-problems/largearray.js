var result = [34, 22, 25, 56, 23, 45, 56, 36, 46, 57, 68, 79, 09, 89, 90];
var max = result[0];
for (var i = 0; i < result.length; i++){
    var elements = result[i];
    if (elements > max){
        max = elements;
    }

}console.log(max);
console.log(Math.max(...result));