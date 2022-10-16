function checkVowel(c){
    c=c.toUpperCase();
    if(c=="A"|| c=="E" || c=="I" || c=="O" || c=="U"){
        return "Yes Vowel";
    }
    else{
        return "Character is not vowel";
    }
}
console.log(checkVowel("i"));