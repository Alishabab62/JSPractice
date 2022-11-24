let str="Wai)sh4";
let upperCase=/[A-Z]/;
let lowerCase=/[a-z]/;
let number=/[0-9]/;
let specail=/[! @ # $ % ^ & * ( ) _ ]/;

let lowerCaseresult=lowerCase.test(str);
let upperCaseresult=upperCase.test(str);
let numberresult=number.test(str);
let specailresult=specail.test(str);



if(!(lowerCaseresult)){
    console.log("Enter atleast onelowercase");
}

if(!(upperCaseresult)){
    console.log("Enter atleast oneuppercase");
}

if(!(numberresult)){
    console.log("Enter atleast number");
}

if(!(specailresult)){
    console.log("Enter atleast special character");
}