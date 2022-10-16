function octalToBinary(str) {
    var str = String(str);
    var decimal = 0;
    var res = str.split('').reverse().join('');
    // console.log(res[0],res[1],res[2],res[3])
    for (var i = 0; i < res.length; i++) {
        decimal = decimal + res[i] * (8 ** i);

    }

    
        var array = [];
        while (Math.floor(decimal / 2) != decimal) {
            let rem = decimal % 2;
            decimal = Math.floor(decimal / 2);
            array.push(rem);
        }
        array.reverse();
        let result1 = array.join('');
        return result1;
    }

console.log(octalToBinary(600));