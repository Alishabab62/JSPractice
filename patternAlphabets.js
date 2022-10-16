let height=5;
let str="";

for(let i=1;i<=height;i++){
    let k=65;
    for(let j=1;j<=i;j++){
        let text=String.fromCharCode(k);
        str=str+text;
        k++;
    }
    str=str+"\n"
}
console.log(str)
