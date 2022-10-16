let height=5;
let str="";
var k=1;
for(let i=1;i<=height;i++){
    
    for(let j=1;j<=i;j++){
        str=str+k;
        k++;
        if(k==4){
            k=1;
        }
    }
    str=str+"\n";
}
console.log(str)

// var i,j,output = "";
// for(i = 1; i <= 7; i++){
//   for(j = 1; j <= 9; j++){
//     if(j == 5 && i >= 1 || i == 4 && j >= 1 || j == 1 && i <= 3 ||
//     i == 1 && j >= 6 || i == 7 && j <= 4 || j == 9 && i >= 5){
//       output += "*";
//     } else {
//       output += " ";
//     }
//   }
//   output += "\n";
// }
// console.log(output)