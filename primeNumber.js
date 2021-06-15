function isPrime(n){
    for (i=2; i<n; i++){
        if(n%i == 0){
            return 'Not a Prime NUmber';
        }
    }return `It's prime number`;
}
var result = isPrime(17);
console.log(result);

function isprime2(n){
    var i = 2;
    while(i<n){
        if(n%i == 0){
            return 'not a prime number';

        }
        i++;
    }
    return 'prime number';
}
var fol = isprime2(17);
console.log(fol);