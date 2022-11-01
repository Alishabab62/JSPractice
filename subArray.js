function subArray(arr){
    let sum=0;
    for(let start=0;start<arr.length;start++){
        let tempArr=[];
        for(let end=start;end<arr.length;end++){
            tempArr.push(arr[end]);
            // console.log(tempArr);
            if(tempArr.length%2==1){
                for(let i=0;i<tempArr.length;i++){
                    sum+=tempArr[i];
                }
            }
        }
    }
    console.log(sum);
}
subArray([1,4,2,5,3]);