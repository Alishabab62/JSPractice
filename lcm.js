function LCM(num1,num2){
    
    let max = (num1< num2) ? num2 : num1; 
    //console.log(max)  //5
    while(true){
        if(max%num1==0 && max%num2==0){     //max=5=false,6=false,7=false,8=false,9=false,10=true
            return max;
            
        }
        max++
    }
}
console.log(LCM(2,7));