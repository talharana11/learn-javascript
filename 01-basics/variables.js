// JavaScript Variables Practice

// let — change ho sakta hai
let name = "Talha";
console.log(name);

name = "Ali";
console.log("New Name:", name);


// const — change nahi hota
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


// Apni info
let firstName = "Talha";
let lastName = "Rana";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Age calculation
const currentYear = 2026;
const birthYear = 2001;
let myAge = currentYear - birthYear;
console.log("Meri age:", myAge);


// Shopping cart
let itemPrice = 500;
let quantity = 3;
let total = itemPrice * quantity;
console.log("Total:", total);


// Discount
let discount = 100;
let finalPrice = total - discount;
console.log("Discount ke baad:", finalPrice);


// Boolean practice
let isLoggedIn = false;
console.log("Kya user logged in hai?", isLoggedIn);

isLoggedIn = true;
console.log("Ab logged in hai?", isLoggedIn);


// Null aur undefined ka farq
let user = null;           // maine khud khali rakha
let email;                 // maine value nahi di
console.log("User:", user);
console.log("Email:", email);

// Const ka use — jo change na ho
const PI = 3.14;
const myCountry = "Pakistan";
console.log(PI);
console.log(myCountry);


// Ek variable ko doosre mein daalna
let a = 10;
let b = a;
console.log("a:", a);
console.log("b:", b);

b = 20;
console.log("b change karne ke baad:", b);
console.log("a phir bhi:", a);


// String jorna (concatenation)
let greeting = "Hello";
let person = "Talha";
console.log(greeting + ", " + person + "!");


// Calculator jaisa
let num1 = 15;
let num2 = 4;
console.log("Jama:", num1 + num2);
console.log("Tafreeq:", num1 - num2);
console.log("Zarb:", num1 * num2);
console.log("Taqseem:", num1 / num2);
console.log("Baqi:", num1 % num2);


// Swap karna
let x = 5;
let y = 10;
console.log("Pehle — x:", x, "y:", y);

let temp = x;
x = y;
y = temp;
console.log("Baad mein — x:", x, "y:", y);


// Comparison
let marks = 75;
console.log("Kya pass hua?", marks > 40);
console.log("Kya distinction hai?", marks > 80);


// Variable ki value update karna
let counter = 0;
counter = counter + 1;   // 1
counter = counter + 1;   // 2
counter += 1;            // 3 (short form)
counter++;               // 4 (aur short)
console.log("Counter:", counter);


// Multiple types ek saath
let randomData = ["Talha", 25, true, null];
console.log(randomData);


// Object banake dekhna
let personInfo = {
    name: "Talha",
    age: 25,
    city: "Lahore"
};
console.log(personInfo);
console.log(personInfo.name);
console.log(personInfo.age);
console.log(personInfo.city);


// Keywords Practice
// Yeh keywords hain — variable name nahi ban sakte
// let, const, var, function, return, if, else, for, while, class, new, this, true, false, null, undefined
// Sahi tareeqa — keyword ke aage "my" ya "is" lagayein
let myIf = 5;
let myFunction = "hello";
let isTrue = 10;
console.log("Keywords Practice:");
console.log("myIf:", myIf);
console.log("myFunction:", myFunction);
console.log("isTrue:", isTrue);


// Naming Rules Practice
// ✅ Valid names
let validName = "Talha";       // Letter se shuru
let _validName = "Talha";      // Underscore se shuru
let $validName = "Talha";      // Dollar se shuru
let name1 = "Talha";           // Number end mein
let my_name = "Talha";         // Underscore beech mein
console.log("\nNaming Rules Practice:");
console.log("validName:", validName);
console.log("_validName:", _validName);
console.log("$validName:", $validName);
console.log("name1:", name1);
console.log("my_name:", my_name);


// ❌ Invalid names — inhe uncomment karke try karein
// let 1name = "Talha";        // Number se shuru nahi ho sakta
// let my-name = "Talha";      // Hyphen allowed nahi
// let my name = "Talha";      // Space allowed nahi
// let if = 5;                 // Keyword use nahi kar sakte
// Case-sensitivity test
let caseName = "Talha";
let CaseName = "Ali";          // Yeh alag variable hai
console.log("caseName:", caseName);    // Talha
console.log("CaseName:", CaseName);    // Ali



// Naming Conventions Practice
// camelCase (Recommended)
let myFirstName = "Talha";
let myLastName = "Rana";
let isMyStudent = true;
console.log("\nNaming Conventions Practice:");
console.log("camelCase:", myFirstName, myLastName, isMyStudent);

// PascalCase (Classes ke liye)
let PersonName = "Talha";
let UserProfile = {};
console.log("PascalCase:", PersonName);

// snake_case
let first_name = "Talha";
let my_age = 25;
console.log("snake_case:", first_name, my_age);

// SCREAMING_SNAKE_CASE (Constants ke liye)
const MAX_SIZE = 100;
const API_KEY = "abc123";
console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY);


// Variable Scope Practice
// Global Scope
let globalVar = "main global hoon";
console.log("\nScope Practice:");

function testGlobal() {
    console.log("Function ke andar globalVar:", globalVar);  // ✅ Access ho sakta hai
}
testGlobal();
console.log("Function ke bahar globalVar:", globalVar);    // ✅ Access ho sakta hai

// Function Scope
function testLocal() {
    let localVar = "main local hoon";
    console.log("Function ke andar localVar:", localVar);    // ✅
}
testLocal();
// console.log("Function ke bahar localVar:", localVar);   // ❌ Error

// Block Scope
if (true) {
    let blockVar = "main block mein hoon";
    console.log("Block ke andar blockVar:", blockVar);       // ✅
}
// console.log("Block ke bahar blockVar:", blockVar);      // ❌ Error


// Reassignment & Redeclaration Practice
console.log("\nReassignment Practice:");

// Reassignment (let ke saath ✅)
let reassignVar = "Pehle";
console.log("Pehle:", reassignVar);
reassignVar = "Baad mein";
console.log("Baad mein:", reassignVar);

// Reassignment (const ke saath ❌)
const constVar = "Change nahi hoga";
console.log("constVar:", constVar);
// constVar = "Change";  // ❌ Error

// Redeclaration (let ke saath ❌)
let redeclareVar = "Talha";
// let redeclareVar = "Ali";  // ❌ Error

// Redeclaration (var ke saath ✅ — lekin avoid karein)
var oldVar = "Talha";
var oldVar = "Ali";  // ✅ Chalega lekin avoid karein
console.log("var redeclaration:", oldVar);


// typeof Full Practice
console.log("\ntypeof Full Practice:");
console.log("String:", typeof "Talha");         // string
console.log("Number:", typeof 25);              // number
console.log("Decimal:", typeof 99.99);          // number
console.log("Boolean:", typeof true);           // boolean
console.log("Null:", typeof null);              // object (bug)
console.log("Undefined:", typeof undefined);    // undefined
console.log("Object:", typeof {});              // object
console.log("Array:", typeof []);               // object
console.log("Symbol:", typeof Symbol("id"));    // symbol


// Comments Practice
console.log("\nComments Practice:");

// Single line comment
let commentVar = "Single line comment ke saath";

/*
  Multi-line comment
  Yeh 3 lines ka comment hai
  Aap ismein kitna bhi likh sakte hain
*/
let multiCommentVar = "Multi-line comment ke saath";

// ✅ Acha comment — "kyun" batata hai
// User ki age calculate kar raha hoon
let currentYear2 = 2026;
let birthYear2 = 2001;
let age2 = currentYear2 - birthYear2;
console.log("Age:", age2);


// Template Literals Full Practice
console.log("\nTemplate Literals Practice:");

// Basic Use
let tName = "Talha";
console.log(`Hello, ${tName}!`);

// Expression Use
let a2 = 5;
let b2 = 3;
console.log(`Sum: ${a2 + b2}`);           // Sum: 8
console.log(`Product: ${a2 * b2}`);       // Product: 15

// Multi-line Strings
let multiLine = `Yeh line 1 hai
Yeh line 2 hai
Yeh line 3 hai`;
console.log(multiLine);

// Purana vs Naya
console.log("Purana: " + "Mera naam " + tName + " hai");
console.log(`Naya: Mera naam ${tName} hai`);


// Type Conversion Practice
console.log("\nType Conversion Practice:");

// String se Number
let str1 = "25";
console.log("String se Number:");
console.log("Number():", Number(str1));       // 25
console.log("parseInt():", parseInt(str1));   // 25
console.log("parseFloat():", parseFloat(str1)); // 25
console.log("+ shortcut:", +str1);            // 25

// Number se String
let n1 = 25;
console.log("Number se String:");
console.log("String():", String(n1));         // "25"
console.log("toString():", n1.toString());    // "25"
console.log("+ '' shortcut:", n1 + "");       // "25"

// Boolean Conversion
console.log("Boolean Conversion:");
console.log("Boolean(1):", Boolean(1));       // true
console.log("Boolean(0):", Boolean(0));       // false
console.log("Boolean(''):", Boolean(""));     // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(null):", Boolean(null)); // false

// NaN
console.log("NaN Practice:");
console.log("Number('Talha'):", Number("Talha"));  // NaN
console.log("Number(''):", Number(""));            // 0
console.log("Number('  25  '):", Number("  25  ")); // 25
console.log("isNaN('Talha'):", isNaN("Talha"));    // true
console.log("isNaN(25):", isNaN(25));              // false


// String Methods Practice
console.log("\nString Methods Practice:");
let str = "Hello World";

console.log("Length:", str.length);                    // 11
console.log("Uppercase:", str.toUpperCase());          // HELLO WORLD
console.log("Lowercase:", str.toLowerCase());          // hello world
console.log("Includes 'World':", str.includes("World")); // true
console.log("indexOf 'World':", str.indexOf("World"));  // 6
console.log("startsWith 'Hello':", str.startsWith("Hello")); // true
console.log("endsWith 'World':", str.endsWith("World"));     // true
console.log("slice(0, 5):", str.slice(0, 5));          // Hello
console.log("substring(6):", str.substring(6));        // World
console.log("replace:", str.replace("World", "JS"));   // Hello JS
console.log("trim:", "  hello  ".trim());              // hello
console.log("split:", str.split(" "));                 // ["Hello", "World"]
console.log("concat:", "Hello".concat(" ", "World"));  // Hello World


// Math Object Practice
console.log("\nMath Object Practice:");

// Rounding
console.log("Math.round(4.7):", Math.round(4.7));   // 5
console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));     // 5

// Absolute
console.log("Math.abs(-5):", Math.abs(-5));         // 5

// Max/Min
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // 5
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // 1

// Power/Root
console.log("Math.pow(2, 3):", Math.pow(2, 3));     // 8
console.log("Math.sqrt(16):", Math.sqrt(16));       // 4

// Random
console.log("Math.random():", Math.random());       // 0.xxx
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", randomNum);


// Common Errors Practice
console.log("\nCommon Errors Practice:");
console.log("Yeh errors errors hain — comment hata kar try karein:");

// ReferenceError
// console.log(undeclaredVar);  // ❌ ReferenceError

// TypeError
// const constName = "Talha";
// constName = "Ali";           // ❌ TypeError

// SyntaxError
// let name = "Talha            // ❌ SyntaxError (quote band nahi kiya)

// NaN Error
console.log("'Talha' - 5 =", "Talha" - 5);  // NaN