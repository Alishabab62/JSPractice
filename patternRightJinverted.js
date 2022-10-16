let height=5;
let str="";
let k=height;
for(let i=1;i<=height;i++){
    for(let j=1;j<=k;j++){
        str=str+j
    }
    str=str+"\n";
    k--;
}
console.log(str)