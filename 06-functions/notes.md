# JavaScript Functions — Detailed Notes

## 1. Function kya hota hai?

Function code ka ek reusable block hota hai jo ek specific kaam karta hai. Ek baar likho, jitni baar chahiye call karo.

**Fayde:**

- Code repeat nahi hota (DRY: Don't Repeat Yourself)
- Code organized aur readable hota hai
- Debugging aur testing asaan hoti hai

---

## 2. Function Declaration

```js
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Talha")); // Hello, Talha
```

- **Hoisting**: Declaration functions ko declare hone se pehle bhi call kiya ja sakta hai.

```js
sayHi(); // kaam karega
function sayHi() {
  console.log("Hi!");
}
```

---

## 3. Function Expression

Function ko variable mein store karte hain.

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
```

- **Hoisting nahi hoti**: define karne se pehle call karoge to error aayega.

---

## 4. Arrow Function (ES6)

Short syntax:

```js
const multiply = (a, b) => a * b; // implicit return
const square = (x) => x * x; // ek parameter: brackets optional
const sayHello = () => "Hello"; // koi parameter nahi
const info = (a, b) => {
  // multiple lines: curly braces + return
  const sum = a + b;
  return sum;
};
```

**Important farq (regular function vs arrow):**
| Point | Regular Function | Arrow Function |
|---------------------|----------------------------------------|---------------------------------------------|
| `this` | Apna `this` hota hai (call par depend) | Apna `this` nahi, parent scope ka lete hain |
| `arguments` object | Hota hai | Nahi hota |
| Constructor (`new`) | Ho sakta hai | Nahi ho sakta |
| Hoisting | Declaration hoist hoti hai | Nahi |

---

## 5. Parameters aur Arguments

- **Parameter**: function definition mein variable
- **Argument**: call karte waqt di gayi value

```js
function add(a, b) {
  // a, b = parameters
  return a + b;
}
add(5, 10); // 5, 10 = arguments
```

### Default Parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
greet(); // Hello, Guest
greet("Ali"); // Hello, Ali
```

### Rest Parameters (`...`)

Baqi saare arguments ek array mein:

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10
```

### Spread Operator

Array ko arguments mein expand karta hai:

```js
const nums = [3, 7, 1];
console.log(Math.max(...nums)); // 7
```

### Destructuring Parameters

```js
function showUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
showUser({ name: "Talha", age: 24 });
```

---

## 6. Return Statement

- `return` function ko end kar deta hai aur value wapis bhejta hai.
- Agar `return` na ho to function `undefined` return karta hai.
- `return` ke baad wala code chalta nahi.

```js
function test() {
  return 10;
  console.log("Ye kabhi nahi chalega");
}
```

**Common ghalti (arrow function mein object return):**

```js
const makeUser = () => ({ name: "Ali" }); // object ko () mein wrap karo
```

---

## 7. Scope

### Global Scope

Function ke bahar declare, kahin bhi accessible.

### Function Scope

Function ke andar `var` sirf usi function mein accessible.

### Block Scope

`let` aur `const` sirf `{ }` block ke andar accessible.

```js
let globalVar = "global";

function test() {
  let local = "local";
  if (true) {
    let blockScoped = "block";
    var functionScoped = "function";
  }
  console.log(functionScoped); // kaam karega
  // console.log(blockScoped); // ReferenceError
}
```

---

## 8. Closures

Closure tab banta hai jab inner function apne outer function ke variables ko yaad rakhta hai, chahe outer function khatam ho chuka ho.

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
```

**Use cases:** private variables, data hiding, function factories, event handlers.

```js
function multiplier(factor) {
  return (num) => num * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## 9. Higher-Order Functions

Wo functions jo:

- dusre function ko argument mein lete hain, **ya**
- function return karte hain.

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}
repeat(3, console.log); // 0 1 2
```

### Callback Function

Jo function argument ke tor par pass hota hai.

```js
function process(data, callback) {
  const result = data.toUpperCase();
  callback(result);
}
process("hello", (res) => console.log(res)); // HELLO
```

### Array Methods (sab Higher-Order hain)

```js
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2); // [2, 4, 6, 8, 10]
nums.filter((n) => n % 2 === 0); // [2, 4]
nums.reduce((a, b) => a + b, 0); // 15
nums.find((n) => n > 3); // 4
nums.some((n) => n > 4); // true
nums.every((n) => n > 0); // true
nums.forEach((n) => console.log(n)); // sirf loop, kuch return nahi
```

---

## 10. IIFE (Immediately Invoked Function Expression)

Define hote hi run ho jata hai.

```js
(function () {
  console.log("Main foran chal gaya!");
})();

(() => console.log("Arrow IIFE"))();
```

**Use:** private scope banana, global pollution se bachna.

---

## 11. Recursion

Function jab khud ko call kare.

```js
function factorial(n) {
  if (n <= 1) return 1; // base case (zaroori!)
  return n * factorial(n - 1); // recursive case
}
console.log(factorial(5)); // 120
```

**Yaad rakho:** base case na ho to infinite recursion aur `Maximum call stack size exceeded` error.

---

## 12. `this` keyword aur Methods

```js
const user = {
  name: "Talha",
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};
user.greet(); // Hi, Talha
```

### call, apply, bind

```js
function intro(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
const person = { name: "Ali" };

intro.call(person, "Vehari", "Pakistan"); // arguments alag alag
intro.apply(person, ["Vehari", "Pakistan"]); // arguments array mein
const bound = intro.bind(person, "Vehari"); // naya function return karta hai
bound("Pakistan");
```

---

## 13. Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};

const p = new Person("Talha", 24);
console.log(p.sayHi());
```

(Modern JS mein `class` use hota hai, andar se ye bhi functions hi hain.)

---

## 14. Async Functions (Introduction)

```js
// Promise return karne wala function
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async / await
async function run() {
  console.log("Start");
  await wait(1000);
  console.log("1 second baad");
}
run();
```

- `async` function hamesha Promise return karta hai.
- `await` sirf `async` function ke andar use hota hai.

---

## 15. Pure vs Impure Functions

**Pure function:** same input par hamesha same output, aur koi side effect nahi.

```js
const add = (a, b) => a + b; // pure
```

**Impure function:** bahar ki cheez badalta hai ya random/time par depend karta hai.

```js
let total = 0;
function addToTotal(n) {
  total += n; // side effect
}
```

---

## 16. Best Practices

1. Function ka naam verb se shuru karo: `getUser`, `calculateTotal`, `isValid`
2. Ek function = ek kaam
3. Parameters kam rakho (3 se zyada ho to object pass karo)
4. Default values use karo
5. Global variables se bacho
6. Har function ka `return` clear rakho
7. `const` se function expression/arrow define karo taake accidentally reassign na ho

---

## 17. Quick Cheat Sheet

| Type          | Syntax                    |
| ------------- | ------------------------- |
| Declaration   | `function f() {}`         |
| Expression    | `const f = function() {}` |
| Arrow         | `const f = () => {}`      |
| IIFE          | `(() => {})()`            |
| Async         | `async function f() {}`   |
| Default param | `function f(a = 1) {}`    |
| Rest          | `function f(...args) {}`  |

---

```js
// Q1
function sum(a, b) {
  return a + b;
}

// Q2
const isEven = (n) => n % 2 === 0;

// Q3
const square = (n) => n * n;

// Q4
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Q5
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("javascript")); // tpircsavaj

// Q6
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Q7
const result = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0).map((n) => n * n);
console.log(result); // [4, 16, 36]

// Q8
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}
const c = createCounter();
c.increment();
c.increment();
c.decrement();
console.log(c.getValue()); // 1

// Q9
const multiplier = (factor) => (num) => num * factor;
const double = multiplier(2);
console.log(double(8)); // 16

// Q10
function findMax(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log(findMax([3, 9, 2, 7])); // 9

// Q11
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Q12
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); // 13

// Q13
const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const double2 = (x) => x * 2;
console.log(compose(addOne, double2)(5)); // 11

// Q14
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
const init = once(() => {
  console.log("Initialized");
  return 42;
});
init(); // Initialized
init(); // (kuch print nahi hoga, 42 return hoga)

// Q15
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const onSearch = debounce((q) => console.log("Searching:", q), 500);
onSearch("a");
onSearch("ab");
onSearch("abc"); // sirf ye chalega, 500ms baad
```

---
