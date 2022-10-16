function findFunc(num){
    return num%2==0;
}

function find(arr,func){
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}


console.log(find([1,1,3,4,5,6],findFunc));