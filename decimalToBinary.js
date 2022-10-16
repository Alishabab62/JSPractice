function decimalToBinary(num){
    var array=[];
    while(Math.floor(num/2)!=num){
    let rem=num%2;
    num=Math.floor(num/2);
    array.push(rem);


    }
    array.reverse();
    let result=array.join('');
    console.log(result);
}
decimalToBinary(2335);