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