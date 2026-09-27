// for loop practice exercises

// 1 se 10 tak numbers print karein
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// 10 se 1 tak ulta print karein
for (let i = 10; i >= 1; i--) {
    console.log(i)
}


// 1 se 20 tak even numbers print karein
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 1 se 20 tak odd numbers print karein
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}


// 1 se 10 tak sum nikalein
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(`Sum: ${sum}`);


// 7 ka multiplication table print karein
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// 5 ka factorial nikalein
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(`5! = ${factorial}`);


// 1 se 50 tak 5 ke multiples print karein
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


// Triangle pattern print karein (nested loop)
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}


// 20 se 2 tak ulta even numbers print karein
for (let i = 20; i >= 2; i--) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


// nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j} `);
    }
}


//
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}


//
for (let i = 20; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log();
    console.log(star);
}


// pyramid pattern print karein
for (let i = 1; i <= 10; i++) {
    let row = "";

    for (let j = 1; j <= 10 - i; j++) {
        row = row + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        row = row + "*";
    }
    console.log(row);
}


// Q1
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= 5; j++) {
        star = star + "*";
    }
    console.log(star);
}


// Q2
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}


// Q3
for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}


// Q4
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j + " ";
    }
    console.log(row);
}


// Q5
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j + " ";
    }
    console.log(row);
}


// Q6
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row = row + "*";
    }
    console.log(row);
}


// Q7
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row = row + "*";
    }
    console.log(row);
}


// Q8
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= 5 - i; j++) {
        star = star + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star = star + "*";
    }
    console.log(star);
}
for (let i = 4; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= 5 - i; j++) {
        star = star + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star = star + "*";
    }
    console.log(star);
}


// Q9
for (let table = 1; table <= 3; table++) {
    console.log(`\nTable of ${table}:`);
    for (let i = 1; i <= 3; i++) {
        console.log(`${table} x ${i} = ${table * i}`);
    }
}


// Q10
let letters = "ABCDE";

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + letters[j - 1] + " ";
    }
    console.log(row);
}

// Alphabets
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + String.fromCharCode(64 + j) + " ";
    }
    console.log(row);
}



// While loop practice exercises

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


let j = 2;
while (j <= 10) {
    console.log(j);
    j += 2;
}


let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}


let x = 1;
let my_sum = 0;
while (x <= 10) {
    my_sum = my_sum + x;
    x++;
}
console.log(`Sum: ${my_sum}`);


let password = "";
while (password !== "admin123") {
    // Maan lijiye user se input aa raha hai
    password = "admin123";   // Yahan real mein prompt() use hota hai
    console.log("Password galat, phir try karein");
}

console.log("Login successful!");


let z = 1;
while (z <= 10) {
    console.log(`5 x ${z} = ${5 * z}`);
    z++;
}


let a = 1;          // 1. Initialize (shuru)
while (a <= 5) {    // 2. Condition (kab tak chalega)
    console.log(a);   // 3. Code (kya karna hai)
    a++;              // 4. Update (aage barhao)
}

