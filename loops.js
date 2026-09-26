// Loops Practice

//  for Loop

console.log("=== for Loop: 1 to 5 ===");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 1 se 10 tak
console.log("\n=== 1 to 10 ===");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ulta count (10 se 1)
console.log("\n=== 10 to 1 ===");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//  while Loop

console.log("\n=== while Loop ===");

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


//  do-while Loop


console.log("\n=== do-while Loop ===");

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


//  for...of Loop (Array)


console.log("\n=== for...of Loop ===");

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}


//  break aur continue

console.log("\n=== break (ruk jayega 5 par) ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("\n=== continue (3 skip hoga) ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


//  Practical Examples


console.log("\n=== Even Numbers (1-10) ===");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n=== Odd Numbers (1-10) ===");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("\n=== Sum of 1 to 10 ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(`Sum: ${sum}`);   // 55

console.log("\n=== Multiplication Table of 5 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n=== Factorial of 5 ===");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(`5! = ${factorial}`);   // 120


//  Nested Loops


console.log("\n=== Nested Loop (Pattern) ===");
for (let i = 1; i <= 3; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}

// Output:
// *
// **
// ***



//  Reverse an array (loop se, .reverse() use kiye baghair)
console.log("\n=== Reverse Array ===");
let arr1 = ["a", "b", "c", "d"];
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}

//  Array mein sirf 3 se divisible numbers print karna
console.log("\n=== Divisible by 3 ===");
let nums = [3, 5, 6, 8, 9, 12, 14, 15];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) {
        console.log(nums[i]);
    }
}

//  Array ka largest number nikalna
console.log("\n=== Largest Number ===");
let numbers = [12, 45, 3, 67, 22, 89, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`Largest: ${max}`);   // 89

//  Array ka smallest number nikalna
console.log("\n=== Smallest Number ===");
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(`Smallest: ${min}`);   // 3

//  Array ka average nikalna
console.log("\n=== Average ===");
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
console.log(`Average: ${total / numbers.length}`);

//  Number prime hai ya nahi check karna
console.log("\n=== Is Prime? (checking 17) ===");
let num = 17;
let isPrime = true;
if (num < 2) {
    isPrime = false;
}
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? `${num} is prime` : `${num} is not prime`);

//  1 se 50 tak sab prime numbers print karna
console.log("\n=== Prime Numbers (1-50) ===");
for (let n = 2; n <= 50; n++) {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(n);
    }
}

//  String reverse karna (loop se)
console.log("\n=== Reverse String ===");
let str = "javascript";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
}
console.log(reversedStr);   // tpircsavaj

//  Palindrome check karna (string)
console.log("\n=== Palindrome Check ===");
let word = "madam";
let isPalindrome = true;
for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome ? `${word} is a palindrome` : `${word} is not a palindrome`);

//  Vowels count karna string mein
console.log("\n=== Count Vowels ===");
let sentence = "Talha is a frontend developer";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
        vowelCount++;
    }
}
console.log(`Vowels: ${vowelCount}`);

//  Fibonacci series (10 terms)
console.log("\n=== Fibonacci Series ===");
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

//  Object array k andar loop chalana
console.log("\n=== Loop Through Object Array ===");
let users = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 25 },
    { name: "Bilal", age: 20 }
];
for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} - ${users[i].age} years old`);
}

//  Object array mein se sirf 21+ age wale nikalna
console.log("\n=== Users Above 21 ===");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 21) {
        console.log(users[i].name);
    }
}

//  Nested loop se multiplication table (1 to 5)
console.log("\n=== Multiplication Tables (1 to 5) ===");
for (let i = 1; i <= 5; i++) {
    console.log(`\n-- Table of ${i} --`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//  Right-angle triangle number pattern
console.log("\n=== Number Pattern ===");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j + " ";
    }
    console.log(row);
}
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

//  Array mein duplicate values find karna
console.log("\n=== Find Duplicates ===");
let dupArr = [1, 2, 3, 2, 4, 5, 1, 6];
for (let i = 0; i < dupArr.length; i++) {
    for (let j = i + 1; j < dupArr.length; j++) {
        if (dupArr[i] === dupArr[j]) {
            console.log(`Duplicate found: ${dupArr[i]}`);
        }
    }
}

//  Array k elements ka sum aur product dono nikalna
console.log("\n=== Sum and Product ===");
let arr2 = [1, 2, 3, 4, 5];
let arrSum = 0;
let arrProduct = 1;
for (let i = 0; i < arr2.length; i++) {
    arrSum += arr2[i];
    arrProduct *= arr2[i];
}
console.log(`Sum: ${arrSum}, Product: ${arrProduct}`);

//  while loop se countdown timer jaisa output
console.log("\n=== Countdown ===");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Liftoff!");