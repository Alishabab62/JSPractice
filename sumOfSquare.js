function sumOfSquare(num){
    let lastDigit=num%10;
    let s_d=Math.floor(num/10);
    let secondDigit=s_d%10;
    let t_d=Math.floor(num/100);
    let thirdDigit=t_d%10;
    let sumOfSquare=(lastDigit**2)+(secondDigit**2)+(thirdDigit**2);
    return sumOfSquare;
}
console.log(sumOfSquare(123));