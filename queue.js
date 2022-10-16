queue=[];
size=4;

function insert(num){
    if(queue.length>=size){
        console.log("Queue Is Full");
        return;
    }
    else{
        queue.push(num);
    }
}


function delFromQueue(){
    if(queue.length==0){
        console.log("Queue is empty");
        return;
    }
    else{
        queue.shift();
    }
}

function getTop(){
    if(queue.length==0){
        console.log("Queue is empty");
    }
    else{
        console.log(queue[0]);
    }
}


function printQueue(){
    if(queue.length==0){
        return;
    }else{
        console.log(queue);
    }
}


insert(4);
insert(5);
insert(1);
insert(3);
getTop();
insert(6);
insert(7);
insert(9);
insert(3);
insert(2);
printQueue();
delFromQueue();
delFromQueue();
delFromQueue();
delFromQueue();
delFromQueue();
delFromQueue();
delFromQueue();

