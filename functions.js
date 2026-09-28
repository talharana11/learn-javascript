// Functions practice exercises

// Q1. Ek function likho jo number ka double return kare
const double = (n) => n * 2;
console.log(double(7)); // 14

// Q2. Ek function likho jo dekhe number positive, negative ya zero hai
function checkNumber(n) {
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
}
console.log(checkNumber(-5)); // Negative

// Q3. Teen numbers mein se sab se bara number return karo
function largest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largest(4, 9, 2)); // 9

// Q4. String mein vowels count karo
function countVowels(str) {
    let count = 0;
    for (const ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("JavaScript")); // 3

// Q5. Celsius ko Fahrenheit mein convert karo
const toFahrenheit = (c) => (c * 9) / 5 + 32;
console.log(toFahrenheit(37)); // 98.6

// Q6. Full name banao (first aur last name se), last name na ho to sirf first name
function fullName(first, last = "") {
    return `${first} ${last}`.trim();
}
console.log(fullName("Talha", "Ahmed")); // Talha Ahmed
console.log(fullName("Talha"));          // Talha


// Q7. Array mein se duplicate values hata do
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

// Q8. Check karo string palindrome hai ya nahi
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false

// Q9. Array ke saare numbers ka average nikalo
function average(...nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}
console.log(average(10, 20, 30)); // 20

// Q10. Har word ka pehla letter capital karo
function capitalize(sentence) {
    return sentence
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}
console.log(capitalize("hello my name is talha")); // Hello My Name Is Talha

// Q11. Objects ke array ko kisi key se sort karo
function sortBy(arr, key) {
    return [...arr].sort((a, b) => a[key] - b[key]);
}
const users = [
    { name: "Ali", age: 30 },
    { name: "Sara", age: 22 },
    { name: "Ahmed", age: 27 },
];
console.log(sortBy(users, "age"));
// Sara (22), Ahmed (27), Ali (30)

// Q12. Har word kitni baar aaya, count karo
function wordCount(text) {
    const counts = {};
    for (const word of text.toLowerCase().split(" ")) {
        counts[word] = (counts[word] || 0) + 1;
    }
    return counts;
}
console.log(wordCount("js is fun js is easy"));
// { js: 2, is: 2, fun: 1, easy: 1 }

// Q13. Nested array ko flat karo (bina flat() ke)
function flatten(arr) {
    return arr.reduce(
        (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
        []
    );
}
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]



// Q14. Bank account: balance private ho, sirf methods se change ho
function createAccount(initial = 0) {
    let balance = initial;
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) return "Insufficient balance";
            balance -= amount;
            return balance;
        },
        getBalance: () => balance,
    };
}
const acc = createAccount(1000);
acc.deposit(500);
console.log(acc.withdraw(300));   // 1200
console.log(acc.withdraw(5000));  // Insufficient balance
console.log(acc.balance);         // undefined (private hai)

// Q15. pipe: functions ko left se right chalao
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);
const addFive = (x) => x + 5;
const timesTwo = (x) => x * 2;
console.log(pipe(addFive, timesTwo)(10)); // 30

// Q16. memoize: pehle se calculate hui values cache karo
function memoize(fn) {
    const cache = {};
    return function (n) {
        if (n in cache) {
            console.log("Cache se");
            return cache[n];
        }
        cache[n] = fn(n);
        return cache[n];
    };
}
const slowSquare = (n) => n * n;
const fastSquare = memoize(slowSquare);
console.log(fastSquare(9)); // 81
console.log(fastSquare(9)); // Cache se, 81

// Q17. Apna map function banao
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
console.log(myMap([1, 2, 3], (n) => n * 10)); // [10, 20, 30]

// Q18. Apna filter function banao
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
}
console.log(myFilter([1, 2, 3, 4], (n) => n > 2)); // [3, 4]

// Q19. curry: add(1)(2)(3) = 6
const curryAdd = (a) => (b) => (c) => a + b + c;
console.log(curryAdd(1)(2)(3)); // 6

// Q20. Function sirf n baar chalne do
function limit(fn, n) {
    let count = 0;
    return function (...args) {
        if (count < n) {
            count++;
            return fn(...args);
        }
        return "Limit khatam";
    };
}
const greetTwice = limit((name) => `Hi ${name}`, 2);
console.log(greetTwice("Ali"));  // Hi Ali
console.log(greetTwice("Sara")); // Hi Sara
console.log(greetTwice("Omar")); // Limit khatam



// Q21. 1 se n tak ka sum recursion se
function sumTo(n) {
    if (n <= 0) return 0;
    return n + sumTo(n - 1);
}
console.log(sumTo(5)); // 15

// Q22. Number ke digits ka sum recursion se
function digitSum(n) {
    if (n < 10) return n;
    return (n % 10) + digitSum(Math.floor(n / 10));
}
console.log(digitSum(1234)); // 10

// Q23. Power function recursion se: power(2, 5) = 32
function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}
console.log(power(2, 5)); // 32

// Q24. Delay ke baad message print karo (Promise + async/await)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function countdown() {
    for (let i = 3; i > 0; i--) {
        console.log(i);
        await wait(1000);
    }
    console.log("Go!");
}
countdown(); // 3, 2, 1, Go! (har 1 second baad)

// Q25. API se data fetch karo aur error handle karo
async function getUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) throw new Error("User nahi mila");
        const data = await res.json();
        return data.name;
    } catch (err) {
        return `Error: ${err.message}`;
    }
}
getUser(1).then(console.log); // Leanne Graham



