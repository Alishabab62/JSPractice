function checkInteger(num){
   var intNumber=parseInt(num);
   if(intNumber==num){
    return "Integer";
   }
   else{
    return "Not Integer";
   }
}
console.log(checkInteger(0));