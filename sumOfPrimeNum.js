function sumOfPrime(num) {          ///333
    let sum = 0;
    while (num != 0) {
        let flag=true                          //this loop is for acessing each digit
       let remainder = num % 10;           //3
        //console.log(remainder);
        for (var i = 2; i < remainder; i++) {          //
            if (remainder % i == 0) {
                flag=false;
                break;                            //this condition is checking for how many factors have
            }
        }
        if (flag) {                              // a prime no consists only two factor in case of prime count value should be 2;
            sum = sum + remainder;  //3
        }
        num = Math.floor(num / 10);     //33
    }
    return sum;
}
console.log(sumOfPrime(333));
