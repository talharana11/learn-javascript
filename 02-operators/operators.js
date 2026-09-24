// OPERATORS IN JAVASCRIPT — PRACTICE FILE


// ARITHMETIC OPERATORS 

let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000

let count = 5;
count++;
console.log(count);   // 6
count--;
console.log(count);   // 5

// Practice: Even/Odd checker using modulus
let num = 7;
if (num % 2 === 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}


// ASSIGNMENT OPERATORS 

console.log("--- Assignment Operators ---");
let x = 10;

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

// Practice: Shopping cart total
let cartTotal = 0;
cartTotal += 500;   // item 1
cartTotal += 250;   // item 2
cartTotal -= 100;   // discount
console.log("Cart Total:", cartTotal); // 650


// COMPARISON OPERATORS

console.log("--- Comparison Operators ---");
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 >= 10);   // true

// Practice: Voting eligibility checker
let age = 17;
let isEligible = age >= 18;
console.log("Eligible to vote:", isEligible); // false


// LOGICAL OPERATORS

console.log("--- Logical Operators ---");
let hasID = true;
let userAge = 25;

console.log(userAge >= 18 && hasID); // true (AND)

let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true (OR)

let isLoggedIn = false;
console.log(!isLoggedIn); // true (NOT)

// Practice: Login validation
let username = "talha";
let password = "12345";
let loginSuccess = username.length > 0 && password.length >= 5;
console.log("Login Success:", loginSuccess); // true


// STRING OPERATOR (+) 

console.log("--- String Operator ---");
let firstName = "Talha";
let lastName = "Rana";
console.log(firstName + " " + lastName); // "Talha Rana"

console.log("5" + 3);  // "53"
console.log(5 + "3");  // "53"
console.log(5 + 3);    // 8

// Practice: Build a full greeting message
let city = "Vehari";
let greeting = "Hello, my name is " + firstName + " " + lastName + " and I live in " + city + ".";
console.log(greeting);


// TERNARY OPERATOR 

console.log("--- Ternary Operator ---");
let checkAge = 20;
let result = checkAge >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

// Practice: Even/Odd using ternary (shorter version)
let n = 9;
console.log(n % 2 === 0 ? `${n} is Even` : `${n} is Odd`);


// NULLISH COALESCING OPERATOR (??)

console.log("--- Nullish Coalescing Operator ---");
let usernameInput = null;
let displayName = usernameInput ?? "Guest";
console.log(displayName); // "Guest"

let score = 0;
console.log(score || 100); // 100 (galat use case)
console.log(score ?? 100); // 0   (sahi use case)

// Practice: Default settings loader
let userTheme = undefined;
let theme = userTheme ?? "light";
console.log("Theme:", theme); // "light"


// OPERATOR PRECEDENCE 

console.log("--- Operator Precedence ---");
console.log(2 + 3 * 4);     // 14
console.log((2 + 3) * 4);   // 20

// Practice: Calculate average of 3 numbers correctly
let num1 = 10;
let num2 = 20;
let num3 = 30;
let average = (num1 + num2 + num3) / 3;
console.log("Average:", average); // 20



// EXTRA PRACTICE EXERCISES


// Calculate the area of a rectangle
let length = 15;
let width = 8;
let area = length * width;
console.log("Rectangle Area:", area);

// Check if a number is positive, negative, or zero
let checkNum = -5;
let numType = checkNum > 0 ? "Positive" : checkNum < 0 ? "Negative" : "Zero";
console.log("Number Type:", numType);

// Simple discount calculator
let price = 1000;
let discountPercent = 20;
let discountAmount = price * (discountPercent / 100);
let finalPrice = price - discountAmount;
console.log("Final Price after discount:", finalPrice); // 800

// Check multiple conditions (AND / OR combo)
let hasLicense = true;
let hasCar = false;
let canDrive = hasLicense && hasCar;
let canTravel = hasLicense || hasCar;
console.log("Can Drive:", canDrive);   // false
console.log("Can Travel:", canTravel); // true

// BMI-style calculation (practice with division + rounding)
let weight = 70;   // kg
let height = 1.75; // meters
let bmi = weight / (height * height);
console.log("BMI:", Math.round(bmi * 10) / 10); // rounded to 1 decimal


//  Practical Examples

let d = 10;
let e = 3;

console.log("=== Arithmetic ===");
console.log("Add:", d + e);
console.log("Subtract:", d - e);
console.log("Multiply:", d * e);
console.log("Divide:", d / e);
console.log("Remainder:", d % e);
console.log("Power:", d ** e);


console.log("\n=== Assignment ===");
let z = 10;
console.log("Initial:", z);

z += 5;
console.log("After += 5:", z);

z -= 3;
console.log("After -= 3:", z);

z *= 2;
console.log("After *= 2:", z);

z /= 4;
console.log("After /= 4:", z);



console.log("\n=== Comparison ===");
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("5 != 3:", 5 != 3);
console.log("5 !== '5':", 5 !== "5");
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 5:", 5 >= 5);
console.log("5 <= 4:", 5 <= 4);



console.log("\n=== Logical ===");
let isStudent = true;
let isID = false;

console.log("AND (&&):", isStudent && isID);
console.log("OR (||):", isStudent || isID);
console.log("NOT (!):", !isStudent);


console.log("\n=== Ternary ===");
let agee = 20;
let status = agee >= 18 ? "Adult" : "Minor";
console.log("Status:", status);



console.log("\n=== String ===");
let firstNamee = "Talha";
let lastNamee = "Rana";
console.log("Full Name:", firstNamee + " " + lastNamee);



console.log("\n=== Increment/Decrement ===");
let counter = 5;
console.log("Initial:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

// Prefix vs Postfix
let p = 5;
console.log("p++:", p++);
console.log("p:", p);

let q = 5;
console.log("++q:", ++q);



console.log("\n=== Precedence ===");
console.log("5 + 3 * 2:", 5 + 3 * 2);
console.log("(5 + 3) * 2:", (5 + 3) * 2);



console.log("\n=== Practical ===");

//  Simple Calculator
let num11 = 15;
let num12 = 4;
console.log("Calculator:");
console.log("Sum:", num11 + num12);
console.log("Difference:", num11 - num12);
console.log("Product:", num11 * num12);
console.log("Quotient:", num11 / num12);
console.log("Remainder:", num11 % num12);

//  Even/Odd Check
let number = 7;
let results = number % 2 === 0 ? "Even" : "Odd";
console.log(number + " is " + results);

//  Grade Calculator
let marks = 85;
let grade = marks >= 90 ? "A+" :
    marks >= 80 ? "A" :
        marks >= 70 ? "B" :
            marks >= 60 ? "C" : "Fail";
console.log("Marks:", marks, "Grade:", grade);

//  Login Check
let usernamee = "admin";
let passwords = "12345";
let canLogin = usernamee === "admin" && passwords === "12345";
console.log("Can login?", canLogin);
