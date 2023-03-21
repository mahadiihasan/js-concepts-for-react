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


//template string dynamic
const about = `Hello, my name is ${student.name}. I am ${student.age} years old. My favourite movie is ${student.movies[1]}`

console.log(about);


//arrow function

const getFiftyFive = () => 55;
const getNumber = x => x;
const newFunction = (x, y) => {

    const z = x+y;
    return z;
}

//spread operator

const arr = [5, 9, 21, 10];
const copyOfArr = [...arr];
const addToCopyOfArr = [...arr, 99];

console.log(arr);
console.log(copyOfArr);
console.log(addToCopyOfArr);