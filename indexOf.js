function indexof(arr,serchValue,start){
    var flag=true;
    if(start==undefined){
        start=0;
    }
    for(let i=start;i<arr.length;i++){
        if(arr[i]==serchValue){
            return i;
            }
        }
    if(flag){
        return -1;
    }
}
console.log(indexof([ 5, 2, 4, 1 ],7))