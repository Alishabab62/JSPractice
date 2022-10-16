function checkReverse(num){
    var temp,remainder,newNum=0;
    temp=num;
    while(num!=0){
    
    remainder=num%10;
    newNum=newNum*10+remainder;
    num=Math.floor(num/10);
    }
    if(temp==newNum){
        return "yes";
    }
    else{
        return "no";
    }
}
console.log(checkReverse(121));