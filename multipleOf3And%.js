function multipleof3and5(num){
    for(var i=1;i<=num;i++){
        if(i%3==0){
            console.log("Fizz");
        }
         if(i%5==0){
            console.log("Buzz");
        }
        if(i%3==0&&i%5==0){
            console.log("FizzBuzz");
        }
    }
}
multipleof3and5(100);