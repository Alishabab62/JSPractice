let heigth=3;
var a=1,b=1         //a=1,2,3
                    //b=1,2,3,5
for(let i=1;i<=heigth;i++){  //i=1 ,2,3
    let str="";
    for(let j=1;j<=i;j++){
        str=str+a+" ";     //str=1 || str=1 2 || str=3,5,8
        
        c=a+b;              //2,3,5,8
        a=b;                //1,2,3
        b=c                 //2,3,5

    }
    console.log(str)      
}



