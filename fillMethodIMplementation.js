function fillmethod(arr,value,start,end){
    if(start==undefined){
        start=0;
    }
    if(end==undefined){
        end=arr.length;
    }
    for(let i=start;i<=end;i++){
        arr[i]=value;
    }
    return arr;
}
console.log(fillmethod([1,2,3,4,7,6],5));