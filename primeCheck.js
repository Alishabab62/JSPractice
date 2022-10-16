function priemCheck(num){
var count=0,i;
for(i=1;i<=num;i++){
	if(num%i==0){
		count++;
	}
}
if(count==2){
	return "prime";
}
else{
	return "Not prime";
}
}
console.log(priemCheck(14));