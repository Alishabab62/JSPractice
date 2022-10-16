function divisibleBy3And4SWitchCase(num){
    let bool= num%3==0 && num%4==0 ? true : false;
    switch (bool){
        case true:
            return ("Yes");
        case false:
            return ("False");
    }
}
console.log(divisibleBy3And4SWitchCase(25))