var moveZeroes=function(arr){
    let i=0;
    while(i<arr.length){
        if(arr[i]!=0){
            
        }
        else{
            let k=0;
            let j=k;
            while(j<arr.length){
                if(arr[j]!=0){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                    k=j;
                
                }
                j++;
                
            }
        }
        i++
    }
    return arr;
}

console.log(moveZeroes([0,3,4,2,0,5,2,4,0,6,3,6,444,0,5,0,8,0,7,0,7,0,44556,0]));