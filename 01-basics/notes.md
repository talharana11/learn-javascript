# JavaScript Basics

## JavaScript kya hai?

JavaScript ek **powerful programming language** hai jo websites mein **interactivity** aur **dynamic behaviour** laati hai.

- JavaScript ka use computer ko instructions dene ke liye kiya jata hai
- JavaScript primarily ek **client-side scripting language** hai
- Yeh **server-side language** bhi ban sakti hai

Pehle JavaScript sirf user ke website/browser mn chalti thi, taake website ko interactive banaya ja saky ( jaise animation, pop-ups, or forms). lekin
**Node.js** ke aane ke bad ab JavaScript server-side par bhi chalti hai — jahan yeh database manage krti hai aur website ka backend chalati hai.

> **Input (Code) --> Computer --> Output**

JavaScript browser mein bhi likh kar test ki ja sakti hai — yeh ek easy lekin temporary method hai.

> **Tip:** Console clear karne ke liye `Ctrl + K` use karo.

### Example

```js
alert("Welcome to my JavaScript World.");
console.log("Hello World");
```

- `console.log()` ek function hai jo brackets `()` ke andar diya gaya message print karta hai
- Message ko **double quotes** `" "` ya **single quotes** `' '` dono mein likha ja sakta hai
- Har `console.log()` call apna output ek **new line** par print karta hai

## Data Types

Data type us **kind of value** ko batata hai jo tum store kar rahe ho — jaise number ya text.

Data type program ko yeh samajhne mein madad karta hai ke woh kis tarah ka data handle kar raha hai — number, text, ya kuch aur.

JavaScript mein **8 data types** hote hain. Har type ka apna kaam hai.

---

### 1. String (Text)

String **text** hota hai — letters, words, sentences. Yeh **single quotes** (`'...'`) ya **double quotes** (`"..."`) mein likha jata hai.

```js
let name = "Ali";
let city = "Lahore";
let message = "Hello, Welcome to JavaScript!";
let empty = ""; // Khali string bhi string hai
```

**Kab use karein:** Naam, address, message, email, ya koi bhi text store karne ke liye.

Length check karne ke liye:

```js
console.log(name.length); // 3
```

---

### 2. Number (Adad)

Number adad hota hai — chhota, bara, positive, negative, ya decimal. JavaScript mein integer aur decimal dono number hote hain.

```js
let age = 25;
let price = 99.99;
let temperature = -5;
let bigNumber = 1000000;
```

**Kab use karein:** Umar, price, quantity, calculation, ya koi bhi hisaab karne ke liye.

> **Note:** JavaScript mein `25` aur `25.0` dono same hain — console.log(25.0) ka output sirf 25 aayega.

---

### 3. Boolean (Sach/Jhoot)

Boolean ki sirf 2 values hoti hain: `true` (sach) ya `false` (jhoot).

```js
let isStudent = true;
let isLoggedIn = false;
let hasPermission = true;
let isAdult = false;
```

**Kab use karein:** Haan/Na, On/Off, Sach/Jhoot wali cheezon ke liye. Jaise "Kya user logged in hai?"

---

### 4. Null (Khali)

Null ka matlab hai "jaan boojh kar khali". Yani aap khud set karte hain ke yahan kuch nahi hai.

```js
let user = null; // Abhi koi user nahi
let data = null; // Data baad mein aayega
let result = null; // Result abhi nahi hai
```

**Kab use karein:** Jab aap jaan boojh kar kisi variable ko khali rakhna chahein.

> **Note:** `typeof null` = `"object"` — yeh JavaScript ka purana bug hai.

---

### 5. Undefined (Ghair-mutayyan)

Undefined tab hota hai jab aap variable declare karein lekin value na dein. JavaScript khud yeh value de deta hai.

```js
let x; // undefined
let name; // undefined
console.log(x); // undefined
```

**Kab use karein:** Aapko manually set nahi karna padta. Yeh JavaScript khud de deta hai.

**Difference — Null vs Undefined:**

| Null                    | Undefined                |
| ----------------------- | ------------------------ |
| Aap khud set karte hain | JavaScript khud deta hai |
| "Khali"                 | "Value nahi di"          |

---

### 6. Object (Cheez)

Object multiple values ko ek saath store karta hai — `key: value` ke form mein. Yeh `{ }` curly braces mein likha jata hai.

```js
let person = {
  name: "Ali",
  age: 25,
  city: "Lahore",
  isStudent: true,
};

// Access karne ke liye:
console.log(person.name); // "Ali"
console.log(person.age); // 25
```

**Kab use karein:** Jab aapko ek cheez ke baare mein multiple information store karni ho.

---

### 7. Array (List)

Array bhi multiple values store karta hai, lekin list ki tarah. Yeh `[ ]` square brackets mein likha jata hai.

```js
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Ali", 25, true, null];

// Access karne ke liye:
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits.length); // 3
```

**Kab use karein:** Jab aapko ek jaisi cheezon ki list store karni ho.

> **Note:** Array bhi object hai, isliye `typeof []` = `"object"` hota hai.

---

### 8. Symbol (Advanced)

Symbol ek unique identifier banata hai. Yeh advanced hai,

```js
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2); // false (dono unique hain)
```

**Kab use karein:** Advanced cases mein, jaise object properties ko unique banana.

---

### Type Check Karne Ke Liye: `typeof`

JavaScript mein `typeof` operator se pata chalta hai ke value ka type kya hai.

```js
console.log(typeof "Ali"); // "string"
console.log(typeof 25); // "number"
console.log(typeof 99.99); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"  ← JS ka bug
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"  ← Array bhi object
console.log(typeof Symbol("id")); // "symbol"
```
