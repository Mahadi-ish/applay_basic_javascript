function fivonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return fivonacci(n-1)+fivonacci(n-2);
    }
}
var result = fivonacci(80);
console.log(result);