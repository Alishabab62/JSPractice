let height=4;
let str="";
let space=(2*height)-2;
for(let i=1;i<=height;i++){
    for(let j=1;j<=i;j++){
        str=str+j;
    }
    for(let k=1;k<=space;k++){
        str=str+" "
    }
    let n=i;
    for(let l=1;l<=i;l++){
        str=str+n;
        n--
    }
    str=str+"\n"
    space=space-2
}
console.log(str)