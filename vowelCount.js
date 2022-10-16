function vowelCount(string){
    var count=0;
    str=string.toLowerCase();
    for(var i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("aeiou"));