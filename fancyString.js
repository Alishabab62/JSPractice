// var makeFancyString = function(str) {
//     let stack=[];
// for(let i=0;i<str.length;i++){
//     if(stack[stack.length-1]==str[i] && stack[stack.length-2]==str[i]){
//         continue;
//     }
//     else{
//         stack.push(str[i]);
//     }
// }
// return stack.join('');
// };

// console.log(makeFancyString("aabdhshshshehshshhshssssrresssseee"));
var makeFancyString = function(s) {
    if(s.length <=2) return s
    let arr=[s[0],s[1]]
    for(let i=2;i<s.length;i++){
        if(arr[arr.length-1]!=s[i] || arr[arr.length-2]!=s[i]){
            arr.push(s[i])
        }
    }
    return arr.join('');
};

console.log(makeFancyString("aabccsss"));
