function binaryToDecimal(str){
//     var dec=(a*8)+(b*4)+(c*2)+(d*1);
//     return dec;
let stri=String(str);
    let decimal=0;
    let res=stri.split('').reverse().join('');  //00100001000000010011
    for(let i=0;i<res.length;i++){            //0,1
        decimal=decimal+res[i]*(2**i);        //0,0
    }
    return Number(decimal);
}
console.log(binaryToDecimal(11001000000010000100));   //110010000100  //11001000000010000100