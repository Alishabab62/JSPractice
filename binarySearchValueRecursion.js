function binarySearchValueFromArray(arr,value,left,right){
    let mid=left+Math.floor((right-left)/2);
    if(arr[mid]==value){
        return mid;
    }
    if(arr[mid]<value){
        // left=mid+1;
    return binarySearchValueFromArray(arr,value,mid+1,right);
    }
    else{
        // right=mid;
    return binarySearchValueFromArray(arr,value,left,mid);
    }
    
}
console.log(binarySearchValueFromArray([0,1,2,3,4,5,6,7],1,0,2));