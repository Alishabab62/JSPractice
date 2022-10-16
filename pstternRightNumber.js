let height=5;
let str="";
let count=1;
for(let i=1;i<=height;i++){
    for(let j=1;j<=i;j++){
        str=str+count+" ";
        count++
    }
    str=str+"\n";
}
console.log(str)