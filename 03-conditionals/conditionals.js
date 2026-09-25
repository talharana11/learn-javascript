// CONDITIONALS IN JAVASCRIPT


//  IF STATEMENT 
console.log("--- if Statement ---");
let age = 20;

if (age >= 18) {
    console.log("Aap adult hain.");
}

// Practice: Check if a number is positive
let num = 5;
if (num > 0) {
    console.log(`${num} is positive`);
}


//  IF...ELSE STATEMENT 
console.log("--- if...else Statement ---");
let userAge = 15;

if (userAge >= 18) {
    console.log("Aap adult hain.");
} else {
    console.log("Aap minor hain.");
}

// Practice: Even or Odd checker
let checkNum = 7;
if (checkNum % 2 === 0) {
    console.log(`${checkNum} is Even`);
} else {
    console.log(`${checkNum} is Odd`);
}


//  IF...ELSE IF...ELSE STATEMENT 
console.log("--- if...else if...else Statement ---");
let marks = 82;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}

// Practice: Traffic light system
let light = "yellow";

if (light === "red") {
    console.log("Stop");
} else if (light === "yellow") {
    console.log("Get Ready");
} else if (light === "green") {
    console.log("Go");
} else {
    console.log("Invalid signal");
}


//  NESTED IF STATEMENTS 
console.log("--- Nested if Statements ---");
let visitorAge = 20;
let hasTicket = true;

if (visitorAge >= 18) {
    if (hasTicket) {
        console.log("Entry allowed.");
    } else {
        console.log("Ticket required for entry.");
    }
} else {
    console.log("Underage — entry denied.");
}

// Practice: Login system with role check
let loggedIn = true;
let role = "admin";

if (loggedIn) {
    if (role === "admin") {
        console.log("Welcome, Admin! Full access granted.");
    } else {
        console.log("Welcome, User! Limited access.");
    }
} else {
    console.log("Please log in first.");
}


//  SWITCH STATEMENT 
console.log("--- switch Statement ---");
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);

// Practice: Simple calculator using switch
let num1 = 10;
let num2 = 5;
let operator = "*";
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}
console.log("Calculator Result:", result); // 50


//  TERNARY OPERATOR 
console.log("--- Ternary Operator ---");
let checkAge = 16;
let status = checkAge >= 18 ? "Adult" : "Minor";
console.log(status);

// Practice: Pass/Fail checker
let score = 45;
let resultStatus = score >= 50 ? "Pass" : "Fail";
console.log("Result:", resultStatus);


//  TRUTHY / FALSY VALUES 
console.log("--- Truthy / Falsy Values ---");
let username = "";

if (username) {
    console.log("Welcome, " + username);
} else {
    console.log("Username nahi diya gaya");
}

// Practice: Check if array has items
let cart = [];
if (cart.length) {
    console.log("Cart has items");
} else {
    console.log("Cart is empty");
}



// Leap year checker
let year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}

// Largest of three numbers
let a = 12, b = 45, c = 30;
let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}
console.log("Largest number:", largest); // 45

// Ticket price based on age (switch alternative using if-else)
let ticketAge = 65;
let ticketPrice;

if (ticketAge < 5) {
    ticketPrice = 0;
} else if (ticketAge < 18) {
    ticketPrice = 100;
} else if (ticketAge < 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 50; // senior discount
}
console.log("Ticket Price:", ticketPrice); // 50

// Password strength checker
let password = "abc123";
let strength;

if (password.length < 6) {
    strength = "Weak";
} else if (password.length < 10) {
    strength = "Medium";
} else {
    strength = "Strong";
}
console.log("Password Strength:", strength); // Medium

// Season identifier using switch
let month = 12;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Invalid month";
}
console.log("Season:", season); // Winter





console.log("=== if Statement ===");
let my_age = 20;

if (my_age >= 18) {
    console.log("Aap adult hain");
}


console.log("\n=== if-else ===");
let my_marks = 45;

if (my_marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}



console.log("\n=== Grade Calculator ===");
let $marks = 85;

if ($marks >= 90) {
    console.log("Grade: A+");
} else if ($marks >= 80) {
    console.log("Grade: A");
} else if ($marks >= 70) {
    console.log("Grade: B");
} else if ($marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}



console.log("\n=== switch ===");
let $day = "Friday";

switch ($day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Sunday":
        console.log("Rest day");
        break;
    default:
        console.log("Regular day");
}



console.log("\n=== Ternary ===");
let $userAge = 25;
let $status = $userAge >= 18 ? "Adult" : "Minor";
console.log("Status:", $status);



console.log("\n=== Nested ===");
let $userAge2 = 20;
let $hasID = true;

if ($userAge2 >= 18) {
    if ($hasID) {
        console.log("Entry allowed");
    } else {
        console.log("Bring your ID");
    }
} else {
    console.log("Too young");
}



console.log("\n=== Login System ===");
let $username = "admin";
let $password = "12345";

if ($username === "admin" && $password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}



console.log("\n=== Truthy/Falsy ===");
let $value = "Hello";
if ($value) {
    console.log("Value is truthy");
}

let $empty = "";
if ($empty) {
    console.log("Not shown");
} else {
    console.log("Value is falsy");
}



console.log("\n=== Practical ===");

// Positive/Negative/Zero
let number = -5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Discount Calculator
let totalAmount = 1500;
let discount = 0;

if (totalAmount >= 2000) {
    discount = 20;
} else if (totalAmount >= 1000) {
    discount = 10;
} else if (totalAmount >= 500) {
    discount = 5;
}

let finalPrice = totalAmount - (totalAmount * discount / 100);
console.log("Total:", totalAmount);
console.log("Discount:", discount + "%");
console.log("Final Price:", finalPrice);

//  User Role (switch)
let my_role = "editor";

switch (my_role) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can edit content");
        break;
    case "viewer":
        console.log("Can only view");
        break;
    default:
        console.log("Unknown role");
}

// Even/Odd
let $num = 7;
if ($num % 2 === 0) {
    console.log($num + " is Even");
} else {
    console.log($num + " is Odd");
}

// Voting Eligibility
let $voterAge = 17;
if ($voterAge >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}
