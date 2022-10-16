let height=6;
let space=height-1;
let str="";
let star=1;
for(let i=1;i<=height;i++){
    for(let j=1;j<=space;j++){
        str=str+" "
    }
    for(let k=1;k<=star;k++){
        str=str+"*"
    }
    str=str+"\n"
    space=space-1;
    star=star+2;

}
console.log(str)