function animelCount(depth){
    var animel = 0;
    if( depth <= 10){
        animel = depth * 50;
    }
    else if(depth <= 20){
        var first10mile = 10 * 50;
        var remaining = depth - 10;
        var numberOfAnimel = remaining * 100;
        animel = first10mile + numberOfAnimel;
    }
    else{
        var first10mile = 10*50;
        var second20mile = 10*100;
        var remaining = depth - 20;
        var numberOfAnimel = remaining * 300;
        animel = first10mile + second20mile + numberOfAnimel;
    }
    return animel;
}
var animelnumber = animelCount(10);
console.log(animelnumber);