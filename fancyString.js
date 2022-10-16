var makeFancyString = function(str) {
    let stack=[];
for(let i=0;i<str.length;i++){
    if(stack[stack.length-1]==str[i] && stack[stack.length-2]==str[i]){
        continue;
    }
    else{
        stack.push(str[i]);
    }
}
return stack.join('');
};

console.log(makeFancyString("aabdhshshshehshshhshssssrresssseee"));