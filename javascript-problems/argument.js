function testArguments(num1){
    var num = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        num = num + element;
        
    }
    return num;
}

var result = testArguments(1, 2, 3);
console.log(result);