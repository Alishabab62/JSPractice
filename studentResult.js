function studentResult(subjectMarks1,subjectMarks2,subjectMarks3){
        if(33<=((subjectMarks1*100)/100)&&33<=((subjectMarks1*100)/100)&&33<=((subjectMarks1*100)/100)){
                return "Pass";
        }
        else if(40<((subjectMarks1+subjectMarks2+subjectMarks3*100)/300)){
            return "Pass";
        }
        else{
            return "Fail";
        }
}
console.log(studentResult(32,45,67));