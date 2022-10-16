function decimalToHexadecimal(decimal){
    var array = [];
    while (Math.floor(decimal / 10) != 0) {
        let remainder = decimal % 16;
        decimal = Math.floor(decimal / 16);
        array.push(remainder);
         }
        array.reverse();
        let result = array.join('');
        return  decimal+result;
        }
    
    console.log(decimalToHexadecimal(10001));