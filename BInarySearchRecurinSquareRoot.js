function squareRootRecursion(left,number){
    // left=1;
    let mid=left+Math.floor((number-left)/2);
    console.log(mid);
    if(mid*mid==number){
        return mid;
    }
    if(mid*mid>=number){
        return squareRootRecursion(left,mid);
    }
    else{
        return squareRootRecursion(mid+1,number);
    }
}
console.log(squareRootRecursion(1,9));