let stack=[];
size=4;
function insert(num){
    if(stack.length>=size){
        console.log("Stack Is Full");
        return;
    }
    else{
        stack.push(num);
    }
}


function delFromStack () {
    if(stack.length==0){
        console.log("Stack is empty");
        return;
    }else{
        stack.pop();
    }
}

function topElement(){
    if(stack.length==0){
        console.log("Stack is Empty");
    }
    else{
        console.log(stack[stack.length-1]);
    }
}

function printstack(){
    console.log(stack);
}

insert(5);
insert(6);
insert(7);
delFromStack();
insert(8);
topElement()
delFromStack();
insert(9);
insert(0);
insert(19);
printstack();
delFromStack();
delFromStack();
delFromStack();
delFromStack();
delFromStack();
delFromStack();
