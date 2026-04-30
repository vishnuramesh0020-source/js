// 🔹 Task 1: Array Basics
// let arr = [10, 20, 30, 40, 50];
// 👉 Print:
// First element
// Last element
// Total length


let arr = [10, 20, 30, 40, 50];
console.log("First element:- ", arr[0]);
console.log("Last element:- ", arr[arr.length - 1]);
console.log("Total length:- ", arr.length);

// Output :

// First element:- 10
// Last element:- 50
// Total length:- 5

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 2: Push & Pop
// let arr = [1,2,3];
// 👉 Add 4,5 at end
// 👉 Remove last element
// 👉 Final output should be: [1,2,3,4]


let arr1 = [1, 2, 3];
arr1.push(4, 5);
arr1.pop();
console.log("Final Output :- " + arr1);


// Output :

// Final Output :- 1,2,3,4

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Task 3: Includes Check
// 👉 Check if "javascript" exists in:
// let arr = ["html","css","javascript","react"];


let arr2 = ["html", "css", "javascript", "react"];
let result = arr2.includes("javascript");
console.log("Final result :- " + result);

// Output :

// Final result :- true

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 4: Filter Salaries
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}
// ];
// 👉 Get employees with salary greater than 20000


let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];
let results = emp.filter(e => e.salary > 20000);
console.log(results);

// Output :

// (2) [{…}, {…}]
// 0
// : 
// {name: 'B', salary: 50000}
// 1
// : 
// {name: 'C', salary: 30000}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 5: Map Names
// 👉 From above array, return only:
// ["A","B","C"]


let names = emp.map(e => e.name);
console.log(names);

// Output :

// (3) ['A', 'B', 'C']

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 6: Reduce Sum
// 👉 Find total salary using reduce()


let total = emp.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Value :- " + total);


// Output :

// Total Value :- 90000

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🥋 LEVEL 3 (Logic Building)
// 🔹 Task 7: Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// 👉 Output: [1,2,3,4,5]


let arr3 = [1, 2, 2, 3, 4, 4, 5];
let Remove = [...new Set(arr3)];
console.log(Remove);

// Output :

// (5) [1, 2, 3, 4, 5]

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 8: Find Largest Number
// let arr = [10, 200, 5, 90];
// 👉 Output: 200


let arr4 = [10, 200, 5, 90];
let largest = Math.max(...arr4);
console.log("Largest :- " + largest);

// Output :

// Largest :- 200

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 9: Reverse String WITHOUT reverse()
// let str = "hello";
// 👉 Output: "olleh"


let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// Output : 

// "olleh"

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🥋 LEVEL 4 (Advanced Thinking)
// 🔹 Task 10: Group by Salary
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:10000}
// ];
// 👉 Output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }


let result1 = emp.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});
console.log(result1);

// Output :

// 10000
// : 
// ['A']
// 30000
// : 
// ['C']
// 50000
// : 
// ['B']

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 11: Flatten Array (without flat)
// let arr = [1,[2,[3,[4]]]];
// 👉 Output: [1,2,3,4]


let arr5 = [1, [2, [3, [4]]]];
function flatten(arr5) {
  return arr5.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
console.log(flatten(arr5));

// Output :

// (4) [1, 2, 3, 4]

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 12: Custom Sort (Descending)
// let arr = [5,2,9,1];
// 👉 Output: [9,5,2,1]


let arr6 = [5, 2, 9, 1];
arr6.sort((a, b) => b - a);
console.log("Descending order :- " + arr6);

// Output :

// Descending order :- 9,5,2,1

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🥋 BONUS (Interview Level 🔥)
// 🔹 Task 13: Find Second Largest
// let arr = [10, 50, 20, 40];
// 👉 Output: 40


let arr7 = [10, 50, 20, 40];
arr7.sort((a, b) => b - a);
let secondLargest = arr7[1];
console.log("Second Largest :- " + secondLargest);

// Output :

// Second Largest :- 40

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Task 14: Count Characters
// let str = "aabbccdde";
// 👉 Output:
// {a:2, b:2, c:2, d:2, e:1}


// let str1 = "aabbccdde";
// let Count Characters = {};
// for (let ch of str1) {
//   Count Characters[ch] = (Count Characters[ch] || 0) + 1;
// }
// console.log("Total Count :- " + Count Characters);

// Output :
let str2 = "aabbccdde";

let result2 = {};

for (let ch of str2) {
  result2[ch] = (result2[ch] || 0) + 1;
}

console.log(result2);
