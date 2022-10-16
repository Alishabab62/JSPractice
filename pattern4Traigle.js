let str="";
let height=11;
let space=height-1;
let star=1;
for(let i=1;i<=height;i++){
    for(let j=1;j<=star;j++){
        str=str+"*"
    }
    for(let k=1;k<=space;k++){
        str=str+" "
    }
    for(let l=1;l<=star;l++){
        str=str+"*";
    }
    if(i<(height/2)){
        space=space-2;
        star=star+1;
    }
    else{
        space=space+2;
        star=star-1;
    }
    str=str+"\n"
}
console.log(str);