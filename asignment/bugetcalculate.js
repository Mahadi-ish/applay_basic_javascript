function budgetCalculate(wPrice = 0,mPrice = 0,lPrice = 0){
    
    var watchPrice = 50 * wPrice ;
    var mobilePrice = 100 * mPrice;
    var laptopPrice = 500 * lPrice;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var totalBudget = budgetCalculate();
console.log(totalBudget);