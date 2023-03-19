// ******** 6 fundamentals need to know ************

// 1. How to declare variables using let and const
// 2. if else condtion, logical operators (>, <, >=, <=, === , !==), AND (&&), OR (||)
// 3. Array
// 4. Loop
// 5. Function
// 6. Object





const fatherName = 'Dulal Ahmed';
let season = 'winter';
season = 'summer';
console.log(season);


// 3 ways to access property by name

const student = {

    name : 'salman khan',
    age : 60,
    movies : ['tere naam', 'wanted']
}
const variableName = 'name';

console.log(student.name); //direct by property
console.log(student['name']); //via property name string
console.log(student[variableName]); //via property name in a variable