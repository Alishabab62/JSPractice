let height=4;
let str="";
let space=height-1;
let charCode=65;
let loop=1;
for(let i=1;i<=height;i++){
    for(let j=1;j<=space;j++){
        str=str+" "
    }
    for(let k=1;k<=loop;k++){
        let text=String.fromCharCode(charCode)
        str=str+text;
        if((loop/2)>=k){
            charCode++
        }
        else{
            
            charCode--
        }
    }
    charCode=65
    str=str+"\n"
    loop=loop+2;
    space--
}
console.log(str)