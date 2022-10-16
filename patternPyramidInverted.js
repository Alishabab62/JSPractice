let str="";
let height=5;
let space=0;
let star=(2*height)-1
for(let i=1;i<=height;i++){
    for(let j=1;j<=space;j++){
        str=str+" "
    }
    for(let k=1;k<=star;k++){
        str=str+"*"
    }
    for(let m=1;m<=space;m++){
        str=str+" "
    }
    star=star-2;
    space=space+1
    str=str+"\n"

}
console.log(str)