var minister = 350;
var business = 400;
var sochib = 480;
if(minister > business){
    if(minister > sochib){
        console.log('minister boro');
    }else{
        console.log('sochib boro');
    }
}
else{
    if(business > sochib){
        console.log('business boro');
    }else{
        console.log('sochib boro');
    }
}
//javascript buildin method
var maxNumber = Math.max(minister, business, sochib);
console.log(maxNumber);

var array1 = [1, 3, 2, 4];
var array2 = [9, 7, 6, 23, 14, 56];

console.log(Math.max(...array1));
console.log(Math.max(...array2));
console.log(Math.min(...array2));