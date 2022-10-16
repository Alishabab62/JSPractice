function capilised(str){
    
    var afterCapital = str[0].toUpperCase()+str.slice(1);

    return afterCapital;
}
console.log(capilised("abc sss fdd"));