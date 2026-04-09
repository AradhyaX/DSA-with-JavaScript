// Q1 SUM OF TWO INTEGER
// let a = 10;
// let b = 20;

// console.log(a+b); 

// let a ="10"
// let b = "11"
// console.log(a+b);

//Q2 SUM AND MESSAGE
// let a =10;
// let b = 20;
// console.log("sum of 10 and 20 is " + (a+b)); 
//bodmas ki rule ki vajeh se phele bracket vala solve hoga, priority bracket ko di gayi

// TYPE COERCION
// console.log("1"-1);

// Q3 ACCEPT AND PRINT THE ANSWER

// let age = Number (prompt("what is your age"));
// console.log(age);

// agar number function use nahi karega toh joh output ka type ha voh string hoga
// matlab agar phele koi banda name likhe toh voh print hojayega par ab number function lagake sirf voh NAN output dedega

// Q4 SWAP TWO VARIABLE VIA 3 METHOD

// Method 1-swap with extra variable
/*let a=10;
let b=20;
let c; //empty variable

c=a; //c =10 , a =10; iske matlab yeh ha c khali container ha usme a ki copy gayi thi
a=b; // a=20 , b =20
b=c; // b =10

console.log(a);
console.log(b);
*/

// Method 2-swap two variable without extra variable
/*
let a=10;
let b =20;

a = a + b; // a = 30
b = a - b; // b = 10
a = a - b // a = 20

console.log(a,b)
*/

// Method 3- Destructuring
let a=10;
let b=20;

[a,b] = [b,a] //dono side me agar array ho aur beech me equal ha toh hum swapping karvate ha

console.log(a,b)

// Q5 CHECK WHETHER A NUMBER IS EVEN OR ODD

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}


// Q6 FIND MAXIMUM OF THREE NUMBERS

let x = 15;
let y = 30;
let z = 20;

if (x >= y && x >= z) {
    console.log("Maximum is " + x);
} else if (y >= x && y >= z) {
    console.log("Maximum is " + y);
} else {
    console.log("Maximum is " + z);
}


// Q7 CHECK WHETHER A YEAR IS A LEAP YEAR OR NOT

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is NOT a Leap Year`);
}




