var number = [1, 2, 3, 4, 2, 3, 4, 5, 6, 3, 5, 6, 4, 6, 7, 7, 8, 9, 0, 56, 67, 5, 23, 3, 23, 45, 45, 56, 67, 13, 24, 35, 46, 57];
var uniqName = [];

for (var i= 0; i < number.length; i++){
    var elements = number[i];
    var index = uniqName.indexOf(elements);
    if(index == -1){
        uniqName.push(elements);
    }
}
console.log('From raw',uniqName);

function removeDuplicateArray(n){
    var uniqName = [];

    for (var i= 0; i < number.length; i++){
        var elements = number[i];
        var index = uniqName.indexOf(elements);
        if(index == -1){
            uniqName.push(elements);
    }
    }
    return uniqName;
}
var output = removeDuplicateArray(number);
console.log('From function',output);