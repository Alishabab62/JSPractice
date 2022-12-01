let arr=[1,2,3,4,5];
let newArr=[];
for(let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr.pop()
console.log(arr);