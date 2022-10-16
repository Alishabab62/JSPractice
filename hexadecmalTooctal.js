function hexadecimaToOctal(str) {
    var str = String(str);
    var dec = 0;
    var res = str.split('').reverse().join('');
    for (var i = 0; i < res.length; i++) {
        dec = dec + res[i] * (16 ** i);
    }
console.log(dec);
var array="";

while(Math.floor(dec/8)!=0){
let remainder=dec%8;
dec=Math.floor(dec/8);

array=array+remainder;
}
var res=array.split('').reverse().join('');
return (dec+res);
}
console.log(hexadecimaToOctal(1233));