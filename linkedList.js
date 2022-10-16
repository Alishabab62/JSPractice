//             //We are creating Nodes.
// function newNode(value){
//     this.data=value;
//     this.next=null;
//     return this;
// }


//         //We are creating Linked List with nodes.
// function createLinkedList(head,node){
//     if(head==null){
//         head=node;
//     }else{
//         let temp=head;
//         while(temp.next !=null){
//             temp=temp.next;
//         }
//         temp.next=node;
//     }
// }


//         //We are creating nodes with the value.
// let head=null;
// function insert(){
//     for(let i=0;i<=5;i++){
//     let value=2*i;
//     let node=newNode(value);
//     // console.log(node.data);
//     createLinkedList(head,node)
//     }
// }
// console.log(head.next.data)
// insert();


//         //Size of Node

// function sizeOfLinkedList(head){
//         var size=0;
//         let temp=head;
//         while(temp  !=null){
//             size++;
//             temp=temp.next;
//         }
    
//     return size;
// }   
// console.log(sizeOfLinkedList(head));

let list={
    value:1,
    next:{
        value :2,
        next :{
            value :3,
            next:{
                value:4,
                next :{
                    value:5,
                    next :{
                        value:6,
                        next :{
                            value:7,
                            next:{
                                value:8,
                                next:null
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log("Heelo");

// console.log(list)
// let cur=list;
// while(cur !=null){
//     cur.value+=1;
//     cur=cur.next;
// }

// console.log(list);

console.log(list);
let cur=list;
while(cur!==null){
    if(cur.value%2===0){
        cur.value=cur.value*2;
    }else{
        cur.value=cur.value*3;
    }
    cur=cur.next;
}

console.log(list);




