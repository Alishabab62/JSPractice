function divisibleBy3And4(){
    for(var i=1;;i++){
        if(i%3==0 && i%4==0){
            console.log(i);
            break;
        }
    }
}
divisibleBy3And4();