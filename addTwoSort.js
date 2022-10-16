function mergerSort(arr,arr1){
    let newArray=arr.concat(arr1);
    for(let i=0;i<newArray.length;i++){
        let j=i;
        while(j>0 && newArray[j]<newArray[j-1]){
            let temp=newArray[j];
            newArray[j]=newArray[j-1];
            newArray[j-1]=temp;
            j--;
        }
    }
    return newArray;
}


console.log(mergerSort([1,3,5],[2,4,6]))