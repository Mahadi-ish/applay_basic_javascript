function fiboseries(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = fiboseries(n-1);
        var elements = fibo[n-1] + fibo[n-2];
        fibo.push(elements);
        return fibo;
    }
}
var abc = fiboseries(144);
console.log(abc);