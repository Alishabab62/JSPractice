function counting1s(arr){
    let left=0;
    let right=arr.length-1;
    let count=arr.length;
    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(arr[mid]==1){
            count=mid;
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return arr.length - count;
}


console.log(counting1s([0,0,0])); 


// function CountOfOnes(arr) {
//     var start = 0;
//     var end = arr.length - 1;
//     var indexOfFirst1 = arr.length;

//     while(start <= end) {
//         var mid = start + Math.floor((end - start)/2);

//         if(arr[mid] == 1) {
//             indexOfFirst1 = mid;
//             end = mid-1;
//         } else {
//             start = mid+1;
//         }
//     }

//     var count = arr.length - indexOfFirst1;
//     return count;
// }

// console.log(CountOfOnes([0,0,0,1,1,1]))
