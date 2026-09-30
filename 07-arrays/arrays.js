// Q1
let arr1 = [12, 5, 8, 21, 3];
console.log(arr1[0]);                 // 12
console.log(arr1[arr1.length - 1]);   // 3

// Q2
let arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.slice(1, 4)); // ["b", "c", "d"]

// Q3
let arr3 = [1, 2, 3];
console.log(arr3.includes(2));  // true
console.log(arr3.includes(10)); // false

// Q4
let arr4 = [5, 10, 15];
let sum4 = arr4.reduce((a, b) => a + b, 0);
let avg4 = sum4 / arr4.length;
console.log("Sum:", sum4);     // Sum: 30
console.log("Average:", avg4); // Average: 10

// Q5
let arr5 = ["apple", "Banana", "cherry"];
arr5.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(arr5); // ["apple", "Banana", "cherry"]

// Q6
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divisibleBy3 = arr6.filter(n => n % 3 === 0);
console.log(divisibleBy3); // [3, 6, 9]

// Q7
let arr7 = ["hi", "hello", "hey", "salaam"];
arr7.sort((a, b) => a.length - b.length);
console.log(arr7); // ["hi", "hey", "hello", "salaam"]

// Q8
let arr8 = [10, 20, 30, 40, 50];
let increased = arr8.map(n => n * 1.1);
console.log(increased); // [11, 22, 33, 44, 55]

// Q9
let arr9 = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr9.length - 1; i >= 0; i--) {
    reversed.push(arr9[i]);
}
console.log(reversed); // [5, 4, 3, 2, 1]

// Q10
let arr10 = [4, 8, 15, 16, 23, 42];
console.log(arr10.some(n => n > 50)); // false

// Q11
let cart = [
    { item: "Pen", price: 20, qty: 3 },
    { item: "Book", price: 150, qty: 2 },
    { item: "Eraser", price: 10, qty: 5 },
];
let total = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
console.log(total); // 410

// Q12
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens12 = arr12.filter(n => n % 2 === 0);
let odds12 = arr12.filter(n => n % 2 !== 0);
console.log(evens12); // [2, 4, 6, 8, 10]
console.log(odds12);  // [1, 3, 5, 7, 9]

// Q13
function flattenToString(arr) {
    return arr
        .reduce((acc, item) => acc.concat(Array.isArray(item) ? flattenToString(item).split(" ") : item), [])
        .join(" ");
}
console.log(flattenToString(["a", ["b", "c"], ["d", ["e", "f"]]])); // "a b c d e f"

// Q14
let arr14 = [5, 1, 4, 2, 8];
let sortedDesc = [...arr14].sort((a, b) => b - a);
console.log(sortedDesc[1]); // 5 (2nd largest)

// Q15
let names15 = ["Ali", "Sara", "Ali", "Omar", "Sara", "Ali"];
let counts = {};
names15.forEach(name => {
    counts[name] = (counts[name] || 0) + 1;
});
console.log(counts); // { Ali: 3, Sara: 2, Omar: 1 }