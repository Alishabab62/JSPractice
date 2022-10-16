function simplecalculator(num1,num2,operation){
    switch(operation){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        case "%":
        return num1%num2;
        break;
    }
}
console.log(simplecalculator(5,4,""))