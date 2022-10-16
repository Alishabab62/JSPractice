function capitalWord(str,wordCount){
     let splitString=str.split(" ");
   splitString1=splitString[wordCount].toUpperCase();
  
   var replace= str.replace(splitString[wordCount],splitString1);
    console.log(replace);
    }

    capitalWord("air campus good",2);
    