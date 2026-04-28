// Task 1: Student Form Function
// Create a function studentForm(name, age, course) and print:
// Name: Naveen
// Age: 22
// Course: MERN


function studentForm(name, age, course) {
  console.log("Name:- " + name);
  console.log("Age:- " + age);
  console.log("Course:- " + course);
}
studentForm("Naveen", 22, "MERN");


// Output :

// Name:- Naveen
// Age:- 22
// Course:- MERN

// ----------------------------------------------------------------------------------------------

// Task 2: Calculator Function
// Create function calc(a,b):
// print addition
// print subtraction
// print multiplication


function calc(a, b) {
  console.log("Addition:- " + (a + b));
  console.log("Subtraction:- " + (a - b));
  console.log("Multiplication:- " + (a * b));
}
calc(10, 5);


// Output :

// Addition:- 15
// Subtraction:- 5
// Multiplication:- 50

// ----------------------------------------------------------------------------------------------

// Task 3: Reusable Greeting
// Call same function for 3 users:
// Hello Kamal
// Hello Praveen
// Hello Sai


function greeting(name) {
  console.log("Hello " + name);
}
greeting("Vishnu");
greeting("Senduri");
greeting("Ramesh");


// Output :

// Hello Vishnu
// Hello Senduri
// Hello Ramesh

// -----------------------------------------------------------------------------------------

// Task 4: Return Value
// Create function square(num)
// Return square value.
// Example:
// square(5) // 25

function square(num) {
  return num * num;
}
let result = square(5);
console.log("result:- " + result);

// Output :

// result:- 25

// ------------------------------------------------------------------------------------------

// Task 5: Scope Check
// Inside function:
// let secret = "javascript"
// Try printing outside function.
// Observe what happens.
// Explain why.


function showSecret() {
  let secret = "javascript";
  console.log("Inside function:- ", secret);
}
showSecret();

// console.log("Outside function:- ", secret);

// Output : 

// Inside function:-  javascript

// let is block scoped. so it works only in inside the block.

// Function.js:102 Uncaught ReferenceError: secret is not defined
//     at Function.js:102:36

// I tryed outside it shows error.

// ---------------------------------------------------------------------------------------

// Task 6: Merge Arrays
// let boys = ["car","bike"]
// let girls = ["doll","teddy"]
// Use spread operator and make:
// ["car","bike","doll","teddy"]


let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let toys = [...boys, ...girls];
console.log(toys);

// Output :

// (4) ['car', 'bike', 'doll', 'teddy']

// ---------------------------------------------------------------------------------------

// Task 7: Unlimited Numbers
// Create function:
// sumAll(...nums)
// Pass:
// sumAll(10,20,30,40)
// Output:
// 100


function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
console.log("total :- " + sumAll(10, 20, 30, 40));

// Output : 

// total :- 100

// -------------------------------------------------------------------------

// Task 8: Array Destructuring
// let colors = ["red","green","blue"]
// Store into:
// c1 c2 c3
// Print all.


let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1+" "+c2+" "+c3);

// Output :

// red green blue

// ---------------------------------------------------------------------------

// Task 9: Object Destructuring
// let emp = {
//  name:"Naveen",
//  role:"Developer",
//  salary:"5LPA"
// }
// Destructure and print:
// Naveen Developer


let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA"
};
let { name, role } = emp;
console.log(name, role);

// Output :

// Naveen Developer

// ----------------------------------------------------------------------

// 🔴 Level 5 – Real-Time Logic
// Task 10: Offer Generator
// Use generator function.
// Each next() should give:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// After completed:
// No more offers


function* offerGenerator() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}
let offers = offerGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

if(offers.next().done){

    console.log("No more offers");

}

// Output :

// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// No more offers

// -------------------------------------------------------------------------------

// 🟣 Level 6 – Advanced
// Task 11: Curry Function
// Make:
// add(10)(20)(30)
// Output:
// 60


function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log("total:- " + add(10)(20)(30));

// Output :

// total:- 60

// ------------------------------------------------------------------------------------

// Task 12: Student Marks Analyzer
// Create function:
// marks(...nums)
// Input:
// marks(80,90,70,60)
// Output:
// Total = 300
// Average = 75


function marks(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  let average = total / nums.length;
  console.log("Total =", total);
  console.log("Average =", average);
}
marks(80, 90, 70, 60);

// Output :

// Total = 300
// Average = 75

// -----------------------------------------------------------------------------------------

// Create employee registration system:
// register(name, role, ...skills)
// Example:
// register("Naveen","Frontend","HTML","CSS","JS","React")
// Output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React


function register(name, role, ...skills) {
  console.log("Name:- ", name);
  console.log("Role:- ", role);
  console.log("Skills:- ", skills.join(" "));
}
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");

// Output :

// Name:- Naveen
// Role:- Frontend
// Skills:- HTML CSS JS React

// ------------------------------------------------------------------------------------------
