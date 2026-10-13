// Practice: Function 

// Greeting
function sayHello() {
    return "Hello, World!";
}

console.log(sayHello());


// Naam ke saath Greeting
function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(greetUser("Talha"));
console.log(greetUser("Ali"));


// Do Numbers Ka Jama
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
console.log(add(10, 20));


//Double
function double(num) {
    return num * 2;
}

console.log(double(4));
console.log(double(0));


// Rectangle Ka Area
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 3));
console.log(calculateArea(10, 2));


// Default Parameter
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcome("Sara"));
console.log(welcome());


// Arrow Function
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));
console.log(addNumbers(10, 20));


// Full Name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Talha", "Rana"));


// Even ya Odd
function checkEvenOdd(x) {
    if (x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));


// Get Maximum
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(getMax(5, 9));
console.log(getMax(12, 3));


// Pass ya Fail
function checkResult(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(75));
console.log(checkResult(30));


// Get Grade
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(85));
console.log(getGrade(65));
console.log(getGrade(45));
console.log(getGrade(20));


// Length
function getLength(str) {
    return str.length;
}

console.log(getLength("Hello"));
console.log(getLength("JavaScript"));


// First and Last Character
function firstAndLast(str) {
    const firstChar = str.slice(0, 1);
    const lastChar = str.slice(-1);
    return firstChar + lastChar;
}

console.log(firstAndLast("Hello"));
console.log(firstAndLast("JavaScript"));


// Temperature Conversion
function convertFtoC(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(convertFtoC(32));
console.log(convertFtoC(212));


// cube
const cube = x => {
    return x * x * x;
}

console.log(cube(3));


// Scope
let message = "Global";

function showMessage() {
    let message = "Local";
    console.log(message);
}

showMessage();
console.log(message);

// pehle Local phir Global print hoga.kaunkki function ke andar jo variable define hoga wo local scope me hoga 
// aur function ke bahar jo variable define hoga wo global scope me hoga.


// return
function test() {
    return "First";
    return "Second";
}

console.log(test());

// First print hoga kyunki function ke andar pehla return statement execute hoga aur function exit ho jayega.
// Dusra return statement kabhi execute nahi hoga.


// Square
function square(num) {
    return num * num;
}

console.log(square(4));
console.log(square(9));


// Add Three Numbers
function addThree(a, b, c) {
    return a + b + c;
}

console.log(addThree(1, 2, 3));
console.log(addThree(10, 20, 30));


// Average
function average(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(average(10, 20));
console.log(average(3, 4));


// Introduction
function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(introduce("Talha", 22));


// Check Number
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));


// Voting Eligibility
function canVote(age) {
    if (age >= 18) {
        return "You can vote.";
    } else {
        return "You cannot vote yet.";
    }
}

console.log(canVote(20));
console.log(canVote(15));


// Get Minimum
function getMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(getMin(5, 9));
console.log(getMin(12, 3));


// Get Maximum of Three
function getMaxOfThree(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}

console.log(getMaxOfThree(4, 9, 2));
console.log(getMaxOfThree(10, 3, 7));


// Get Price with Discount
function getPrice(price) {
    if (price > 1000) {
        const discount = price / 10;
        return price - discount;
    } else {
        return price;
    }
}

console.log(getPrice(2000));
console.log(getPrice(500));


// Get Day Name
function getDayName(num) {
    if (num === 1) {
        return "Monday";
    } else if (num === 2) {
        return "Tuesday";
    } else if (num === 3) {
        return "Wednesday";
    } else if (num === 4) {
        return "Thursday";
    } else if (num === 5) {
        return "Friday";
    } else if (num === 6) {
        return "Saturday";
    } else if (num === 7) {
        return "Sunday";
    } else {
        return "Invalid day";
    }
}

console.log(getDayName(1));
console.log(getDayName(3));
console.log(getDayName(5));
console.log(getDayName(9));


// Get Days Name using Switch Case
function getDaysName(num) {
    switch (num) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}

console.log(getDaysName(1));
console.log(getDaysName(3));
console.log(getDaysName(5));
console.log(getDaysName(9));


// Capital letter
function makeUpper(str) {
    return str.toUpperCase();
}

console.log(makeUpper("hello"));


// Capitalize First Letter
function capitalize(str) {
    const capital = str[0].toUpperCase();
    const letter = str.slice(1);
    return capital + letter;
}

console.log(capitalize("javascript"));
console.log(capitalize("talha"));


// Check String
function isEmpty(str) {
    if (str === "") {
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(""));
console.log(isEmpty("Hi"));


// Repeat Word
function repeatWord(word, time) {
    return word.repeat(time);
}

console.log(repeatWord("talha ", 3));


// Check String Starts with a Letter
function startsWithLetter(str, letter) {
    return str[0] === letter;
}

console.log(startsWithLetter("Apple", "A"));
console.log(startsWithLetter("Banana", "A"));


// Check Number is Divisible by Another
function isDivisible(num, divisor) {
    if (num % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(10, 5));
console.log(isDivisible(10, 3));


// FizzBuzz
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));


// Circle Area
function circleArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(circleArea(5));


// Simple Interest
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2));


// All Equal
function allEqual(a, b, c) {
    if (a === b && a === c) {
        return true;
    } else {
        return false;
    }
}
console.log(allEqual(5, 5, 5));
console.log(allEqual(5, 5, 6));


// Triple
const triple = x => x * 3;
console.log(triple(4));


// Even ya Odd
const isEven = x => {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(8));
console.log(isEven(7));


// Full Name Greeting
const greetFull = (first, last) => {
    return `Hello, ${first} ${last}!`;
}

console.log(greetFull("Talha", "Rana"));


// Increase Count
let count = 5;
function increase() {
    count = count + 1;
}
increase();   // count = 6
increase();   // count = 7
console.log(count);  // 7

// Reason: count global scope mein declare hai (let count = 5). Function ke andar count = count + 1 likha hai — 
// yahan count ke aage let/const nahi hai, isliye yeh naya local variable nahi bana raha, balki global count
// ko modify kar raha hai. Har increase() call par global count 1 se barh jata hai: 5 → 6 → 7. Isliye final
// print 7 hota hai.


// Block Scope
function show() {
    let secret = "hidden";
}
show();
// console.log(secret);  // ReferenceError aata hai, is liye comment hai

// Reason: secret function ke andar let se declare hua hai — iska scope sirf show() function tak mehdood hai.
// Function khatam hote hi secret destroy ho jata hai (memory se). Bahar console.log(secret) likhne par JS
// ko pata hi nahi ke secret kya hai → ReferenceError throw hota hai.
// Lesson: let/const block-scoped hote hain. Function ki body bhi ek block hai,
// is liye function ke andar banaya variable bahar nazar nahi aata.


// Default Parameters
function mystery(a, b = 2) {
    return a * b;
}
console.log(mystery(5));      // a=5, b=2 (default) → 10
console.log(mystery(5, 3));   // a=5, b=3           → 15
console.log(mystery());       // a=undefined, b=2   → NaN

// Reason: mystery(5) → b pass nahi hua, toh default b = 2 use hua → 5 × 2 = 10.
// mystery(5, 3) → dono pass hue, default ignore hua → 5 × 3 = 15.
// mystery() → a bhi pass nahi hua, toh a = undefined → undefined × 2 = NaN (Not a Number).
// Lesson: Default parameter sirf tab lagta hai jab argument undefined ho (ya pass na ho). a ke liye koi default nahi tha, isliye NaN.


// 
const calculate = (x) => {
    x * 2;          // ❌ koi return nahi
};
console.log(calculate(5));

// Reason: Arrow function mein curly braces { } use kiye hain, toh yeh block body ban gayi.
// Block body mein return likhna zaroori hai. Yahan x * 2; calculate hua lekin return nahi hua → function undefined return karta hai.