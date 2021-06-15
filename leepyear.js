
function leepYear(year){
    var leep_year = year%4;
    var check2 = year%100;
    var check3 = year%400;
    if(leep_year == 0  && check2 != 0 || check3 == 0){
        return true;
    }
    else{
        return false;
    }
}

var isleepyear = leepYear(1704);
console.log(isleepyear);