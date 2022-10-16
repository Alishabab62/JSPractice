function sumOfCube(num){
    var sum=0;
    for(var i=1;i<=num;i++){
        sum=sum+i**3;
    }
    //sum=(num*(num+1)/2)**2;
    return sum;
}
console.log(sumOfCube(10));