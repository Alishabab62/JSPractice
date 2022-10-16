let height=10;
let space=(height-2)/2;
let star=1;
let str=""
for(let i=1;i<=height;i++){
    for(let j=1;j<=space;j++){
        str=str+" "
    }
    for(let k=1;k<=star;k++){
        str=str+"*"
    }
    if(i<(height/2)){
        star=star+2;
        space=space-1
    }
    else if(i==(height/2)){
        stra=star;
        space=space
    }
    else{
        star=star-2;
        space=space+1
    }
    str=str+"\n";
    
   
}
console.log(str)