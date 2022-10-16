function maxlength(str){
    let maxlength=0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str[i].length;j++){
            if(maxlength<=str[i].length);
            maxlength=str[i].length;
            }
    }
    return maxlength;
}

console.log(maxlength(["alice and", "i think so", "this is great than"]));



// create table empProject(empId number(5) foreign key references employee number(5),projectID varchar(15) foreign key references project varchar2(5),clinetId varchar2(5) foreign key references clinetTable,startyear number(10),endYear number(10));