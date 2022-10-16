
function binaryToOctet(str){
    var str=String(str);
    var decimal=0;
    var res=str.split('').reverse().join('');
    for(var i=0;i<res.length;i++){
        decimal=decimal+res[i]*(2**i);
    }
    var array="";
    while(Math.floor(decimal/8)!=0){
    let remainder=decimal%8;
    decimal=Math.floor(decimal/8);
    array=array+remainder;
    }
    var res=array.split('').reverse().join('');
    return decimal+array;
    }
   console.log(binaryToOctet(11001000000010000100));