let heigth=5;
var str="";
let star=1;
let space=(heigth-1)/2;         //space=2 ->1->0
for(let i=1;i<=heigth;i++){     //1 ->2->3->4->5->6->false

    for(let i=1;i<=space;i++){
        str=str+" ";              //str=str+"  " ->"  " || str=str+" "->" " || str=str+" "->" " || str=str+"   "
    }
    for(let j=1;j<=star;j++){
        str=str+"*";            //str=str+"*" ->"  *"   || str=str+"***" -> " ***" || str=str+"*****" ->"*****" || str=str+"***" || str=str+"*"
    }
    if(i <= heigth/2){              //i<=2.5->true || 2<=2.5 ->true || 3<=2.5 ->false || 4<=2.5->flase
        space = space - 1;          //2->1->0
        star = star + 2;            //1->3->5
        }
    else{
        star=star-2;                //5->3->1
        space=space+1;              //0->1->3
    }
    str=str+"\n";
    

}
console.log(str)
/*
  *
 ***
*****
 ***
  *

 */


/*  
    *
   ***
  *****
 *******
  *****
   ***
    *
    */