let str="";
let height=10;
let space=0;
let star=5;
for(let i=1;i<=height;i++){
    for(let j=1;j<=star;j++){
        str=str+"*";
    }
    for(let k=1;k<=space;k++){
        str=str+" "
    }
    for(let l=1;l<=star;l++){
        str=str+"*";
    }
    if(i<(height/2)){
        space=space+2;    //i=1 =2  2=4 3=6  4=8
        star=star-1;
    }
    else if(i==5){
        space=space;
        star=star
    }
    else{
        space=space-2;
        star=star+1;
    }
    str=str+"\n";
}
console.log(str)