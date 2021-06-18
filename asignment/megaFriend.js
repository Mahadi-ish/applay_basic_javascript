function megaFriend(friendName){
    var longName = [0];
    for (var i =0; i < friendName.length; i++){
        var element = friendName[i];
        if(element.length > longName.length){
            longName = element;
        }
    }
    return longName;
}
var  friend = ["abir","abdullah","robin","abdurrohim","ali"]
var longFriend = megaFriend(friend);
console.log(longFriend);
