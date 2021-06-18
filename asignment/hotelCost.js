function hotelCost(day){
    var cost = 0;
    var errorMessage = 'Insert Positive Day';
    if(day <= 10){
        var first10DaysCost = 100 * day;
        cost = first10DaysCost;
      
    }else if(day <= 20){
        var first10days = 100 * 10;
        var remainingDays = day -10;
        var remainingCost = 80 * remainingDays;
        cost = first10days + remainingCost;
    }else{
        var first10days = 100 * 10;
        var second10Days = 80 * 10;
        var remainingDays = day - 20;
        var remainingCost = 50 * remainingDays;
        cost =first10days + second10Days + remainingCost;
    }
    if(cost>0 && cost!=-0){
        return cost;
    }else
    return errorMessage;
    
}
var hotelFair = hotelCost();
console.log(hotelFair);
