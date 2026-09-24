// Variables

// Basic practice


let name = "Talha";
console.log(name);

name = "Ali";
console.log(name);

const year = 2001;
console.log(year);

var old = "purani cheez";
console.log(old);


// Alag alag types


let myName = "Talha";
let age = 25;
let isStudent = true;
let nothing = null;
let notGiven;

console.log(myName);
console.log(age);
console.log(isStudent);
console.log(nothing);
console.log(notGiven);


// Template literal


console.log(`Mera naam ${myName} hai aur main ${age} saal ka hoon`);


// Ek line mein kai variables


let city = "Lahore", country = "Pakistan";
console.log(city, country);


// Score ka example


let score = 0;
console.log(score);

score = 10;
console.log(score);

score = score + 5;
console.log(score);


// typeof se check kiya


console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof nothing);
console.log(typeof notGiven);



// 1. Apni info
let firstName = "Talha";
let lastName = "Rana";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Age calculation
const currentYear = 2026;
const birthYear = 2001;
let myAge = currentYear - birthYear;
console.log("Meri age:", myAge);

// 3. Shopping cart
let itemPrice = 500;
let quantity = 3;
let total = itemPrice * quantity;
console.log("Total:", total);

// 4. Discount
let discount = 100;
let finalPrice = total - discount;
console.log("Discount ke baad:", finalPrice);

// 5. Boolean practice
let isLoggedIn = false;
console.log("Kya user logged in hai?", isLoggedIn);

isLoggedIn = true;
console.log("Ab logged in hai?", isLoggedIn);

// 6. Null aur undefined ka farq
let user = null;           // maine khud khali rakha
let email;                 // maine value nahi di
console.log("User:", user);
console.log("Email:", email);

// 7. Const ka use — jo change na ho
const PI = 3.14;
const myCountry = "Pakistan";
console.log(PI);
console.log(myCountry);

// 8. Ek variable ko doosre mein daalna
let a = 10;
let b = a;
console.log("a:", a);
console.log("b:", b);

b = 20;
console.log("b change karne ke baad:", b);
console.log("a phir bhi:", a);

// 9. String jorna (concatenation)
let greeting = "Hello";
let person = "Talha";
console.log(greeting + ", " + person + "!");

// 10. Calculator jaisa
let num1 = 15;
let num2 = 4;
console.log("Jama:", num1 + num2);
console.log("Tafreeq:", num1 - num2);
console.log("Zarb:", num1 * num2);
console.log("Taqseem:", num1 / num2);
console.log("Baqi:", num1 % num2);

// 11. Swap karna
let x = 5;
let y = 10;
console.log("Pehle — x:", x, "y:", y);

let temp = x;
x = y;
y = temp;
console.log("Baad mein — x:", x, "y:", y);

// 12. Comparison
let marks = 75;
console.log("Kya pass hua?", marks > 40);
console.log("Kya distinction hai?", marks > 80);

// 13. Variable ki value update karna
let counter = 0;
counter = counter + 1;   // 1
counter = counter + 1;   // 2
counter += 1;            // 3 (short form)
counter++;               // 4 (aur short)
console.log("Counter:", counter);

// 14. Multiple types ek saath
let randomData = ["Talha", 25, true, null];
console.log(randomData);

// 15. Object banake dekhna
let personInfo = {
    name: "Talha",
    age: 25,
    city: "Lahore"
};
console.log(personInfo);
console.log(personInfo.name);
console.log(personInfo.age);
console.log(personInfo.city);