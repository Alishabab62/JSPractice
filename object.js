// let obj1={
//     name:"Shivani",
//     id_no : 22314820 ,
//     course:"Bsc.IT",
//     get_marks: function (){
//         return maths=50;
//     }
// }
// console.log(typeof(obj1))

// console.log(obj1["get_marks"]())
// console.log(obj1["get_marks"]);
// for(let key in obj1){                       //for in loop
//     if(typeof(obj1[key])=='function'){
//         console.log(key ,":",obj1[key]())
//     }else{
//         console.log(key ,":", obj1[key])

//     }
// }

// delete obj1["course"];
// // console.log(obj1)  

// // console.log(obj1["get_marks"]())
// // console.log(obj1["get_marks"]);
// for(let key in obj1){                       //for in loop
//     if(typeof(obj1[key])=='function'){
//         console.log(key ,":",obj1[key]())
//     }else{
//         console.log(key ,":", obj1[key])

//     }
// }

//object.enteries,object.values,object.keys



//commanweleth gold count  niraj chopra renu,mira bau, india pakistan olympic,
// let data=Object.entries(obj1);
// for(let i=0;i<data.length;i++){
//     console.log(data[i])

// }

// let data=Object.entries(obj1);
// for(let [key, value] of data){
//     console.log(key,value)
// }

// let key=Object.keys(obj1);
// let values=Object.values(obj1);
// for(let i=0;i<key.length;i++){
//     console.log(key[i],":",values[i]);
// }

// let obj2;
// obj2=obj1;
// // console.log(obj2);
// obj2["favouriteSubject"]="HTML";
// // console.log(obj2);
// console.log(obj1);



//Deep Copy;

// let deepObj={};
// let keys=Object.keys(obj1);
// let values=Object.values(obj1);
// for(let i=0;i<keys.length;i++){
//     deepObj=[keys,values];
// }
// console.log(deepObj)



//this keyword

// var a="Shivani Chutiya";
// console.log(this.name);


// var array=[1,24,3,4,50];
// function isEven(element){
//     return element%2==0
// }

// let value=array.find(isEven);
// console.log(value);

// console.log(array[array.length-1]);





// let arr=[1,2,3,4,5,6];

// Question:- 
// Implement these functions:

// 1. reverse;
// 2. find;
// 3. includes;
// 4. indexOf;
// 5. slice;

// let arr=    [2,5,1,7,5]  // [1,4,2,5]
// console.log(arr.sort());



//  function pattern (a){
                 
//     var string = ""  
//     for(i=1; i<=a; i++){      
//       for(j=1; j<=a; j++){    
//         string = string + "*" 
//       }
//       string = string + "\n"  
//     }
//     return string
//     }
//     console.log(pattern(6))
    
    // function pattern (a){
    // for(i=1; i<=a; i++){ //1
    // var string = ""  
    //   for(j=1; j<=a; j++){  //  
    //     string += "*" 
    //     }
    // console.log(string)
    // }
    // return string
    // }
    // console.log(pattern(5));
    


//     let obj = {
//         "ABC": 77,
//         "HIJ": 57,
//         "EFG": 69,
//         "KLM": 79,
//         "NOP": 89
//     }
// function winner(obj){
//     let value = [] ,  points = 0
//     for(let key in obj){
//         if(obj[key]>=85){
//             value.push("Prize");
//         }else if(obj[key]>=75 && obj[key]<85){
//             value.push("Gift");
//         }else{
//         value.push("Not Eligible")
//         }
//     }
//     return value;
//     }
//     console.log(winner(obj));



// function binarySearchValueFromArray(arr,value){
//     let left=0;
//     let right=arr.length;
//     while(left<=right){
//     let mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==value){
//             return mid;
//         }
//         if(arr[mid]<value){
//             left=mid+1
//         }
//         else{
//             right=mid;
//         }
//     }
// }
// console.log(binarySearchValueFromArray([0,1,2,3,4,5],5));


// function search(arr, target) {
//     let left=0;
//     let right=arr.length;
//     let flag=true;
//     while(left<right){
//     let mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==target){
//         flag=false;
//         return mid;
//         }
//         else if(arr[mid]>=target){
//             return mid-1;
//         }
//     if(arr[mid]<target){
//         left=mid+1;
//     }
//     else{
//         right=mid-1;
//     }
//     }
//     // if(flag){
//     //     return -1;
//     }
//     // return -1;
// // }
// console.log(search([1,3,5,6],5))

// function sort(arr,arr1){
//     let newArray=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr1.length;j++){
//             if(arr[i]<arr[j]){
//                 newArray.push(arr[i],arr1[j]);
//             }
//             else{
//                 newArray.push(arr[j],arr1[i])
//             }
//         }
//     }
//     return newArray;
// }

// console.log(sort([1,3,5],[2,4,6]));

// https://leetcode.com/problems/search-in-rotated-sorted-array/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// https://leetcode.com/problems/global-and-local-inversions/
// https://onecompiler.com/javascript/3yfwc5ez7
// https://onecompiler.com/javascript/3yfzdah2x
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/


// function mergesort(arr,low,high) {
//     // var low = 0;
//     // var high = arr.length - 1;
//     if (low < high) {
//       mid = Math.floor(low + high) / 2;
//       mergesort(arr, low, mid);
//       mergesort(arr, mid + 1, high);
//       merge(arr, low, mid, high);
//     }
//     return;
  
//   }
  
//   function merge(arr, high, low, mid) {
//     var i = 0;
//     var j = 0;
//     const ansarr = [];
//     while (i < mid && j < high) {
//       if (arr[i] < arr[j]) {
//         ansarr.push(arr[i])
//         i++
//       } else {
//         ansarr.push(arr[j])
//         j++
//       }
//       while (i < mid) {
//         ansarr.push(arr[i])
//         i++
//       }
//       while (j < high) {
//         ansarr.push(arr[j])
//         j++;
//       }
  
//     }
//     return ansarr;
//   }
//   let arr=[2,4,2,6,8,];
//   console.log(merge(arr,0,arr.length-1));
  


// function sorted(arr,target){

//     let left=0;
//     let right=arr.length-1;
//     let mid;
//     while(left<right){
//      mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==target){
//         return mid;
//         }
        
//     if(arr[mid]>target){
//         left=mid+1;
//     }
//     else{
//         right=mid;
//     }
//     }
//     return -1;
// }
// console.log(sorted([4,5,6,7,0,1,2],0));


// console.log(~5);



// function search(arr, target){
//     let left=0;
//     let right=arr.length-1;
//     var firstIndex=0;
//     while(left<right){
//       let mid=left+Math.floor((right-left)/2);
//       if(arr[mid]>=target){
//         right=mid;
//         firstIndex=mid;
//       }else{
//         left=mid+1;
//         // firstIndex=mid;
//         }
//     }
//     return firstIndex;
//   }
//   console.log(search([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],4))



// function lastOccurence(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     var lastIndex=-1;
//     while(left<=right){
//         let mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==target){
//         lastIndex= mid;
//         left=mid+1;
//     }
//         else if(arr[mid]<target){
//                 left=mid+1;
//                 // lastIndex=mid;
//             }
//                 else{
//                     right=mid-1;
//                     // lastIndex=mid;
//                 }
//             }
//         return lastIndex;
// }
// console.log(lastOccurence([1,2,2,3,3,3,3,4,4,4,5,5],7));



// function search(arr, target){
//     let s = 0;
//     let e = arr.length - 1 ;
//     let m = s + Math.floor((e - s) / 2 ) ;
//     let flag = false
//     while(s <= e ) {
//     if(arr[m] == target ) {
//         flag = true ;
//         break ;
//     }
//     else if(arr[m] > target ) {
//         e = m - 1;
//     }
//     else if(arr[m] < target ) {
//         s = m + 1 ;
//     }
//     m = s + Math.floor((e - s) / 2 ) ;
//     }
// if(flag == false ) {
//     return [-1 , -1 ] ;
// }
// function firstOccurence(arr , target ) {
//     let s = 0 ;
//     let e = arr.length - 1 ;
//     let m = s + Math.floor((e - s) / 2 ) ;
//     let first = 0 ;
//     while( s <= e ) {
//     if(arr[m] == target ) {
//         first = m ;
//         e = m - 1 ;
//     }
//     else if(arr[m] > target ) {
//         e = m - 1 ;
//     }
//     else if(arr[m] < target ) {
//         s = m + 1 ;
//     }
//     m = s + Math.floor((e - s) / 2 ) ;
//     }
//     return first ;
// }
// function lasttOccurence(arr , target ) {
//     let s = 0 ;
//     let e = arr.length - 1 ;
//     let m = s + Math.floor((e - s) / 2 ) ;
//     let last = 0 ;
//     while( s <= e ) {
//     if(arr[m] == target ) {
//         last = m ;
//         s = m + 1 ;
//     }
//     else if(arr[m] > target ) {
//         e = m - 1 ;
//     }
//     else if(arr[m] < target ) {
//         s = m + 1 ;
//     }
//     m = s + Math.floor((e - s) / 2 ) ;
//     }
//     return last ;
// }
//     let ans = [firstOccurence(arr , target ) ,lasttOccurence(arr , target ) ] ;
// return ans ;
// }

// console.log(search([1,2,2,3,3,3,3,4,4,4,5,5],3));







// function firstOcuurence(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     var firstIndex=-1;
//     while(left<=right){
//     let mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==target){
//         firstIndex=mid;
//         right=mid-1;
//     }
//     else if(arr[mid]>=target){
//         right=mid-1;
//         }else{
//         left=mid+1;
//         }
//     }
//     return firstIndex;
//     }
// function lastOccurence(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     var lastIndex=-1;
//     while(left<=right){
//         let mid=left+Math.floor((right-left)/2);
//         if(arr[mid]==target){
//         lastIndex= mid;
//         left=mid+1;
//         }
//             else if(arr[mid]<=target){
//                 left=mid+1;
//             }
//                 else{
//                     right=mid-1; 
//                 }
//             }
//         return lastIndex;
// }
// function search(arr, target){
//     let firstIndex=firstOcuurence(arr,target);
//     let lastIndex=lastOccurence(arr,target);
//     return [firstIndex,lastIndex]
// }
//   // console.log(search([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],3))
// exports.search = search;



// function search(arr){
    
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//     let mid=left+Math.floor((right-left)/2);
//     if(mid%2==0 && arr[mid]==arr[mid+1] || mid%2==1 && arr[mid]==arr[mid-1]){
//         left=mid+1;
//     }
//     else{
//         right=mid-1;
//     }
//     }
//     return arr[left];
// }
// console.log(search([1, 1, 2, 2, 3, 3, 4, 4, 5]))
// let arr=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// let spl=arr.split('');
// console.log(spl);

// let arr=[[1,5],[7,3],[3,5]]
// // let spl=arr.split('');
// var maximumWealth = function(accounts) {
//     let wealth=0;
//     for(let i=0;i<accounts.length;i++){
//         console.log(accounts[i])
//         var sum=0;
//         for(let j=0;j<accounts[i].length;j++){
//             console.log(accounts[i][j])
//             sum+=accounts[i][j];
//         }
//         if(wealth<sum){
//             wealth=sum;
//         }
//     }
//     return wealth;
// };
// console.log(maximumWealth(arr))


// var removeDuplicates = function(nums) {
//     let tempArr=[];
//     for(let i=0;i<nums.length;i++){
//             if(nums[i]==nums[i+1]){
//                 continue;
//             }
//             else{
//                 tempArr.push(nums[i]);
//             }
//         }
//     return tempArr;
// };
// const arr=[1,1,2,3,3,4,5,5,5,7,7]
// console.log(removeDuplicates(arr))

// var removeElement = function(nums, val) {
//     let tempArr=[];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==val){
//             continue;
//         }
//         else{
//             tempArr.push(nums[i]);
//         }
//     }
//     return tempArr;
// };

// const arr=[1,2,3,3,3,2,3,1,2,4,5,6,7];
// console.log(removeElement(arr,3))


// var canJump = function(nums) {
//     // let sum=0
//     let len=nums.length;
//     for (let i=0;i<nums.length;){
//         if(i==nums.len){
//                 return true;
//         }
//         else{
//             i+=nums[i];
//         }
//     }
//     return false;
// };

// console.log(canJump([3,2,1,0,4]))


// var missingNumber = function(nums) {
//     let soretdArr=nums.sort((a,b)=> {return a-b});
//     console.log(soretdArr)
// for(let i=0;i<=soretdArr.length;i++){
//     if(soretdArr[i+1]!=soretdArr[i]+1){
//     return  soretdArr[i]+1;
//     }
// }
 
// };

// console.log(missingNumber([0,1]))

// var smallestEvenMultiple = function(n) {
//     let num=2;
//     let a=Math.max(n,num);
//     // console.log(a)
//     while(true){
//         if(a%n==0 && a%num==0){
//             return a;
//         }
//         a++;
//     }
    
//     // return n;
// };

// console.log(smallestEvenMultiple(5));


// let a=Math.max(2,5)
// console.log(3%1)


// var subtractProductAndSum = function(n) {
//     let mul=1;
//     let num=n
//     while(n!=0){
//         let rem=n%10;
//         mul*=rem;
//         n=Math.floor(n/10);
//     }
//     console.log(mul)
//     let sum=0
//         while(num!=0){
//         let rem=num%10;
//         sum+=rem
//         num=Math.floor(num/10);
//     }
//     console.log(sum)

//     let res=mul-sum
//     return res;
// };

// console.log(subtractProductAndSum(234));

// let arr=[1,2,3,4,5,6,3,2,53,6,4];
// console.log(arr.subarray(1,3));

// var i = 0, j = 1;
//     while(j < arr.length) {
//         if(arr[i] == arr[j]) {
//             j++;
//         } else {
//             arr[i+1] = arr[j];
//             i++;
//             j++;
//         }
//     }
    
//     return i+1;

// var removeElement = function(nums, val) {
//     let i=0,j=1;
//     while(i<nums.length && j<nums.length){
//         if(nums[i]==val){
//             nums[i]=nums[j+1];
//             j++;
//         }else{
//             i++;
//             j++
//         }
//     }
//     return nums;
// };
// //[0,1,4,0,3] -Ex
// //[0,1,3,4,3,0]
// console.log(removeElement([0,1,2,2,3,0,4,2]
//     ,2))


// var moveZeroes = function(nums) {
//     let i=0;
//     while(i<nums.length){
//             if(nums[i]==0){
//                 nums[i+1]=nums[i];
                
//                 }
//                 i++;
//     }
//     return nums
// };

// console.log(moveZeroes([0,1,0,3,12]))



// var moveZeroes=function(arr){
//     let i=0,j=0;
//     while(j<arr.length){
//         if(arr[j]==0){
//             j++;
//         }
//         else{
//             let temp=arr[j]
//             arr[j]=arr[i];
//             arr[i]=temp;
//             i++;
//             j++;
//         }
//     }
//         return arr;
// }

// console.log(moveZeroes([
//     0, 3,     4, 2, 0,
//     5, 2,     4, 0, 6,
//     3, 6,   444, 0, 5,
//     0, 8,     0, 7, 0,
//     7, 0, 44556, 0
//   ]));

// var findDuplicates = function(nums) {
//    nums.sort((a,b)=>{return a-b});
//     // return nums;
//     let tempArray=[];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==nums[i+1]){
//             tempArray.push(nums[i]);
//         }
//     }
//     return tempArray;
//     let obj={};
//     for(let i=0;i<nums.length;i++){
//         if(obj[nums[i]]==undefined){
//             obj[nums[i]]=1;
//         }
//         else{
//             obj[nums[i]]++;
//         }
//     }
//     let tempArray=[];
// for(let key in obj){
//     if(obj[key]==2){
//         let num=Number(key)
//         tempArray.push(num);
//     }
// }
// return tempArray;
// };

// console.log(findDuplicates([4,3,2,7,8,2,3,1]))


// var threeSum = function(nums) {
//     let tempArr=[]
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             for(let k=i+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]==0 && i!=j && i!=k && j!=k){
//                     tempArr.push([nums[i],nums[j],nums[k]]);
//                 }
//             }
//         }
//     }
//     return tempArr;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));


// var removeElement = function(nums, val) {
    // let i=0,j=0;
    // while(i<nums.length && j<nums.length){
    //     if(nums[j]==val){
    //         // i++
    //         j++
    //     }
    //     else{
    //         let temp=nums[i];
    //         nums[i]=nums[j];
    //         nums[j]=temp;
    //         i++;
    //         j++;
    //     }
    // }
    // console.log(nums)
    // return i;
// };

// console.log(removeElement( [3,2,2,3],3));


// var thirdMax = function(nums) {
//     let max=0,count=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[max]<=nums[i]){
//             max=i;
//             count++;
//             if(count>=3){
//                 break;
//             }
//         }
//         else if(nums[i]==nums[i+1]){
//             let sum=nums[i]+nums[i+1];
//             if(sum>=nums[max]){
//                 max=i;
//                 count++
//             }
//         }
//     }
//     return max;
// };

// console.log(thirdMax([1,0,2,6,3,6]))

// let m=5,n=4;
// for(let i=1;i<=n;i++){
//       let str="";
//     for(let j=1;j<=m;j++){
//         if(i==1 && j<=5 || i==4 && j<=5 || i+1<=3 && j ){
//             str+="*";
//         }else{
//             str+=" ";
//         }
        
//     }
//     console.log(str);
// }


// var lemonadeChange = function(bills) {
//     let fiveBill=0,tenBills=0;
//     for(let i=0;i<bills.length;i++){
//         if(bills[i]==5){
//             fiveBill++;
//         }
//         else if(bills[i]==10){
//             tenBills++;
//             fiveBill--
        
//         }
//         else if(bills[i]==20){
//             if(tenBills>0){
//                 tenBills--;
//                 fiveBill--
//             }else{
//                 fiveBill-=3;
//             }
//         }
//         // else{
//         //     fiveBill-=3;
//         // }
//         if(fiveBill<0 ){
//             return false;
//         }
//     }
//     return true;
// };


// console.log(lemonadeChange([5,5,10,10,20]))

// var findPoisonedDuration = function(timeSeries, duration) {
//     let seconds=0;
//     for(let i=0;i<timeSeries.length;i++){
//         seconds+=(duration-1);
//         if(seconds>=timeSeries[i+1]){
            
//         }
//     }
//     return seconds;
// };

// console.log(findPoisonedDuration([1,4],2));

// var isPalindrome = function(x) {
//     let temp=x;
//     let rev=0;
//     while(x>0){
//         let rem=x%10;
//             rev=rev*10+rem;
//             x=Math.floor(x/10);
//     }
//     if(rev==temp){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// console.log(isPalindrome(-121))


// let perfectNumber=function(num){
//     var sum=0;
//         for(let i=1;i<num;i++){
//         if(num%i==0){
//             console.log(i)
//             sum+=i;
            
//         }
//     }
//     if(sum==num){
//                 return true;
//             }
//     return false;
// }

// console.log(perfectNumber(12));



// var isPowerOfFour = function(n) {
//     if(n==1){
//         return 1;
//     }
//     for(let i=1;i<=Math.floor(n/4);i++){
//             // console.log(i)
//             if(n==4**i){
                
//                 // return true;
//                 console.log(i)
                
//             }
//         }
//     return false;

// };

// console.log(isPowerOfFour(387420488))


// var countNumbersWithUniqueDigits = function(n) {
//     let count=0;
//     for(let i=0;i<Math.pow(10,n);i++){
//         let str=String(i);
//         // console.log(typeof(str))
//         for(let j=1;j<str.length;j++){
//             console.log(str[0],str[j] +"H")
//             if(str[0]!=str[j]){
//                 count++;
//                 break;
//             }
//         }
// }
// return count;
// };


// console.log(countNumbersWithUniqueDigits(3));



//     var maxArea = function(height){
//         var max=0;
//         for(let i=0;i<height.length;i++){
//             // console.log(i);
//             for(let j=height.length-1;j>=0;j--){
//                 // console.log(j);
//                 if((height[i] * j)>max){
//                     max=(height[i]*j);
//                 }
//                 else if((height[i]*height[j])>max){
//                     max=(height[i]*height[j]);
//                 }
//             }
//         }
//         return max;
// };

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// arr=[1,8,6,2,5,4,8,3,7,3]
// for(let j=arr.length-1;j>=0;j--){
//     console.log(arr[j]);
// }



// let list={
//     value:1,
//     next:{
//         value :2,
//         next :{
//             value :3,
//             next:{
//                 value:4,
//                 next :{
//                     value:5,
//                     next :{
//                         value:6,
//                         next :{
//                             value:7,
//                             next:{
//                                 value:8,
//                                 next:null
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// // console.log(list)
// // let cur=list;
// // while(cur !=null){
// //     cur.value+=1;
// //     cur=cur.next;
// // }

// // console.log(list);

// console.log(list);
// let cur=list;
// while(cur!==null){
//     if(cur.value%2===0){
//         cur.value=cur.value*2;
//     }else{
//         cur.value=cur.value*3;
//     }
//     cur=cur.next;
// }

// console.log(list);




// let stri="";
// for(let i=0;i<str.length;i++){
    //     if(stri[stri.length-1]==str[i] &&stri[stri.length-2]==str[i]){
        //         continue;
        //     }else{
            //         stri+=str[i]
            //     }
            // }
            // console.log(stri);
            


//

// function subArray(arr){
//     let count=0;
//     for(let start=0;start<arr.length;start++){
//         let tempArr=[];
//         for(let end=start;end<arr.length;end++){
//             tempArr.push(arr[end]);
//             console.log(tempArr);
//             }
//         }
    
//     console.log(sum);
// }
// subArray([1,4,2,5,3]);
            

// var firstUniqChar = function(s) {

// var flag=true;
//     for(let i=0;i<s.length;i++){
//         for(let j=1;j<s.length;j++){
//             if(s[i]==s[j] && i!=j){    //l
//                 flag=false;
//             }
//         }
//         if(flag==true){
//             return i;
//         }
//     }
//     return -1;
// };

// console.log(firstUniqChar("loveletd"));






// var haveConflict = function(event1, event2) {
//     if(event1[0]>event2[0]){
//        var swap=event2[0];
//         event1[0]=event2[0]
//         event1[0]=swap
//     }else 
//         return event1[0]<=event2[1];
//     
// };

// console.log(haveConflict(["01:00","02:00"],["03:20","00:10"]));



// var isAnagram = function(s, t) {
//     if(s.length!=t.length) return false;
//     let objofS={},objofT={};
//     for(let i=0;i<s.length;i++){
//         let ch=s[i];
//         if(objofS[ch]==undefined){
//             objofS[ch]==1;
//         }
//         else{
//             objofS[chS]++;
//         }
//     }

//     for(let i=0;i<t.length;i++){
//         let ch=t[i];
//         if(objofT[ch]==undefined){
//             objofT[ch]==1;
//         }
//         else{
//             objofT[ch]++;
//         }
//     }
//     for(let key in objofT){
//         if(objofS[key]!=objofT[key]){
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isAnagram("car","rat"))



// function lastName(str){
  
//     for (let i = 0; i < str.length; i++){
//       let last = " ";
//       if(str[i]== " "){
//        return(str.slice(i+1));
//       }
//     }
  
//   return last;
//   }
//   console.log(lastName("Kumar  Singh"));
//   exports.lastName = lastName

// let a=4;
// console.log(typeof(a))

// function numbe(str){
//     let arr=[];
//     for( let i=0;i<str.length;i++){
//         // console.log(typeof(str[i]))
//         if((str[i])<=10){
//             arr.push(str[i]);
//                     }
//     }
//     return arr.join(',');
//   }
//   console.log(numbe('1 January 1970'));
// // //   exports.number = number


// function evenCapital(str){
//     str=str.split(',');
//     for(let i=0;i<str.length;i++){
//         // console.log(str);
//     //   str[i]=str[i][0].toUpperCase();
//       console.log(str[i][0]);
//     }
//     // return str;
//   }
//   console.log(evenCapital("this is aircampus"))

// function strRev(str){
//     let st=str.split('')
//     console.log(st.join(''));
//     for(let i=0;i<st.length;i++){
        
//     st[i]=st[i].split('').reverse().join('');
//     }
//     return str;
//   }
//   console.log(strRev("ABS dgsg"));
//   exports.strRev = strRev


// function biggerElement(arr){
//     let resArr=[],k=0;
//     for(let i=0;i<arr.length;i++){
//         let flag=true;
//         for(let j=i;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 resArr[k++]=arr[j];
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             resArr[k++]=-1;
//         }
//     }
//     return resArr;
// }

// function biggerElement(arr){
//     let flag=true;
//     let stack=[];
//     for(let i=0;i<arr.length;i++){
//         if(stack.length==0){           //[1,3,2,4]
//             stack.push(arr[i]);
//             i++;
//         }
//         if(stack[0]<arr[i]){    //stack=
//             stack.pop()
//             stack.push(arr[i]);   //stack=3
//             flag=false;
//         }
//         if(flag){
//             stack.push(-1);
//         }
//     }
//     return stack;
// }

// console.log(biggerElement([1,3,2,4]));


// var searchRange = function(nums, target) {
//     var left=0;
//     var right=nums.length;
//     let tempArr=[-1,-1];
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);      //2
//         if(nums[mid]==target){
//             tempArr[0]=mid;
//             right=mid;
//         }
//         else if(nums[mid]>=target){
//             right=mid-1;
//         }
//         else{
//             left=mid+1;
//         }
//     }
//     var left=0;
//     var right=nums.length;
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);      //2
//         if(nums[mid]==target){
//             tempArr[1]=mid;
//             left=right;
//         }
//         else if(nums[mid]>=target){
//             right=mid-1;
//         }
//         else{
//             left=mid+1;
//         }
//     }
//     return tempArr;
// };
// console.log(searchRange([5,7,7,8,8,10],8));





//

// let str="coderbyte";
// // let str="I Love Code"
// let ct="j9e01hg5ca";

// let str1=str.toLowerCase();
// let rev=str1.split("").reverse().join(""); 
// console.log(rev);

// let rev1=str.split("").reverse().join("");          //tybrdo        ,do voL I
// console.log(rev1);
// let newStr="",i=0;
// while(i<=rev.length-1){
//     let res=ct.includes(rev[i]);
//     if(!(res)){
//         newStr+=rev1[i];
//     }
//   i++;
// }

// console.log(newStr);






//?? question

// let str="j3ab??cdesfhd?h5";
// for(let i=0;i<str.length-1;i++){
//     let regex=/[0-9]/;
//     let check=regex.test(str[i]);
//     let count=0;
//     if(check){
//         for(let j=i;j<=i+10;j++){
//             if(str[j]=="?"){
//                 count++;
//             }
//         }
//         if(count==3){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
// }






//time conversion


// let min=63;

// let hour=Math.floor(63/60);
// let minute=min-(hour*60);
// console.log(hour+":"+minute);

// console.log(NaN===NaN)


// function abc(count){
//     if(count===0){
//         return;
//     }
//     console.log(count);
//     count--
//     abc(count);
//     console.log(count);
// }
// abc(5)



// class hello{
//     demo(){
//         console.log("hello");
//     }
//     demo2(a,b){
//         return a+b;
//     }
// }

// let obj=new hello();
// obj.demo();
// console.log(obj.demo2(2,3));


// class hello{
//     constructor(name){
//     this.name=name;
//     console.log(this.name);
//     }
//     // demo(name){
//     //     console.log("Hello " +name);
//     // }
// }
// let obj=new hello("Shabab");
// // obj.demo("Shabab");
// console.log(obj)



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


// let arr=[1,2,3,4,5];
// let newArr=[];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr.pop()
// console.log(arr);


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




// function factorial(n){
//     let count=0;
//     for(let i=5;i<=n;i=i+5){
//         let x=i;
//         while(x>0 && x%5==0)
//         {
//             count++;
//             x/=5;
//         }
//     }
//     return count;
// }
// console.log(factorial(30));



// var fractionToDecimal = function(numerator, denominator) {
//     let str="";
//     let q=Math.floor(numerator/denominator);
//     str=str+q;
//     let rem=numerator%denominator;
//     if(rem==0){
//         return str;
//     }else{
//         str=str+".";
//         let map1=new Map();
//         while(rem!=0){
//             if(map1.get(rem)!=undefined){
//                 let len=map1.get(rem);
//                 let arr=str.split('');
//                 arr.splice(len,0,"(");
//                 console.log(arr)
//                 arr.push(")")
//                 str=arr.join('');
//                 break;
//             }
//             else{
//             map1.set(rem,str.length);
//             rem=rem*10;
//             q=Math.floor(rem/denominator);
//             rem=rem%denominator;
//             str=str+q;
//             }
//         }
//     }
//     return str;
// };


// console.log(fractionToDecimal(93,7));



// var myPow = function(x, n) {
//     let count=x;
//     if(n<0){
//         count=(1/(count*x))
//     }
//     for(let i=1;i<n;i++){
//         count=count*x;
//     }
//     return count;
// };

// console.log(myPow(2,-2));

// var isPowerOfTwo = function(n) {
//     if(n==1) return true;
//     if(n==0) return false;
//     // n=Math.abs(n);
//     console.log(n)
//     let res=1;
//     for(let i=1;i<n;i++){
//         res*=2;
//         if(res==n) return true;
//         // if(res>n/2) return false;
//     }
//     return false;
// };
// console.log(isPowerOfTwo(-16));

// var rotate = function(nums, k) {
//     nums.reverse();
//     reverseArray(nums,0,k-1);
//     reverseArray(nums,k,nums.length-1);
//     console.log(nums);
// }
// rotate([1,2,3,4,5,6,7],3);

// function reverseArray(array,low,high){
//     while(low < high){
//         let temp=array[low];
//         array[low]=array[high];
//         array[high]=temp;
//         low++;
//         high--;
//     }
// }

// var isValid = function(s) {
//     let stack=[];
//     let len=stack.length-1;
//     for(let i=0;i<s.length;i++){
//         if(stack.length==0){
//             stack.push(s[i]);
//         }
//    else if(stack[len]=="("){
//         if(s[i]!=')'){
//             return false;
//         }
//     }
//     else if(stack[len]=="{"){
//         if(s[i]!="}"){
//             return false;
//         }
//     }
//     else if(stack[len]=="["){
//         if(s[i]!="]"){
//             return false;
//         }
//     }
//     else{
//         return false;
//     }
//     stack.pop();
//     }
//     return true;
// };
// console.log(isValid(")"));

// function isValid(s) {
//     const left = [];  //(   )
//     const legend = {
//       '(': ')',    //)    
//       '{': '}',
//       '[': ']'
//     };
//     for (let i = 0; i < s.length; i++) {      
//       if (s[i] === '(' || s[i] === '{' || s[i] === '[') {  //(    )
//         left.push(s[i]);                                        //( 
//       } else if (legend[left.pop()] !== s[i]) {          //
//         return false;
//       }
//     }
//     return left.length ? 0 : 1;
//   };
//   console.log(isValid("(){}[]"));