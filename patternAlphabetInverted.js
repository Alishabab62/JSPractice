let height=5;
let str="";
charCode=65;
let k=height;
for(let i=1;i<=height;i++){
    for(let j=k;j>=1;j--){
        let text=String.fromCharCode(charCode);
        str=str+text;
        charCode++;
    }
    k--;
    charCode=65;
    str=str+"\n"
}
console.log(str);

//11,21,22,23