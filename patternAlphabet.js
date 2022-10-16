let height=5;
let str="";
charCode=65;
for(let i=1;i<=height;i++){
    for(let j=1;j<=i;j++){
        let text=String.fromCharCode(charCode);
        str=str+text
    }
    charCode++;
    str=str+"\n"
}
console.log(str);