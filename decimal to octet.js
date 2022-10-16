
function decimalToOctate(dec){

var array=[];

while(Math.floor(dec/8)!=0){
let remainder=dec%8;
dec=Math.floor(dec/8);

array.push(remainder);
console.log(array)
}
array.reverse();
let res=array.join('');
return (dec+res);
}
console.log(decimalToOctate(422659));


