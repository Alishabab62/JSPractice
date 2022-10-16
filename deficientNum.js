function deficientNUm(num) {
    var array = [];
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            array.push(i);
        }
    }

    var sum = 0;
    for (var j = 0; j < array.length; j++) {
        sum = sum + array[j];
    }

    if (sum < (num * 2)) {            //for not deficeint the sum of factors should be large than twice of num
        return "Deficient";
    }
    else {
        return "Not Deficient";
    }
}
console.log(deficientNUm(30));