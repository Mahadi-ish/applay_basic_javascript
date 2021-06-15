// var num1 = 12.34434;
// var result1 = Math.floor(num1);
// console.log(result1);
// var result2 = Math.ceil(num1);
// console.log(result2);
// var result3 = Math.round(num1);
// console.log(result3);

for (i = 1; i < 2; i++){
    var output = Math.random()* 6;
    var result4 = Math.round(output);
    if(result4 == 0){
        console.log(1);
        break;
    }
    console.log(result4);
}