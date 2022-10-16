function anagram(str1,str2){
   var string1=str1.toUpperCase();
   var string2 =str2.toUpperCase();
    var str1Array=[],str2Array=[];
        for(let i=0;i<string1.length;i++){
            str1Array.push(string1[i]);
        }
        //console.log(str1Array);
        for(let i=0;i<string2.length;i++){
            str2Array.push(string2[i]);
        }
        //console.log(str2Array);
       let stri1= str1Array.sort().join('');
      let stri2= str2Array.sort().join('');
        if(stri1==stri2){
            return "Anagram";
        }
        else{
            return "Not Anagram";
        }
        
}
console.log(anagram("hEart","Earth"));