let str="";
let height=5;
let charCode=69;

for(let i=1;i<=height;i++){
    let newcharcode=charCode
    for(let j=1;j<=i;j++){
        
        let text=String.fromCharCode(newcharcode);
        str=str+text+" ";
        
        newcharcode++;
    }
   charCode--
    str=str+"\n"
}
console.log(str)