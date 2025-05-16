'use strict'

/**************************************************
 * ARRAY DESTRUCTURING   **************************
 **************************************************/
/*let person = ['john', 'smith', 28, 'male', ['mumbai', 'India']];

const [firstName, lastName] = person; 

console.log(firstName);
console.log(lastName);
console.log(gender);
console.log(city);
console.log(country);
*/


/**************************************************
 * OBJECT DESTRUCTURING   *************************
 **************************************************/
/*const employee = {
    name: 'john',
    age: 28,
    gender: 'male',
    area: ['london', 'UK'],
    workDetails: { exp: 5, company: 'Google'},
    department: 'HR'
}

const {name: firstName, gender,area: [city, country]} = employee;

console.log(firstName);
console.log(age);
console.log(gender);
console.log(city);
console.log(country)
*/



/**************************************************
 * THE SPREAD OPERATOR   **************************
 **************************************************/
/*const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
originalArray.push(4);

console.log(copyArray)
console.log(originalArray);

const array1 = [1, 2, 3];
const array2 = [6, 7, 8];

const newArray = [0, ...array1, 4, 5, ...array2];
console.log(newArray);

console.log([...'Hello']);

const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3, a: 10}
console.log(obj2);
*/




/**************************************************
 * THE REST PATTERN & REST PARAMETER   ************
 **************************************************/
/*const arr = [1, 2, 3];
const newArray = [-1, 0, ...arr];
console.log(newArray)

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a, b, rest);

const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, b, ...obj2} = obj;

console.log(a, b, obj2);


function addNumbers(a, b, ...others){
    let sum = a + b;
    for(let i = 0; i < others.length; i++){
        sum += others[i]
    }
    return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 40, 10));
console.log(addNumbers(10, 20, 40, 10, 100));
*/



/**************************************************
 * THE OPTIONAL CHAINING    ***********************
 **************************************************/
/*const user = {
    name: 'john',
    age: 28,
    address: {
        city: 'london',
        country: 'UK'
    },
    contact: null
}

// console.log(user.name)
// console.log(user.gender)
// console.log(user.contact.email)


const products = [
    {
        id: 1, 
        name: 'LG Smart TV', 
        features: {ram: 32, memory: 128}, 
        model: {name: 'AB1982X', year: 2024}
    },
    {
        id: 2, 
        name: 'T-Shirt', 
        details: {size: 'XL', color: 'red'},
        model: null
    },
    null
]

products.forEach((product) => {
    console.log('Product Details');
    console.log('***************************');
    console.log('Name: ' + product?.name);
    console.log('RAM: '+ product?.features?.ram);
    console.log('Year: ' + product?.model?.year);
    console.log('Size: ' + product?.details?.size);
    console.log('');
})
*/



/**************************************************
 * THE NULLISH COALEISING OPERATOR   **************
 **************************************************/
/*let a = null;
const b = 'height not defined';

// const height = a ?? b;
// console.log(height);

// const height = a ?? b;
// console.log(height);


const products = [
    {
        id: 1, 
        name: 'LG Smart TV', 
        features: {ram: 32, memory: 128}, 
        model: {name: 'AB1982X', year: 2024}
    },
    {
        id: 2, 
        name: 'T-Shirt', 
        details: {size: 'XL', color: 'red'},
        model: null
    },
    null
]

products.forEach((product) => {
    console.log('Product Details');
    console.log('***************************');
    console.log('Name: ' + product?.name);
    console.log('RAM: '+ (product?.features?.ram ?? ''));
    console.log('Year: ' + (product?.model?.year ?? ''));
    console.log('Size: ' + (product?.details?.size ?? ''));
    console.log('');
})
*/


/**************************************************
 * LOOPING OVER OBJECT KEYS & VALUES   ************
 **************************************************/
/*const user = {
    name: 'john',
    age: 28,
    gender: 'male'
}

// const keys = Object.keys(user);
// console.log(keys);

// keys.forEach((key, i, arr) => {
//     console.log('user object has property: ' + key);
// })

// const values = Object.values(user);
// console.log(values);

// for(let i = 0; i < values.length; i++){
//     console.log(values[i]);
// }

const entries = Object.entries(user);
console.log(entries);

for(let i = 0; i < entries.length; i++){
    console.log(`property Name: ${entries[i][0]} - Property Value: ${entries[i][1]}`)
}
*/



/**************************************************
 * UNDERSTANDING FOR-OF LOOP   ********************
 **************************************************/
/*const colors = ['red', 'green', 'blue'];
const str = 'Hello, world!';

const products = [
    {name: 'iPhone 15', price: 1299, color: 'black'},
    {name: 'Galaxy A2', price: 899, color: 'red'},
    {name: 'Pixel 8', price: 1189, color: 'white'}
]

// for(let color of colors){
//     console.log(color);
// }

//COUNT THE TOTAL CHARACHTERS IN A STRING
//WITHOUT USING LENGTH PEROPETY

function countCharachters(value){
    let counter = 0;
    for(const char of value){
        //console.log(char);
        counter++;
    }
    return counter;
}

//console.log(countCharachters(str));

for(let prod of products){
    console.log('Product Details: ');
    console.log('**********************');
    console.log('Name: ' + prod.name);
    console.log('Price: ' + prod.price);
    console.log('Color: ' + prod.color);
    console.log('');
}

// for(let i = 0; i < products.length; i++){
//     const prod = products[i];

//     console.log('Product Details: ' + (i + 1));
//     console.log('**********************');
//     console.log('Name: ' + prod.name);
//     console.log('Price: ' + prod.price);
//     console.log('Color: ' + prod.color);
//     console.log('');
// }

*/




/**************************************************
 * UNDERSTANDING FOR-IN LOOP   ********************
 **************************************************/
/*const colors = ['red', 'green', 'blue'];

const product = {name: 'iPhone 15', price: 1299, color: 'black'}

for(let key in product){
    console.log(key, product[key]);
}

// for(let index in colors){
//     console.log(index, colors[index]);
// }
*/




/**************************************************
 * ES6 ENHANCED OBJECT LITERAL SYNTAX   ***********
 **************************************************/
/*const address = ['london', 'uk'];
const contact = {
    email: 'john@gmail.com',
    phone: 9980997067
}
const ismarried = true;

const user = {
    name: 'john',
    age: 28,
    gender: 'male',
    address,
    contact,
    ismarried,
    calcAge(birthYear){
        //method body
    },
    [address[0]]: '5'
}
console.log(user);
*/



/**************************************************
 * ES6 SET DATA STRUCTURE   ***********************
 **************************************************/
/*const mySet = new Set([1, 2, 3, 4, 2, 3]);
console.log(mySet);

// const mixedSet = new Set([100, true, 'Hello', null, undefined, {name: 'john'}])
// console.log(mixedSet);

// const strSet = new Set('hello');
// console.log(strSet);

const cities = new Set();
cities.add('london');
cities.add('delhi');
cities.add('new york');
cities.add('tokyo');

console.log(cities);
console.log(cities.size)
*/



/**************************************************
 * USE OF SET DATA STRUCTURE   ********************
 **************************************************/
/*const arr = [1, 2, 3, 2, 5, 7, 4, 6, 7];
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

// const unique = [...new Set([...arr1, ...arr2])];
// console.log(unique);

// const intersect = arr1.filter(x => {
//     return new Set(arr2).has(x)
// })
// console.log(intersect);

// const difference = arr1.filter(x => {
//     return !(new Set(arr2).has(x))
// })
// console.log(difference);


//CREATE A NEW ARRAY WITH ONLY UNIQUE VALUES FROM
//EXISTING ARRAY

//const arrSet = new Set(arr);
// const uniqueArr = [...arrSet];
// console.log(uniqueArr);

//SET CAN BE USED TO CHECK THE EXISTENCE OF AN ELEMENT
// console.log(arrSet.has(11));
// console.log(arr.includes(7))

//DELETE ELEMENTS FROM AN ARRAY
const mySet = new Set(arr);
console.log(mySet)
mySet.delete(5)
console.log(mySet)
*/





/**************************************************
 * LOOPING OVER SETS   ****************************
 **************************************************/
/*const mySet = new Set(['delhi', 'tokyo', 'london', 'berlin']);

//FOR-OF LOOP
// for(let value of mySet){
//     console.log(value);
// }

//FOREACH METHOD
mySet.forEach(function(value, key, set){
    console.log(value, key, set);
});
*/



/**************************************************
 * ES2025 NEW SET METHODS   ***********************
 **************************************************/
/*const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

//const union = new Set([...set1, ...set2]);
const union = set1.union(set2);
console.log(union);


// const intersect = [...set1].filter(x => {
//     return set2.has(x)
// })
const intersect = set1.intersection(set2);
console.log(intersect);

// const difference = [...set1].filter(x => {
//     return !(new Set(set2).has(x))
// })
const difference = set1.difference(set2);
console.log(difference);
*/

//NEW SET METHODS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set



/**************************************************
 * ES6 MAP DATA STRUCTURE   ***********************
 **************************************************/
/*const myMap = new Map();
myMap.set('question', 'In which year ES6 was released?')
   .set(1, 2013)
   .set(2, 2015)
   .set(3, 2016)
   .set(4, 2020)
   .set('correct', 2015)
   .set(true, 'Correct Answer')
   .set(false, 'Wrong answer')

//console.log(myMap);

function showQuestion(){
    console.log('MCQ Question')
    console.log('********************************')
    const q = myMap.get('question');
    console.log('Q1. ' + q);
    console.log('A. ' + myMap.get(1))
    console.log('B. ' + myMap.get(2))
    console.log('C. ' + myMap.get(3))
    console.log('D. ' + myMap.get(4))

    const ans = +prompt('Please provide your answer');
    const isCorrect = ans === myMap.get('correct');
    console.log(myMap.get(isCorrect))
}
//showQuestion();

// console.log(myMap.size)
// myMap.clear();
// console.log(myMap);

console.log(myMap.has('wrong'))
*/



/**************************************************
 * CREATE MAP FROM ARRAY & OBJECT   ***************
 **************************************************/
/*const address = [
    ['city', 'london', 123],
    ['country', 'uk'],
    ['zip', 12345],
    ['street', 'XYZ Main Street']
]

//const arr = [1, 2, 3, 4]

const user = {
    name: 'john',
    age: 23,
    gender: 'male'
}


//console.log(objArray);

//CREATE A MAP FROM ARRAY
//const myMap = new Map(address);
const objArray = Object.entries(user)

const myMap = new Map(objArray);
console.log(myMap);


const userMap = new Map();
userMap.set('name', 'mark')
.set('age', 23)
.set('gender', 'male')
.set('city', 'london');

console.log(userMap);

// console.log([...userMap])
// console.log([...userMap.keys()])
// console.log([...userMap.values()])
// console.log([...userMap.entries()])
*/



/**************************************************
 * LOOPING OVER MAP   *****************************
 **************************************************/
const address = [
    ['city', 'london'],
    ['country', 'uk'],
    ['zip', 12345],
    ['street', 'XYZ Main Street']
]

const myMap = new Map(address);

//FOR-OF LOOP
// for(let element of myMap){
//     console.log(`Key: ${element[0]}, value: ${element[1]}`);
// }

//FOREACH METHOD ON MAP
myMap.forEach((value, key, map) => {
    console.log(key + ': ' + value);
})
