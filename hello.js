const prompt=require("prompt-sync")();
console.log('Enter the values for the calculation');
const a=parseInt(prompt("enter the value of a"));
console.log(a)
const b=parseInt(prompt("enter the value of b"));
console.log(b)
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
console.log("addition of two numbers=",c);
console.log("subtraction of two numbers=",d);
console.log("Multiplication of two numbers=",e);
console.log("division of two numbers=",f);
