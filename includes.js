function includes(arr,serchValue,start){
    // let flag=false;
    if(start==undefined){
        start=0;
    }
    for(let i=start;i<arr.length;i++){
        if(arr[i]==serchValue){
            // flag=true;
            return true;
        }
    }
    return false;
    // if(flag){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}
console.log(includes([1,2,3,4,5,6],4,10));