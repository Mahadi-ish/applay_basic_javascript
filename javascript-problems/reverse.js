var spech = 'amar sonar bangla ami tomay valo bashi';
var reverse = '';
 
for ( var i=0; i<spech.length; i++){
    var char = spech[i];
    reverse = char + reverse;
    
}
console.log(reverse);

function reverseText(text){
    var reverseWord = '';
    var i = 0;
    while(i<text.length){
        var char = text[i];
        reverseWord = char + reverseWord;
        i++;
    }
    return reverseWord;
}
var result = reverseText(spech);
console.log('Out put from function:',result);