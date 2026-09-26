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


