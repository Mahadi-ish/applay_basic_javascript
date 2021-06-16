//6! = 6*5*4*3*2*1

function recurciveFactorial(num){
    if(num == 1){
        return 1;
    }
    else{
        return num * recurciveFactorial(num-1);
    }
}
var result = recurciveFactorial(10);

console.log(result);