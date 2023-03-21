const student = {

    name : 'salman khan',
    age : 60,
    movies : ['tere naam', 'wanted']
}

// 1. JSON -> stringify, parse
const studentJason = JSON.stringify(student);

console.log(student);
console.log(studentJason);

const studentObject = JSON.parse(studentJason);
console.log(studentObject);

//2. fetch data from api

// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))

//3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys + '\n' + values);


// 4. copying new object to a new object and add another object to it
const products = [
    {name : 'laptop', price: 10000, brand: 'lenovo', color: 'silver'},
    {name : 'phone', price: 70000, brand: 'apple', color: 'golden'},
    {name : 'watch', price: 4000, brand: 'xiaomi', color: 'orange'},
    {name : 'sunglass', price: 1000, brand: 'ribon', color: 'black'},
    {name : 'camera', price: 35000, brand: 'nikon', color: 'black'},
]

const newProduct = {name : 'pendrive', price: 1500, brand: 'lenovo'};
const newProducts = [...products, newProduct];
console.log(newProducts);

//5. Removing item from an array of object
const removedItem = products.filter(product => product.name !== 'phone');
console.log(removedItem);