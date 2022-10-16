function lcmMoreThanTwoNuber(num1, num2, num3, num4, num5) {
    var array = [];
    array.push(num1, num2, num3, num4, num5);
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    while(true){
        if(array[0]%num1==0 && array[0]%num2==0 && array[0]%num3==0 && array[0]%num4==0 && array[0]%num5==0){     //max=5=false,6=false,7=false,8=false,9=false,10=true
            return array[0];
            }
        array[0]++
    }
}
console.log(lcmMoreThanTwoNuber(1,2,3,17,5));