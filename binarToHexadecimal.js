function binaryToHexaDecimal(strin) {
var str = String(strin);
var decimal = 0;
var res = str.split("").reverse().join("");
for (var i = 0; i < res.length; i++) {
    decimal = decimal + res[i] * (2 ** i);
}
console.log(decimal)
var array = [];
while (Math.floor(decimal / 16) != 0) {
    let remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);
    array.push(remainder);
}
array.reverse();
let result = array.join("");
return decimal + result;
}
console.log(binaryToHexaDecimal(11001000000010000100));  //11001000000010000100 //110010000100
