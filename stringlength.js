function checkLength(x,y){
    if(x.length==y.length){
        return y+x;
    }
    else{
        return "length is not same";
    }
}
console.log(checkLength("ac","xyz"));