// 🔹 Task 1: Variable Update

// Create a variable using var with value 50.
// Change it to 100 and print final value in console.

var a = 50;
    a = 100;
console.log(a);


// 🔹 Task 2: Let Variable Math
// Create let marks = 80
// Add 10 marks and print result

let marks = 80;
    totalmarks = marks + 10;
console.log("total mark :- "  + totalmarks);


// 🔹 Task 3: Const Value
// Create const price = 500
// Create another variable finalPrice = price + 100
// Print finalPrice

const price = 500
const finalprice  = price + 100
console.log("finalprice :- " + finalprice);


// 🔹 Task 4: Printing Statements
// Print the following in console:
// "Welcome Team"
// 2026
// true

console.log("Welcome Team");
console.log(2026);
let userwish = confirm("press ok for true , press cancel for flase");
console.log(userwish);


// 🔹 Task 5: Datatype Check
// Check datatype of:
// "JavaScript"
// 250
// false
// Use typeof

let Class = "JavaScript"
console.log(typeof(Class));

let Students = 250
console.log(typeof(Students));

let AllPresent = false
console.log(typeof(AllPresent));


// 🔹 Task 6: Array Task
// Create array with 5 fruits.
// Print:
// Full array
// First fruit
// Last fruit

let Fruit = ["Apple","Banana","Blueberry","Kiwi","Fig"]
console.log(Fruit);
console.log("First Fruit :- " + Fruit[0]);
console.log("Last Fruit :- " +Fruit[Fruit.length-1]);


// 🔹 Task 7: Object Task
// Create object:
// student = {
//  name: "Naveen",
//  age: 20,
//  course: "MERN"
// }
// Print:
// name
// age

let student = {
  name: "Naveen",
  age: 20,
  course: "MERN"
};
console.log("student name :- " + student.name);
console.log("student age :- " + student.age);


// 🔹 Task 8: Arithmetic Operators
// Print result:
// 20 + 10
// 50 - 25
// 5 * 5
// 100 / 4
// 20 % 3

console.log("Addition :- " + (20 + 10));
console.log("Subraction :- " + (50 - 25));
console.log("Multiplication :- " + (5* 5));
console.log("Division :- " + (100 / 4));
console.log("Modulus :- "+ (20 % 3));


// 🔹 Task 9: Increment / Decrement
// let x = 5;
// x++;
// console.log(x);

// let y = 10;
// y--;
// console.log(y);

let A = 5         
let B = ++A
console.log("A :", B);


let Y = 10         
let Z = --Y
console.log("Y :", Z);

// 🔹 Task 10: Comparison Operators
// Print answers:
// 10 > 5
// 5 < 2
// 20 == "20"
// 15 === "15"
// 10 != 8

console.log("GreaterThen :- " + (10 > 5));
console.log("LessThen :- " + (5 < 2));
console.log("LoosyTypeEq :- " + (20 == "20"));
console.log("StrictlyTypeEq :- " + (15 === "15"));
console.log("LoosyNotEq :- " + (10 != 8));


// 🔹 Task 11: Logical Operators
// Print result:
// 5 > 2 && 10 > 3
// 7 < 5 || 8 > 2
// !(10 > 5)

console.log("And :- " + (5 > 2 && 10 > 3));
console.log("Or :- " + (7 < 5 || 8 > 2));
console.log("Not :- " + !(10 > 5));


// 🔹 Task 12: Ternary Operator
// Check age:
// let age = 18;
// If age >= 18 print "Eligible" else "Not Eligible"


let age = 18;
age >= 18 ? console.log("Eligible") : console.log("Not Eligible");


