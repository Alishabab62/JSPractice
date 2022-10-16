function slice(arr,start,end){
    if(start==undefined){
        start=0;
    }
    if(end==undefined){
        end=arr.length;
    }
    let newArr=[];
    for(let i=start;i<end;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}


console.log(slice([ 5, 2, 4, 1,0 ],1,4))