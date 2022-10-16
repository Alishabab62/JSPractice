function fibonacciCheck(num){
    var a=0,b=1,flag=false;
    for(var i=0;i<=num;i++){
    var c=a+b;          
        a=b;            
        b=c;
        if(b==num|| num==0){
        flag=true;
        }
    }
        if(flag){
            return true;
        }
        else{
            return false;
        }
}
console.log(fibonacciCheck(10)); 
