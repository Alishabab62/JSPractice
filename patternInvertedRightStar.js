let height=5;
let str="";
let k=height;
for(let i=1;i<=height;i++){
    for(let j=k;j>=1;j--){
        str=str+"*";
    }
    str=str+"\n"
    k--
}
console.log(str)