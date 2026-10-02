// =====================================================
// 03-conditionals: Practical Exercises (Solved)
// Topics: switch, if/else if, null/undefined,
//         logical operators, truthy/falsy, block scope
// =====================================================


// -----------------------------------------------------
// Exercise 1: Din ka naam (switch)
// Task: Number (1-7) se din ka naam print karo.
// -----------------------------------------------------
const dayNumber = 5;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day! Enter a number between 1 and 7.");
}
// Output: Friday


// -----------------------------------------------------
// Exercise 2: Simple calculator (switch)
// Task: Operator ke hisaab se calculation karo.
// Division by zero ko handle karo.
// -----------------------------------------------------
const num1 = 20;
const num2 = 4;
const operator = "/";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero!");
        } else {
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("Invalid operator!");
}
// Output: 5


// -----------------------------------------------------
// Exercise 3: Mahine ke din (intentional fall-through)
// Task: Month number se din batao.
// Yahan fall-through jaan boojh kar use hua hai:
// kai cases ka ek hi code hai, to beech mein break nahi.
// -----------------------------------------------------
const month = 4;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 or 29 days");
        break;
    default:
        console.log("Invalid month!");
}
// Output: 30 days


// -----------------------------------------------------
// Exercise 4: Strict comparison ka jaal (switch)
// Task: Dekho ke "2" aur 2 match kyun nahi hote.
// -----------------------------------------------------
const userInput = "2"; // input aksar string hota hai

// Pehle: BUG
switch (userInput) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("No match");
}
// Output: No match   (kyunke "2" === 2 false hai)

// Ab: FIX (string ko number mein badal kar)
switch (Number(userInput)) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("No match");
}
// Output: Two


// -----------------------------------------------------
// Exercise 5: Grade calculator (if / else if)
// Task: Marks se grade nikalo.
// Yahan range check hai, isliye switch nahi, if/else if.
// -----------------------------------------------------
const marks = 82;
let grade;

if (marks < 0 || marks > 100) {
    grade = "Invalid marks";
} else if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else if (marks >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log(grade);
// Output: A


// -----------------------------------------------------
// Exercise 6: Leap year (&& aur ||)
// Rule: 4 se divisible ho aur 100 se na ho, YA 400 se divisible ho.
// -----------------------------------------------------
const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
// Output: 2024 is a leap year
// Try karo: 1900 (not leap), 2000 (leap), 2023 (not leap)


// -----------------------------------------------------
// Exercise 7: Loan eligibility (multiple variables)
// Task: Credit score aur income dono check karo.
// -----------------------------------------------------
const creditScore = 720;
const annualIncome = 60000;
let loanStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    loanStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    loanStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    loanStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    loanStatus = "Not eligible due to low credit score.";
} else {
    loanStatus = "Not eligible due to insufficient income.";
}

console.log(loanStatus);
// Output: Eligible for standard loan rates.


// -----------------------------------------------------
// Exercise 8: null vs undefined check
// Task: Variable ki halat batao.
// Tip: null aur undefined dono ko ek saath pakadna ho
// to `value == null` use hota hai (ye dono ke liye true deta hai).
// -----------------------------------------------------
let notAssigned;          // undefined
let intentionallyEmpty = null;
let hasValue = 0;

console.log(notAssigned === undefined);        // true
console.log(intentionallyEmpty === null);      // true
console.log(notAssigned === intentionallyEmpty); // false (types alag)
console.log(notAssigned == intentionallyEmpty);  // true  (== ka khaas rule)

if (hasValue === null || hasValue === undefined) {
    console.log("No value");
} else {
    console.log("Has a value: " + hasValue);
}
// Output: Has a value: 0
// Note: 0 falsy hai, lekin null/undefined nahi, isliye
// `if (!hasValue)` yahan GALAT result deta. === se check karna behtar.


// -----------------------------------------------------
// Exercise 9: Predict the output (null aur undefined)
// Task: Pehle khud jawab socho, phir run karke check karo.
// -----------------------------------------------------
console.log(null == undefined);   // true   (== ka khaas rule)
console.log(null === undefined);  // false  (types alag)
console.log(null == 0);           // false  (null sirf undefined ke barabar)
console.log(null >= 0);           // true   (null -> 0, to 0 >= 0)
console.log(null > 0);            // false  (0 > 0 false)
console.log(undefined > 0);       // false  (undefined -> NaN)
console.log(undefined == 0);      // false
console.log(NaN == NaN);          // false  (NaN khud apne barabar bhi nahi)


// -----------------------------------------------------
// Exercise 10: Truthy aur Falsy check
// Task: Dekho kaun si value if mein true maani jati hai.
// -----------------------------------------------------
const value1 = 0;
const value2 = "hello";
const value3 = "";
const value4 = null;
const value5 = -5;

if (value1) { console.log("value1 truthy"); } else { console.log("value1 falsy"); }
if (value2) { console.log("value2 truthy"); } else { console.log("value2 falsy"); }
if (value3) { console.log("value3 truthy"); } else { console.log("value3 falsy"); }
if (value4) { console.log("value4 truthy"); } else { console.log("value4 falsy"); }
if (value5) { console.log("value5 truthy"); } else { console.log("value5 falsy"); }
// Output:
// value1 falsy
// value2 truthy
// value3 falsy
// value4 falsy
// value5 truthy   (negative number bhi truthy hai)


// -----------------------------------------------------
// Exercise 11: Login check (&& aur !)
// Task: Username aur password dono sahi hon, aur account
// blocked na ho, tab hi login ho.
// -----------------------------------------------------
const username = "talha";
const password = "1234";
const isBlocked = false;

if (username === "talha" && password === "1234" && !isBlocked) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}
// Output: Login successful
// Try karo: isBlocked = true karke dekho.


// -----------------------------------------------------
// Exercise 12: Block scope (let aur const)
// Task: Output predict karo.
// -----------------------------------------------------
const a = 2;

if (1 == "1") {
    let b = 3;
    console.log(a + b); // 5
}

// console.log(b);
// ^ Is line ka comment hata do to ReferenceError aayega,
//   kyunke `let b` sirf upar wale if block ke andar maujood hai.

// Fix: agar b bahar chahiye, to usay block se pehle declare karo:
let c;
if (1 == "1") {
    c = 3;
}
console.log(c); // 3


// -----------------------------------------------------
// Exercise 13: Fall-through ka bug (predict the output)
// Task: Is code ka output kya hoga?
// -----------------------------------------------------
const vehicle = "car";

switch (vehicle) {
    case "bike":
        console.log("Bikes are two-wheelers.");
        break;
    case "car":
        console.log("Some cars are 4x4.");
    case "truck":
        console.log("Trucks can carry heavy loads.");
        break;
    default:
        console.log("Unknown vehicle.");
}
// Output:
// Some cars are 4x4.
// Trucks can carry heavy loads.
// Wajah: "car" ke baad break nahi, to "truck" wala code bhi chala.
// Fix: "car" case ke end mein break laga do.