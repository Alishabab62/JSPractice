function reverse(arr){
    let newArr=[],j=0;
    for(let i=arr.length-1;i>=0;i--){
        //  newArr.push(arr[i]);
        newArr[j++]=arr[i];
    }
    return newArr;
}

console.log(reverse([1,4,2,5,56,36,56,3,563,42]));