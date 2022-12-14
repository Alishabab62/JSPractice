// queue=[];
// size=4;

// function insert(num){
//     if(queue.length>=size){
//         console.log("Queue Is Full");
//         return;
//     }
//     else{
//         queue.push(num);
//     }
// }


// function delFromQueue(){
//     if(queue.length==0){
//         console.log("Queue is empty");
//         return;
//     }
//     else{
//         queue.shift();
//     }
// }

// function getTop(){
//     if(queue.length==0){
//         console.log("Queue is empty");
//     }
//     else{
//         console.log(queue[0]);
//     }
// }


// function printQueue(){
//     if(queue.length==0){
//         return;
//     }else{
//         console.log(queue);
//     }
// }


// insert(4);
// insert(5);
// insert(1);
// insert(3);
// getTop();
// insert(6);
// insert(7);
// insert(9);
// insert(3);
// insert(2);
// printQueue();
// delFromQueue();
// delFromQueue();
// delFromQueue();
// delFromQueue();
// delFromQueue();
// delFromQueue();
// delFromQueue();




// deQueue

// class deQueue{
//     constructor(){
//         this.arr=[]
//     }
//     addStart(a){
//         this.arr.unshift(a);
//     }
//     addRear(a){
//         this.arr.push(a);
//     }
//     removeStart(){
//         this.arr.shift();
//     }
//     removeEnd(){
//         this.arr.pop();
//     }
//     isEmpty(){
//         this.arr.length===0 ? true : false
//     }
//     clear(){
//         this.arr=[];
//     }
// }

// let q=new deQueue();
// q.addStart(4)
// q.addStart(5)
// q.addRear(6)
// console.log(q);







// class Queue{
//     constructor(){
//         this.item=[];
//     }
//     add(a){
//         this.item.push(a);
//     }
//     remove(){
//         this.item.shift();
//     }
//     peek(){
//         return this.item[0];
//     }
//     size(){
//         return this.item.length;
//     }
//     isEmpty(){
//         return this.item.length === 0 ? true : false;
//     }
//     clear(){
//         this.item=[];
//     }
// }

// let q=new Queue();
// q.add(5);
// q.add(6);
// q.add(7);
// q.add(8);
// q.add(9);

// console.log(q.size());
// q.remove();
// q.remove();
// q.remove();
// q.remove();
// q.remove();
// q.remove();

// console.log(q.peek());
// console.log(q.isEmpty());






// var trailingZeroes = function(n){
//     function fact(n){
//         if(n==0){
//             return 1;
//         }
//         return n*fact(n-1);
//     }
//     let res=fact(n);
//     let splitRes=res.toString();
//     let split=splitRes.split('');
//     console.log(split)
//     let count=0;
//     for(let i=0;i<split.length;i++){
//         if(split[i]==0){
//             count++;
//         }
//     }
//     return count;
// };


// console.log(trailingZeroes(6));


