function sinSeries(term){
    var j=term*10;
   var sum=0;
    for(var i=10;i<=j;i=i+10){
    sum=sum+Math.sin(2*i);
    
}
return sum;
}
console.log(sinSeries(6));

