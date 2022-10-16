// var num=2,count=0,i;
// for(i=1;i<=num;i++){
// 	if(num%i==0){
// 		count++;
// 	}
// }
// if(count==2){
// 	console.log("prime");
// }
// else{
// 	console.log("Not prime");
// }
// //var name =window.prompt("Name");

// function evendigit(num) {
// var str=""
// while (num != 0) {
//     let remainder = num % 10;
// 	num = Math.floor(num / 10);
//     if (remainder % 2 == 0) {
//         if(num>9){
// 			str=str+remainder+","
// 		}
// 		else{
// 			str=str+remainder;
// 		}
//     }
    
// }
// console.log(str);
// }
// evendigit(1234567898456235);


// function reverse(num){
// 	let newStr='';
// 	let str=String(num);
// 	let length=str.length;
	
// 	for(let i=length-1;i>=0;i--){
// 		newStr=newStr+str[i];
		
// 	}
// 	console.log(newStr);
// }
// reverse(12344555)

// function reverse(str){
// 	let string="";
// 	for(let i=0;i<str.length;i++){
// 	  if(str[i]==str[i].toUpperCase()){
// 		let lower=str[i].toLowerCase();
// 		string=string+lower;
// 	  }
// 	  else if(str[i]==str[i].toLowerCase()){
// 		let upper=str[i].toUpperCase()
// 		string=string+upper
// 	  }
// 	  else{
// 		string=string+str[i]
// 	  }
// 	}
// 	return string;
//   }
//   console.log(reverse("aSg GhS"))


let str="abcd";
console.log(str.reverse())
