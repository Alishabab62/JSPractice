let obj = {
    "ABC": 77,
    "HIJ": 57,
    "EFG": 69,
    "KLM": 79,
    "NOP": 89
}
function winner(obj){
let value = [] ,  points = 0
for(let key in obj){
    if(obj[key]>=85){
        value.push("Prize");
    }else if(obj[key]>=75 && obj[key]<85){
        value.push("Gift");
    }else{
    value.push("Not Eligible")
    }
}
return value;
}
console.log(winner(obj));