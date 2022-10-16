function BinarySearchSquareRoot(number){
    let left=1;
    let right=number;
    if(number==0){
        return 0;
    }
    while(left<=right){
    let mid=left+Math.floor((right-left)/2);
    if(mid*mid==number){
        return mid;
    }
    if(mid*mid<number){
        left=mid+1;
    }
    else{
        right=mid;
    }
}
    }
    console.log(BinarySearchSquareRoot(729));