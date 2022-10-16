function factorsSum(num) {
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
    return sum;
}
console.log(factorsSum(100));