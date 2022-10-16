// function smallestNum(num1,num2,num3,num4,num5){
//     var array=[];
//     array.push(num1,num2,num3,num4,num5);
//     //console.log(array);
//     for(var i=0;i<array.length;i++){
//         for(var j=i+1;j<array.length;j++){
//             if(array[i]>array[j]){
//                 let temp=array[i];
//                 array[i]=array[j];
//                 array[j]=temp;
//             }
//         }
//     }
//     if(array[0]>=40){
//         return "Yes";
//     }
//     else{
//         return "No";
//     }
// }
// console.log(smallestNum(100,40,328,400,200));
function circularCone(radius,height){
    var result = Math.PI*radius**2*(height/3);
    return (result);
    }
    var outcome= circularCone(4,6);
    console.log(outcome);
    
    