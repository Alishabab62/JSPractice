function octalToDecimal(str){
    var str = String(str);
    var decimal = 0;
    var res = str.split('').reverse().join('');
   // console.log(res[0],res[1],res[2],res[3])
    for (var i = 0; i < res.length; i++) {
        decimal = decimal + res[i] * (8 ** i);
        
    }
    return decimal;
}
console.log(octalToDecimal(123000));