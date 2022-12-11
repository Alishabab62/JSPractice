function mergeArray(arr1,arr2){
    let i=0,j=0;
    let sortedArrray=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            sortedArrray.push(arr1[i]);
            i++;
        }else{
            sortedArrray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        sortedArrray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        sortedArrray.push(arr2[j]);
        j++;
    }
    return sortedArrray;
}


console.log(mergeArray([1,2,3,0,0,0],[2,5,6]));