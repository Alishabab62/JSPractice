function numberchecker(num){
    if(num==0){
        return "Number is zero";
    }
    else if(num>0){
        return "Number is positive";
    }
    else {
        return "Number is negative";
    }
}
console.log(numberchecker(0));