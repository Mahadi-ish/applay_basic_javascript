var a = 7;
var b = 9;
console.log('Before swap a =',a ,'b =',b);
var temp = a;
a = b;
b = temp;
console.log('After swap a =',a ,'b =',b);

console.log('||=================java===============||')
var p = 10;
var q = 20;
console.log('Before swap p =',p ,'q =',q);
[p, q] = [q, p]
console.log('After swap p =',p ,'q =',q);
