function hexadecimaToDecimal(str){
    var str = String(str);
    var decimal = 0;
    var res = str.split('').reverse().join('');
    for (var i = 0; i < res.length; i++) {
        decimal = decimal + res[i] * (16 ** i);
    }
    return decimal;
}
console.log(hexadecimaToDecimal(1));