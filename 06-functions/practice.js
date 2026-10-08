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
//  aur function ke bahar jo variable define hoga wo global scope me hoga.


// return
function test() {
    return "First";
    return "Second";
}

console.log(test());

// First print hoga kyunki function ke andar pehla return statement execute hoga aur function exit ho jayega.
// Dusra return statement kabhi execute nahi hoga.



