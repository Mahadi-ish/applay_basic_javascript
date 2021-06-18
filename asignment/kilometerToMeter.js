function kilometerToMeter(n){
    var meter = 1000 * n;
    var errorMessage = 'Please input positive value.';
    if(meter > 0 && meter != -0){
        return meter;
    }else{
        return errorMessage;
    }
}
var kilotometer = kilometerToMeter();
console.log(kilotometer);