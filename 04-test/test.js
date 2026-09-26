// Q1
let naam = "Talha";
let age = 25;
let city = "Vehari";
console.log("Name:", naam);
console.log("Age:", age);
console.log("City:", city);

console.log("Mera naam" + " " + naam + " " + "hai, Meri age" + " " + age + " " + "saal hai, aur main" + " " + city + " " + "mein rehta hoon.");


// Q2
let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);


// Q3
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


// Q4
let userAge = 20;
if (userAge >= 18) {
    console.log("User badha hai");
} else {
    console.log("User abhi chota hai");
}


// Q5
let firstName = "Abdul";
let lastName = "Rahim";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);


// Q6
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B")
} else if (marks >= 60) {
    console.log("Grade: C")
} else {
    console.log("You are Fail")
}


// Q7
let my_number = -5;
if (my_number > 0) {
    console.log("Number is Positive");
} else if (my_number < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}


// Q8
let num_1 = 15;
let num_2 = 4;
console.log("Sum of two numbers is:", num_1 + num_2 + ".");
console.log("Difference of two numbers is:", num_1 - num_2 + ".");
console.log("Product of two numbers is:", num_1 * num_2 + ".");
console.log("Quotient of two numbers is:", num_1 / num_2 + ".");


// Q9
let day = "Friday";

switch (day) {
    case "Monday":
        console.log("Start of Week");
        break;
    case "Friday":
        console.log("Weekend is Coming!");
        break;
    case "Sunday":
        console.log("Rest Day!");
        break;
    default:
        console.log("Regular day!")
}


// Q10
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("User logged in");
}


// Q11
let celsius = 28;
let fahrenheit;
fahrenheit = (28 * 9 / 5) + 32;
console.log("Fahrenheit:", fahrenheit);

let _celsius = 32;
let _fahrenheit = (_celsius * 9 / 5) + 32;
console.log("Fahrenheit:", _fahrenheit);


//template literals
let $celsius = 32;
let $fahrenheit = ($celsius * 9 / 5) + 32;
console.log(`Fahrenheit: ${$fahrenheit}`);


let name = "Talha";
let message = `Hello, ${name}!`;
console.log(message);


let myName = "Talha";
let myAge = 25;
let myCity = "Vehari";

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("City:", myCity);

let myIntroduction = `Mera naam ${myName} hai, Meri age ${myAge} saal hai, aur main ${myCity} mein rehta hoon.`;

console.log(myIntroduction);


// Q12
let total = 1500;
let discount = 0;

if (total >= 1000) {
    discount = 10;
}

let finalPrice = total - (total * discount / 100);
console.log("Total:", total);
console.log("Discount:", discount + "%")
console.log("Final Price:", finalPrice);


// Q12
let myTotal = 2000;
let myDiscount = 0;

if (myTotal >= 1500) {
    myDiscount = 15;
} else if (myTotal >= 1000) {
    myDiscount = 10;
} else {
    myDiscount = 0;
}

let final_Price = myTotal - (myTotal * myDiscount / 100);

console.log(`Total: ${myTotal}`);
console.log(`Discount: ${myDiscount}%`);
console.log(`Final Price: ${final_Price}`);


// Q13
let number1 = 15;
let number2 = 8;

if (number1 > number2) {
    console.log(`${number1} is Greater than ${number2}`);
} else {
    console.log(`${number2} is Greater than ${number1}`);
}


//Q14
let username = "admin";
let password = 12345;

if (username === "admin" && password === 12345) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

//Invalid credentials
let user_name = "admin";
let myPassword = 12345;

if (user_name === "admin" && myPassword === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}


// Q15
let $year = 2001;
if ($year % 4 === 0) {
    console.log($year + " is a Leap Year");
} else {
    console.log($year + " " + "is not a Leap Year");
}


let year = 2001;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}



// Q16
let letter = "a";
if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    console.log(`${letter} is a vowel`);
} else {
    console.log(`${letter} is a consonant`);
}




// Q17
let my_age = 25;
let category;
if (my_age >= 60) {
    category = "Senior";
} else if (my_age >= 20) {
    category = "Adult";
} else if (my_age >= 13) {
    category = "Teenager";
} else {
    category = "Child"
}

console.log(`Age: ${my_age}
Category: ${category}`);


// Q18
let principal = 10000;
let rate = 5;
let time = 2;
let interest = (principal * rate * time) / 100;
let $total = principal + interest;
console.log(`Principal: ${principal}
Rate: ${rate}%
Time: ${time} years
Interest: ${interest}
Total: ${$total}`);



// Q19
let temperature = 25;
let advice;
if (temperature >= 30) {
    advice = "Garmi hai";
} else if (temperature >= 16) {
    advice = "Mausam acha hai";
} else if (temperature >= 0) {
    advice = "Thand hai";
} else if (temperature < 0) {
    advice = "Bohat thand hai";
}

console.log(`Temperature: ${temperature}°C
Advice: ${advice}`);



// Q20
let studentName = "Talha Rana";
let studentAge = 25;
let studentCity = "Vehari";

let math = 85;
let science = 90;
let english = 75;

let totalSubjects = math + science + english;
let average = totalSubjects / 3;

let grade;
let status;

if (average >= 90) {
    grade = "A+";
} else if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 40) {
    grade = "D";
} else {
    grade = "F";
}

status = average >= 40 ? "Pass" : "Fail";

console.log(`==== STUDENT REPORT CARD ====`);
console.log(`Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}`);

console.log(`\n----- Marks -----`);
console.log(`Math: ${math}
Science: ${science}
English: ${english}`);

console.log(`\n----- Result -----`);
console.log(`Total: ${totalSubjects}
Average: ${average.toFixed(2)}`);

console.log(`\nGrade: ${grade}
Status: ${status}`);
