function octalToHexadecimal(str) {
  var str = String(str);
  var dec = 0;
  var res = str.split('').reverse().join('');

  for (var i = 0; i < res.length; i++) {
    dec = dec + res[i] * (8 ** i);
    
  }
  //console.log(dec);
  var array = []
  while (Math.floor(dec / 16) != 0) {
    
    var remainder = dec % 16;   //0
    dec = Math.floor(dec / 16);  //20
    array.push(remainder);
    array.reverse();
    //console.log(array);
    }
  let result=array.join('');
  return dec+result;

}
console.log(octalToHexadecimal(6224));