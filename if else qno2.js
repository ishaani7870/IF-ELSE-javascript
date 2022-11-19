
// let input = require("readline-sync");
// var num = input.questionInt("enter the number:-");
// if (num==0){
//     console.log("zero");
// }
// else if (num>0){
//     console.log("positive");
// }
// else if (num<0){
//     console.log("negitive");
// }
// else{
//     console.log("inter valid number");
// }


let input = require('readline-sync');

var num = input.questionInt("enter the number");

var  sum =0;

for (let i=0 ; i<=num;i++){

    sum=sum+i;
  
}

console.log(sum)