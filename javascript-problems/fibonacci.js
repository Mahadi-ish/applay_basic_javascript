function fibonacci(num){
    var fibo = [1, 1];
    for (var i = 2; i <= 10; i++){
        var element = fibo[i-1] + fibo[i-2];
        //console.log(element, fibo[i-1],fibo[i-2]);
        fibo.push(element);
    }
    return fibo;
}

var result = fibonacci(10);
console.log(result);