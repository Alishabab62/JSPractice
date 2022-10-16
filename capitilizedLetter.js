function capitalLetter(str){
    var strSplit=str.split(" ");
    for(var i=0;i<strSplit.length;i++){
    strSplit[i]=  strSplit[i][0].toUpperCase()+strSplit[i].substring(1);
      //console.log(strSplit1);
    }
    console.log(strSplit.join(" "));
}
capitalLetter("air campus");