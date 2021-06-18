var carName = ['audi', 'AMG', 'Nissan', 'BMW', 'Fiat', 'SAIC', 'General', 'Honda', 'Ford', 'Volkswagen', 'Toyota'];
function bigestCarName(cName){
    var longCarName = [0];
    for(var i = 0; i < cName.length; i++){
        var element = cName[i];
        if(element.length > longCarName.length){
            longCarName = element;
        }
    }
    return longCarName;
}
var showBigName = bigestCarName(carName);
console.log(showBigName);
