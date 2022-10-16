function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));

}

function merge(a,b){
    let leftIndex=0;
    let rightIndex=0;
    let c=[];
    while(leftIndex<a.length && rightIndex<b.length){
        if(a[leftIndex]<b[rightIndex]){
            c.push(a[leftIndex]);
            leftIndex++;
        }
        else{
            c.push(b[rightIndex]);
            rightIndex++;
        }
    }
    return ([...c ,...a.slice(leftIndex),...b.slice(rightIndex)])
}


const arr=[2,5,3,1,7,9,64,5,64,3,7];
console.log(mergeSort(arr));
