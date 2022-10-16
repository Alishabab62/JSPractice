function twoDice(dice1,dice2){
    var dice1=Math.floor(Math.random()*6+1);
    var dice2=Math.floor(Math.random()*6+1);
    return ` You rolled a ${dice1} and a ${dice2} and they sum to ${dice1+dice2}`
}
console.log(twoDice());