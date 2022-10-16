function conacataion(arr){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        newArray.push(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        newArray.push(arr[i]);
    }
    return newArray;
}

const arr=[1,2,3,4,6];
console.log(conacataion(arr));