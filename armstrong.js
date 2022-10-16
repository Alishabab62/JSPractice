function armstrong(num){
    var temp,remainder=0,a;
    temp=num;
    while(temp!=0){
        a=temp%10;
        remainder=remainder+a*a*a;
        temp=Math.floor(temp/10);
    }
    if(remainder==num){
        return "Armstrong Number";
    }
    else{
        return "Not Armstrong Number";
    }
}
console.log(armstrong(153));