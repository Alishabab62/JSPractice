function letterRemove(str){
    var newString="";
    for(var i=1;i<=str.length-2;i++){
        newString=newString+str[i];
       
    }
    return newString;
}
console.log(letterRemove("abcdefghijklmno"));