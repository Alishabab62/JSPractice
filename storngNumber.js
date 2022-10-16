function strongNumber(num){
    var temp=num;
    var remainder,sum=0;
    while(num!=0){
        remainder=num%10;
        var fact=1
        for(var i=1;i<=remainder;i++){
            fact=fact*i;
            
        }
        
        num=Math.floor(num/10);
        sum=sum+fact;
    }
    if(sum==temp){
        return "Strong Number";
    }
    else{
        return "Not Strong Number";
    }
}
console.log(strongNumber(145));