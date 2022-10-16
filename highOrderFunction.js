function highOrderFunction(num,dis,kuch){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    // display(fact);     //we can also call without passing in function parameter
    dis(fact);
    kuch();
}

// function display(num,kuchbhi){
//     console.log(num);
//     //kuchbhi();            //we can't call a function in call back

// }


// function kuchbhi(){
//     console.log("kuchbhi");
// }

// highOrderFunction(5,display,kuchbhi);
// highOrderFunction(5, display,kuc=()=>{
//     console.log("kuch Bhi");
// }
// )

highOrderFunction(5,display=(num)=>{
    console.log(num);
},
kuch=()=>{
    console.log("kuch bhi")
}
)
