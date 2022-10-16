function hexadecimaToBinary(str){
    var str = String(str);
    var decimal = 0;
    var res = str.split('').reverse().join('');
    for (var i = 0; i < res.length; i++) {
        decimal = decimal + res[i] * (16 ** i);
    }
    
    var array=[];
    while(Math.floor(decimal/2)!=decimal){
    let rem=decimal%2;
    decimal=Math.floor(decimal/2);
    array.push(rem);


    }
    array.reverse();
    let result=array.join('');
    return result;
}

console.log(hexadecimaToBinary(123));