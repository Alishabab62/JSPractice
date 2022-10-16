function sortingBinary(binaryArray){
    for(let i=0;i<binaryArray.length;i++){
    for(let j=i+1;j<binaryArray.length;j++){
        if(binaryArray[i]>binaryArray[j]){      
            temp=binaryArray[i];
            binaryArray[i]=binaryArray[j];
            binaryArray[j]=temp;
        }
    }
    }
return binaryArray;
}
console.log(sortingBinary([1,1,1,1,0,0,0,0,0,0,1]));

