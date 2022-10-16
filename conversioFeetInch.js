function conversionInchToFeet(feet,inch){
    var afterConvertInch=feet*12;
    var afterConvertfeet=inch/12;
   let after= Number(afterConvertfeet.toFixed(2));
    return [afterConvertInch,after];
}
console.log(conversionInchToFeet(3,56))