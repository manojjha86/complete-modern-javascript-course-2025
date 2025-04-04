/**************************************************
 * ARRAY MAP METHOD   *****************************
 **************************************************/
/*const numbers = [1, 4, 9];
const names = ['john', 'sarah', 'steve'];
const products = [
    { id: 1, name: "Shirt", price: 20, discount: 10 },
    { id: 2, name: "Hat", price: 15, discount: 15 },
    { id: 3, name: "T-Shirt", price: 35, discount: 10 },
]

//calculate square of each elements of numbers array
let squared = numbers.map(function(el, i, a){
    //Write the logic to transform the data
    let square = el * el;
    //return transformed data
    return square;
});

console.log(squared);
console.log(numbers);


//Convert elements of names array to upper case
const upperNames = names.map((el) => {
    //console.log(el, index, arr);
    return el.toUpperCase();
})
console.log(upperNames);

//calculate discounted price of each elements 
//of products array
let productdetails = products.map((prod) => {
    return {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        discontedPrice: prod.price - (prod.price * prod.discount / 100)
    }
});

console.log(productdetails);
*/




/**************************************************
 * ARRAY FILTER METHOD   **************************
 **************************************************/
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const products = [
    { id: 1, name: "Shirt", price: 20, discount: 10 },
    { id: 2, name: "Hat", price: 15, discount: 15 },
    { id: 3, name: "T-Shirt", price: 35, discount: 10 },
]

//Filter all even numbers
let evenNumbers = numbers.filter(function(elem, index, arr){
    return elem % 2 === 0;
}).filter((el) => el % 3 === 0 );

console.log(evenNumbers);
console.log(numbers);

//Filter all words with length greater than 5
let lognWords = words.filter((el) => {
    return el.length > 5
})
console.log(lognWords);

//Filter all products where price is <= 20
let filteredProducts = products.filter((prod) => prod.price  <= 20);
console.log(filteredProducts);
*/



/**************************************************
 * ARRAY REDUCE METHOD   **************************
 **************************************************/
/*const numbers = [7, 2, 10, 4, 8, 3];

//Calculte sum of each element of numbers array
let sum = numbers.reduce(function(acc, el, i, arr) {
    return acc + el;
}, 0);

console.log(sum);

//Find the largest number in the numbers array
let max = numbers.reduce((acc, el) => {
    return Math.max(acc, el);
})
console.log(max);
*/


/**************************************************
 * ARRAY FOREACH METHOD   *************************
 **************************************************/
/*const numbers = [7, 2, 10, 4, 8, 3];

let squared = [];
let evenNumbers = [];
numbers.forEach((el, i, a) => {
    let sqr = el * el;
    squared.push(sqr);
});

numbers.forEach((el) => {
    if(el % 2 === 0){
        evenNumbers.push(el);
    }
})

console.log(squared);
console.log(evenNumbers);
*/



/**************************************************
 * ARRAY SLICE & SPLICE METHOD   ******************
 **************************************************/
/*const numbers = [7, 2, 10, 4, 8, 3, 12, 20];

//let extracted = numbers.slice(3, 5);

let extracted = numbers.splice(1, 1, "a", "b");

console.log(extracted);
console.log(numbers);
*/



/**************************************************
 * STRING SUBSCRING & SUBSTR METHOD   *************
 **************************************************/
/*const welcome = 'Hello, World!';
const subString = welcome.substring(7);
//const subStr = welcome.substr(7, 3)
console.log(subString);
//console.log(subStr);
console.log(welcome);
*/




/**************************************************
 * THE SPLIT & JOIN METHOD   **********************
 **************************************************/
/*const message = 'Welcome to this JavaScript Course';
const words = ['Hello', 'World'];

let arr = message.split(' ');
let str = arr.join(' ')
console.log(arr);
console.log(str);

let msg = words.join();
console.log(msg);*/



/**************************************************
 * ARRAY SORT & REVERSE METHOD   ******************
 **************************************************/
/*const words = ['date', 'banana', 'apple', 'elderberry', 'cherry'];
const numbers = [7, 2, 10, 4, 8, 3, 1];
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
];*/

/*
let revArray = numbers.reverse();
console.log(revArray);
console.log(numbers)
*/

// let sortedWords = words.sort().reverse();
// console.log(sortedWords);

// const sortedNumbers = numbers.sort((a, b) => {
//     return b - a;
// });
// console.log(sortedNumbers);

/*const sortedusers = users.sort((curr, next) => {
    if(curr.age < next.age) return -1;
    if(curr.age > next.age) return 1;
    return 0;
});
console.log(sortedusers);
console.log(users);*/



/**************************************************
 * ARRAY FIND METHOD   ****************************
 **************************************************/
/*const numbers = [5, 12, 8, 130, 44];
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

let num = numbers.find(function(el) {
    //console.log(el);
    return el > 10;
})
console.log(num);

const user = users.find(user => user.id === 2);
console.log(user);*/
  


/**************************************************
 * ARRAY FINDINDEX METHOD   ****************************
 **************************************************/
/*const numbers = [5, 12, 8, 130, 44];
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

let num = numbers.findIndex(function(el, index, arr) {
    //console.log(el);
    return el > 10;
})
console.log(num);

const user = users.findIndex(user => user.id === 3);
console.log(user);

let index = numbers.indexOf(8);
console.log(index);
*/



/**************************************************
 * ARRAY SOME & EVERY METHOD   ********************
 **************************************************/
/*const numbers = [5, 3, 1, 7, 11];
const users = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false  },
    { id: 3, name: "Charlie", isActive: true  },
];

let hasEvenNumber = numbers.some((el) => {
    return el % 2 === 0;
});
console.log(hasEvenNumber);

let allActiveUsers = users.every((el, index, arr) => {
    return el.isActive;
})
console.log(allActiveUsers);
*/



/**************************************************
 * ARRAY FLAT & FLATMAP METHOD   ******************
 **************************************************/
/*const nestedArray = [1, 2, [3, 4]];
const deeplyNestedArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const sparseArray = [1, , 3, [4, , 6]]; 

const employees = [
    {id: 1, name: 'john', skills: ['HTML', 'CSS', 'JAVASCRIPT']},
    {id: 2, name: 'mark', skills: ['C#', 'SQL']},
    {id: 3, name: 'merry', skills: ['Angular', 'React']}
]
  
let flattenedArray = sparseArray.flat();
console.log(flattenedArray);
//console.log(deeplyNestedArray);

const allSkills = employees.map((emp) => {
    return emp.skills;
}).flat();

const allSkillsMap = employees.flatMap((emp) => {
    return emp.skills;
});

console.log(allSkills);
console.log(allSkillsMap);
*/



/**************************************************
 * TOUPPERCASE & TOLOWERCASE METHOD   *************
 **************************************************/
/*const str = "HELLO, WORLD!";
const mixedCase = "MiXeD CaSe";

const upperStr = str.toLowerCase()
console.log(upperStr);

console.log(mixedCase.toUpperCase())

//USECASE 1: Format name with first charachter in
//upper case & all other characters in lower case

function formatName(name){
    let firstChar = name.substring(0, 1).toUpperCase();
    let restChar = name.substring(1).toLowerCase();

    return firstChar + restChar;
}

console.log(formatName('john'));
console.log(formatName('mERRy'));
console.log(formatName('STEVE'));

//USECASE 2: Compare two string values
let userEmail = 'Something@Gmail.com';
let emailInDb = 'something@gmail.com';

console.log(userEmail.toLowerCase() === emailInDb.toLowerCase());
*/



/**************************************************
 * ES2022 AT() METHOD   ***************************
 **************************************************/
/*const myArray = ['apple', 'banana', 'cherry', 'date'];
const myString = "hello";

console.log(myArray.at(3));
console.log(myArray.at(1));
console.log(myArray.at(-2));

console.log(myString.at(-3));

//USECASE: Format name with first charachter in upper case
function formatName(name){
    let firstChar = name.at(0).toUpperCase();
    let restChar = name.substring(1).toLowerCase();

    return firstChar + restChar;
}

console.log(formatName('john'));
console.log(formatName('mERRy'));
console.log(formatName('STEVE'));
*/


/**************************************************
 * THE INDEXOF & LASTINDEXOF METHOD   *************
 **************************************************/
/*const str = 'Hello from JavaScript! Hello, World!';
const arr = [1, 2, 3, 2, 4, 2];
const names = ['john', 'steve', 'mark', 'merry', 'john', 'sarah'];

// console.log(str.indexOf('Hello'));
// console.log(arr.indexOf(2))

// console.log(str.lastIndexOf('H'));
// console.log(arr.lastIndexOf(2))

// console.log(str.indexOf('H', 6));
// console.log(str.lastIndexOf('W', 7))

function removeElement(name){
    let index = names.lastIndexOf(name);
    if(index >= 0){
        names.splice(index, 1);
    }
    else{
        console.log('name not found');
    }
    
}

console.log(names);
removeElement('john')
removeElement('mark')
removeElement('ravi')
console.log(names);
*/



/**************************************************
 * THE SLICE METHOD ON STRING  ********************
 **************************************************/
/*const str = 'Hello from JavaScript! Hello, World!';

const employee = [
    {id: 'BLR1101P', name: 'john', dept: 'IT'},
    {id: 'NYC1101C', name: 'merry', dept: 'HR'},
    {id: 'LON1101P', name: 'steve', dept: 'Payroll'}
]

// let newStr = str.slice(5, 2);
// console.log(newStr);

// let newSubStr = str.substring(5, 2);
// console.log(newSubStr);

function getCity(id){
    let cityCode = id.slice(0, 3);

    switch(cityCode){
        case 'BLR':
            return 'Bangalore';
        case 'NYC':
            return 'New York';
        case 'LON':
            return 'London';
        default:
            return '';
    }
}

function employeeType(id){
    const type = id.slice(-1);
    return type === 'P' ? 'Permanent' : 'Contractor';
}

employee.forEach((emp) => {
    console.log('Employee Detail');
    console.log('***********************');
    console.log('Name: ' + emp.name);
    console.log('City: ' + getCity(emp.id));
    console.log('Type: ' + employeeType(emp.id));
    console.log('');
});
*/



/**************************************************
 * THE TRIM METHODS ON STRING  ********************
 **************************************************/
/*const fullName = ' John Henry Smith   ';

const trimfromStart = fullName.trimStart();
const trimfromEnd = fullName.trimEnd();
const trimString = fullName.trimStart().trimEnd();
const trimStringNew = fullName.trim();

// console.log(trimfromStart)
// console.log(trimfromEnd)
console.log(trimString)
console.log(trimStringNew)
//console.log(fullName);
*/



/**************************************************
 * THE REPLACE METHOD ON STRING  ******************
 **************************************************/
/*const message = "Hello, world!!";
const text = "This is a test. This is another test.";
const greeting = "Hello there!";

// let str1 = message.replace('!', '.')
// console.log(str1);
// console.log(message);

let str2 = text.replace(/test/g, 'experiment');
let str4 = text.replaceAll("test", "experiment")
console.log(str2);
console.log(str4);

// let str3 = greeting.replace(/hello/i, 'Hi');
// console.log(str3)


// const numericString = "H1B2C3D4E5";

// const doubledNumbers = numericString.replace(/\d+/g, (match) => {
//     const num = parseInt(match);
//     return num * 2;
// });
// console.log(doubledNumbers);
*/



/**************************************************
 * THE INCLUDES, STARTSWITH & ENDSWITH METHOD *****
 **************************************************/
/*const str = "Hello, world!";
const products = [
    {id: 1, name: 'Smart Watch', price: 129},
    {id: 2, name: 'Analog Watch', price: 29},
    {id: 3, name: 'Smart TV', price: 1399},
]

// let isIncluded = str.toLowerCase().includes('hello');
// console.log(isIncluded);

// let isIStartsWith = str.startsWith('w');
// console.log(isIStartsWith);

// let isEndsWith = str.endsWith('ld');
// console.log(isEndsWith);

//USE CASE: EMAIL IS VALID OR NOT

function validateEmail(email){
    if(email.startsWith('@')){
        return false;
    }
    if(!email.endsWith('.com')){
        return false;
    }
    if(!email.includes('@')){
        return false;
    }

    return true;
}

// console.log(validateEmail('procademy@gmail.com'));
// console.log(validateEmail('test@gmail'));
// console.log(validateEmail('@test@gmail.com'));
// console.log(validateEmail('test.gmail.com'));

//USER CASE: Filter products by name

function filterProducts(searchString){
    return products.filter((p) => {
        return p.name.toLocaleLowerCase().startsWith(searchString)
    })
}

console.log(filterProducts('analog'))
*/



/**************************************************
 * PRIMITIVE STRING VS STRING OBJECT **************
 **************************************************/
/*const str = 'Hello, world!';
console.log(str.toUpperCase())

const str2 = new String('Hello, JavaScript');
console.log(str2);
*/

/**************************************************
 * PADSTART & PADEND STRING METHODS ***************
 **************************************************/

/*const email = 'example@gmail.com';
const cardNumber = '1234567890123456';
const str = 'ABC';
console.log(str.padStart(8, '*'));
console.log(str.padEnd(8, '*'));

function maskcardNumber(card){
    const x = card.slice(-4);
    return x.padStart(card.length, '*');
}

function maskEmail(email){
    const e = email.slice(0, 5);
    return e.padEnd(email.length, '*');
}

const maskedCard = maskcardNumber(cardNumber);
console.log(maskedCard);

console.log(maskEmail(email));
*/


/**************************************************
 * REPEAT & CONCAT STRING METHODS *****************
 **************************************************/
/*const str = 'ABC';
const greet = 'Hello';
const message = 'JavaScript';

//console.log(str.repeat(0));

console.log(greet.concat(' ', message))
console.log(greet + ' ' + message);
*/




/**************************************************
 * THE GROUPBY METHOD IN JAVASCRIPT ***************
 **************************************************/
/*const numbers = [2, 4, 3, 7, 8, 16, 31, 28];

const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'London' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'David', age: 35, city: 'Paris' },
    { name: 'Eve', age: 30, city: 'London' },
];

const grouped = Object.groupBy(numbers, (num) => {
    return num % 2 === 0 ? "even" : "odd";
})

console.log(grouped);

let peopleByCity = Object.groupBy(people, (p) => {
    return p.city;
})
console.log(peopleByCity);
*/
  



/**************************************************
 * THE ARRAY FILL & FROM METHOD *******************
 **************************************************/
/*const arr = new Array(8);
const numbers = [1,3,5,7, 9];

// numbers.fill(1, 2, 5)
// console.log(numbers);

const charArray = Array.from('hello');
console.log(charArray);

const mapArray = Array.from(numbers, (num) => {
    return num * 2;
});
console.log(mapArray);
*/



/**************************************************
 * NON DESTRUCTIVE ARRAY METHODS ******************
 **************************************************/
//sort, reverse, splice
const names = ['john', 'mark', 'arun', 'merry', 'bob', 'chris'];

const sorted = names.toSpliced(1, 2);

console.log(sorted);
console.log(names);

//ES2023 - toSorted, toReversed, toSpliced

//ES2022 - findLast() & findLastIndex()

const element =names.findLastIndex((elem) => {
    return elem.length === 4;
});
console.log(element);