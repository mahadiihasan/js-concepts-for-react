const products = [
    {name : 'laptop', price: 10000, brand: 'lenovo', color: 'silver'},
    {name : 'phone', price: 70000, brand: 'apple', color: 'golden'},
    {name : 'watch', price: 4000, brand: 'xiaomi', color: 'orange'},
    {name : 'sunglass', price: 1000, brand: 'ribon', color: 'black'},
    {name : 'camera', price: 35000, brand: 'nikon', color: 'black'},
]

//map
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(pricee => pricee.price);
console.log(prices);

//forEach
products.forEach(product => console.log(product.name));
products.forEach(product => console.log(product.color));

//filter returns an array
const cheap = products.filter(product => product.price<5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//find gives the first match
const specificName1 = products.find(product => product.name.includes('n'));
console.log(specificName1);


