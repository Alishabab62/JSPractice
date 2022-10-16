let str="";
let height=9;
let star=1;
for(let i=1;i<=height;i++){
    for(let j=1;j<=star;j++){
        str=str+"*"
    }
    if(i<=(height/2)){
        star=star+1;
    }
    else{
        star=star-1;
    }
    str=str+"\n"
}
console.log(str)