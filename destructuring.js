//array destructuring

const numbers = [10, 25, 9, 14];

// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// way 1.
const [x, y] = [10, 25];
// way 2.
const [m, n, o, p] = numbers;


const boxify = (first , last) =>{

        const nums = [first, last];
        return nums;
}

// way 3.
const [a, b] = boxify(25, 50);
//console.log(boxify(90, 34));

console.log(a, b);
console.log(x, y);
console.log(m, n, o, p);



const student = {
    name : 'salman khan',
    age : 60,
    movies : ['tere naam', 'wanted']
}

//array destructuring from array of object
const [firstMovie, lastMovie] = student.movies;
console.log(firstMovie, lastMovie);

//object destructuring
// serial does not matter. If left property name exists right property name then that will be choosen

const {name, age, salary} = {id: 12, name : 'amir khan', salary: 50000, age : 60}
console.log(name, age, salary);

const employee = {

    ide : 'VS Code',
    designation: 'developer',
    device: 'MAC',
    language: ['javascript', 'python', 'html'],
    specification: {
        height: 66,
        weight: 50,
        address: 'matuail',
        drink: 'water',
        watch: {

            brand: ['skmei', 'naviforce'],
            price: 5000,
            color: 'black'
        }
    }

}
const {device, ide} = employee;
const {height, address} = employee.specification;
const {brand} = employee.specification.watch;
