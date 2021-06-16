var spech = 'amr  sonar  bangla  ami tomay  valo bashi, amr akash amr  batas';
var count = 0;
var i =0;
while(i < spech.length){
    var element = spech[i];
    if (element == ' ' && spech[i-1] !=' '){
        count++;
    }
    i++;
}
count++;
console.log(count);
function countNumberWord(word){
    var count = 0;
    var i = 0;
    while(i < word.length){
        var element = word[i];
        if(element==' '&& word[i-1]!=' '){
            count++;
        }
        i++;
    }
    count++;
    return count;
}
var output = countNumberWord(spech);
console.log('Output from function', output);