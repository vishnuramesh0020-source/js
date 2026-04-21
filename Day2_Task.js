let students = [
  { id: 1, name: "Vishnu", mark: 85, course: "MERN" },
  { id: 2, name: "Senduri", mark: 45, course: "Python" },
  { id: 3, name: "Ramesh", mark: 72, course: "Java" },
  { id: 4, name: "Savithiri", mark: 95, course: "React" }
];
console.log(students);

// Task 1: Print All Students
// Use loop and print:
// 1 Naveen 85 MERN
// 2 John 45 Python


for (let v = 0; v < students.length; v++) {
  let s = students[v];
  console.log(s.id + " " + s.name + " " + s.mark + " " + s.course);
}


// Output : 

//         1 Vishnu 85 MERN
//         2 Senduri 45 Python
//         3 Ramesh 72 Java
//         4 Savithiri 95 React

// ------------------------------------------------------------------------------------------------------------------

//  Task 2: Pass / Fail
// Condition:
// mark >= 50 → Pass
// Below 50 → Fail
// Output:
// Naveen - Pass
// John - Fail


for (let v = 0; v < students.length; v++) {
  let s = students[v];
  if (s.mark >= 50) {
    console.log(s.name + " - Pass");
  } else {
    console.log(s.name + " - Fail");
  }
}


// Output:
//        Naveen - Pass
//        John - Fail
//        Priya - Pass
//        Arun - Pass


// -----------------------------------------------------------------------------------------------------------------

//  Task 3: Grade System
// 90+ = A Grade
// 75+ = B Grade
// 50+ = C Grade
// Below 50 = Fail


for (let v = 0; v < students.length; v++) {
  let s = students[v];
  let grade;
  if (s.mark >= 90) {
    grade = "A Grade";
  } else if (s.mark >= 75) {
    grade = "B Grade";
  } else if (s.mark >= 50) {
    grade = "C Grade";
  } else {
    grade = "Fail";
  }
  console.log(s.name + " - " + grade);
}


// Output: 

//        Vishnu - B Grade
//        Senduri - Fail
//        Ramesh - C Grade
//        Savithiri - A Grade

// -------------------------------------------------------------------------------------------------------------------

// Task 4: Topper Student
// Find highest mark student.
// Output:
// Topper is Arun - 95


let topper = students[0];
for (let v = 1; v < students.length; v++) {
  if (students[v].mark > topper.mark) {
    topper = students[v];
  }
}
console.log("Topper is " + topper.name + " - " + topper.mark);


// Output:
      
//       Topper is Savithiri - 95

// ------------------------------------------------------------------------------------------------------------------

// Task 5: Course Search
// If course = React print student details.


for (let v = 0; v < students.length; v++) {
  if (students[v].course === "React") {
    let s = students[v];
    console.log(s.id + " " + s.name + " " + s.mark + " " + s.course);
  }
}


// Output:
      
//       4 Savithiri 95 React

// ------------------------------------------------------------------------------------------------------------------

// Task 6: Add New Student
// Add:
// {id:5,name:"Rahul",mark:88,course:"Node JS"}
// Then print all data.


students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });
for (let v = 0; v < students.length; v++) {
  let s = students[v];
  console.log(s.id + " " + s.name + " " + s.mark + " " + s.course);
}


// Output : 

//         1 Vishnu 85 MERN
//         2 Senduri 45 Python
//         3 Ramesh 72 Java
//         4 Savithiri 95 React
//         5 Rahul 88 Node JS

// ------------------------------------------------------------------------------------------------------------------


//  Task 7: Attendance System
// Use switch:
// status = "present"
// Output:
// present → Welcome
// absent → Mark Absent
// leave → Approved Leave


let status = "present";
switch (status) {
  case "present":
    console.log("Welcome");
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
}


// Output :
 
//        Welcome

// -------------------------------------------------------------------------------------------------------------

// Task 8: Login System
// username = "admin"
// password = "1234"
// If correct:
// Login Success
// Else:
// Invalid User


let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}


// Output :

//        Login Success

// ------------------------------------------------------------------------------------------------------------