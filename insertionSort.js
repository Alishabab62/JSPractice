function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let cur=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>cur){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=cur;
    }
    return arr;
}
const arr=[3,4,2,5,3,6,455,33,55,466,466,322,1,224,55,3,863];
console.log(insertionSort(arr));    