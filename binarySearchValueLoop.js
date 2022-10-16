function rySearchValueFromArray(arr,value){
    let left=0;
    let right=arr.length;
    while(left<=right){
    let mid=left+Math.floor((right-left)/2);
    if(arr[mid]==value){
            return mid;
        }
        if(arr[mid]<value){
            left=mid+1
        }
        else{
            right=mid;
        }
    }
}
console.log(rySearchValueFromArray([0,1,2,3,4,5],5));


