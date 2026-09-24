# JavaScript Basics

## JavaScript kya hai?

JavaScript ek **powerful programming language** hai jo websites mein **interactivity** aur **dynamic behaviour** laati hai.

- JavaScript ka use computer ko instructions dene ke liye kiya jata hai
- JavaScript primarily ek **client-side scripting language** hai
- Yeh **server-side language** bhi ban sakti hai
- JavaScript files ko `.js` extension ke saath save kiya jata hai

Pehle JavaScript sirf user ke website/browser mn chalti thi, taake website ko interactive banaya ja saky ( jaise animation, pop-ups, or forms). Lekin
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

---

## JavaScript Ki History

JavaScript **1995** mein banayi gayi thi — maqsad tha web pages ko "alive" banana. Iska original naam **LiveScript** tha, lekin us waqt **Java** language bohat popular thi,
isliye marketing ke liye JavaScript ko Java ka "younger brother" project kiya gaya — jabke dono languages bilkul alag hain. Waqt ke sath JavaScript ek independent language ban gayi,
jiski apni specification hai — **ECMAScript**. Ab iska Java se koi relation nahi hai. Aaj JavaScript sirf browser mein hi nahi chalti — server par (Node.js) aur kisi bhi device par chal sakti hai jahan **JavaScript engine** installed ho. Browsers ke andar bhi apna engine hota hai, jise kabhi kabhi "JavaScript Virtual Machine" kaha jata hai.

---

## Keywords in JavaScript

Keywords woh **reserved words** hain jo JavaScript mein **special meaning** rakhte hain. Aap inhe **variable name ke taur par use nahi kar sakte**. JavaScript mein total **~64 reserved keywords** hain — humne yahan sirf sabse commonly use hone wali keywords cover ki hain. "Reserved" ka matlab hai — yeh words JavaScript engine ke liye **pehle se fix meaning** rakhte hain, isliye engine inhe kabhi bhi variable, function, ya kisi aur naam ke taur par accept nahi karta — chahe tum kitni bhi koshish karo.

### Common Keywords

| Keyword     | Kaam                                 |
| ----------- | ------------------------------------ |
| `let`       | Variable declare karna (modern)      |
| `const`     | Constant variable (change nahi hota) |
| `var`       | Purana tareeqa (avoid karen)         |
| `function`  | Function banana                      |
| `return`    | Function se value wapas lena         |
| `if`        | Condition check                      |
| `else`      | Alternative condition                |
| `for`       | Loop chalana                         |
| `while`     | Loop chalana                         |
| `class`     | Class banana                         |
| `new`       | Naya object banana                   |
| `this`      | Current object                       |
| `true`      | Sach                                 |
| `false`     | Jhoot                                |
| `null`      | Khali                                |
| `undefined` | Ghair-mutayyan                       |

### Keywords Ki Categories

- **Variable Declaration:** `let`, `const`, `var`
- **Control Flow:** `if`, `else`, `for`, `while`
- **Functions:** `function`, `return`
- **Object-Oriented:** `class`, `new`, `this`
- **Values:** `true`, `false`, `null`, `undefined`

**Aap inhe variable name ke taur par use nahi kar sakte:**

```js
// Galat
let if = 5;
let function = "hello";
let true = 10;

// Sahi
let myIf = 5;
let myFunction = "hello";
let isTrue = 10;
```

---

## Variables in JavaScript

Variable ek **named container (storage location)** hota hai jisme hum koi value ya data temporarily store karte hain, taake usay baad mein program mein use kiya ja sake.
Har variable ka ek **unique naam** hota hai, jiske zariye hum us mein store hui value ko access ya update kar sakte hain. Simple lafzon mein: Variable ek **box** ki tarah hai
jispar hum label (naam) lagate hain, aur us box ke andar hum koi value (number, text, boolean, waghera) rakh dete hain. Jab bhi zarurat ho, hum us box ka naam le kar uski value
use kar sakte hain — aur agar zarurat pare to us box ke andar rakhi value ko **change (reassign)** bhi kar sakte hain (agar `let` use kiya ho).

> **Yaad rahe:** Variable khud change nahi hota — sirf uske andar rakhi hui **value** change hoti hai. Variable ka naam hamesha wahi rehta hai.

```js
let city = "Lahore"; // "city" variable hai, "Lahore" uski value hai
city = "Karachi"; // value change ho gayi, naam "city" wahi raha
```

### 1. `let` (Modern — Change ho sakta hai)

```js
let name = "Talha";
console.log(name); // Talha

name = "Ali"; // Value change ki
console.log(name); // Ali
```

**Kab use karein:** Jab value baad mein change karni ho.

### 2. `const` (Modern — Change NAHI hota)

```js
const birthYear = 2001;
console.log(birthYear); // 2001

// birthYear = 2002;  //  Error aayega
```

**Kab use karein:** Jab value kabhi change na karni ho.

> **Zaroori:** `const` ko declare karte waqt hi value deni hoti hai.

```js
//  Galat
const name;
name = "Talha";

//  Sahi
const name = "Talha";
```

### 3. `var` (Purana — Avoid karein)

```js
var oldWay = "purana";
console.log(oldWay);
```

**Kab use karein:** Modern JavaScript mein bilkul nahi. Yeh purane code mein milta hai.

**Nuksan:** Function-scoped hota hai (block-scoped nahi), galti se re-declare ho sakta hai, aur hoisting issues create karta hai.

### `let` vs `const` vs `var` — Comparison

| Feature              | let | const | var |
| -------------------- | --- | ----- | --- |
| Change ho sakta      | ✅  | ❌    | ✅  |
| Re-declare           | ❌  | ❌    | ✅  |
| Block-scoped         | ✅  | ✅    | ❌  |
| Modern / Recommended | ✅  | ✅    | ❌  |

---

## Variables Ki Zarurat Kyun Hai?

Agar variables na hon, toh:

- Har value ko **manually** likhna padega
- Value **change** karne ke liye **poora code** badalna padega
- Code **repeat** hoga
- Code **readable** nahi hoga

### Example: Variables Ke Bina

```js
console.log("Talha ki age 25 hai");
console.log("Talha ki age 26 hai");
console.log("Talha ki age 27 hai");
// Agar Talha ka naam change karna ho, toh 3 jagah change karna padega
```

### Example: Variable Ke Saath

```js
let name = "Talha";
let age = 25;

console.log(`${name} ki age ${age} hai`);
age = 26;
console.log(`${name} ki age ${age} hai`);
age = 27;
console.log(`${name} ki age ${age} hai`);
// Naam change karna ho toh sirf 1 jagah change karein
```

---

## Variables Mein Data Types Ka Use

Ab dekhte hain ke different data types ko variables mein kaise store karte hain.

**1. String**

```js
let name = "Talha"; // String
const city = "Lahore"; // String
```

**2. Number**

```js
let age = 25; // Number
const birthYear = 2001; // Number
```

> Zaroori: Number ke liye quotes nahi lagate. `25` ≠ `"25"`.

**3. Boolean**

```js
let isStudent = true; // Boolean
const isLoggedIn = false; // Boolean
```

**4. Null**

```js
let user = null; // Null
```

**5. Undefined**

```js
let x; // Undefined
```

**6. Object**

```js
const person = {
  // Object
  name: "Talha",
  age: 25,
};
```

> Object ko usually `const` mein store karte hain — kyunki object reference hota hai, value nahi.

**7. Array**

```js
const fruits = ["apple", "banana"]; // Array
```

### Quick Reference: Data Type + Variable

| Data Type | let | const            | Example                |
| --------- | --- | ---------------- | ---------------------- |
| String    | ✅  | ✅               | `let name = "Talha"`   |
| Number    | ✅  | ✅               | `let age = 25`         |
| Boolean   | ✅  | ✅               | `let isStudent = true` |
| Null      | ✅  | ✅               | `let user = null`      |
| Undefined | ✅  | ❌               | `let x;`               |
| Object    | ✅  | ✅ (Recommended) | `const person = {}`    |
| Array     | ✅  | ✅ (Recommended) | `const fruits = []`    |

---

## Variable Naming Rules

**1. Letter, underscore (`_`), ya dollar (`$`) se shuru ho**

```js
let name = "Talha"; // ✅
let _name = "Talha"; // ✅
let $name = "Talha"; // ✅
```

**2. Number se shuru nahi ho sakta**

```js
let 1name = "Talha";      // ❌ Galat
let name1 = "Talha";      // ✅ Sahi
```

**3. Sirf letters, numbers, underscore, dollar**

```js
let my_name = "Talha";    // ✅
let my-name = "Talha";    // ❌ Galat (hyphen allowed nahi)
let my name = "Talha";    // ❌ Galat (space allowed nahi)
```

**4. Keywords use nahi kar sakte**

```js
let if = 5;               // ❌ Galat
let function = "hello";   // ❌ Galat
```

**5. Case-sensitive hai**

```js
let name = "Talha";
let Name = "Ali"; // Yeh alag variables hain
console.log(name); // Talha
console.log(Name); // Ali
```

---

## Naming Conventions

**1. camelCase (Recommended)**

```js
let firstName = "Talha";
let lastName = "Rana";
let isStudent = true;
```

Rule: Pehla word chhota, baaki words ke pehle letter capital.

**2. PascalCase (Classes ke liye)**

```js
let PersonName = "Talha";
let UserProfile = {};
```

**3. snake_case (Kam use hota hai)**

```js
let first_name = "Talha";
let my_age = 25;
```

**4. SCREAMING_SNAKE_CASE (Constants ke liye)**

```js
const PI = 3.14;
const MAX_SIZE = 100;
const API_KEY = "abc123";
```

---

## Variable Scope

Variable ka scope batata hai ke woh kahan accessible hai.

**1. Global Scope**

```js
let globalVar = "main sab jagah accessible hoon";

function test() {
  console.log(globalVar); // ✅
}

test();
console.log(globalVar); // ✅
```

**2. Function Scope**

```js
function test() {
  let localVar = "main sirf function ke andar hoon";
  console.log(localVar); // ✅
}

test();
// console.log(localVar);   // ❌ Error
```

**3. Block Scope (`let` aur `const`)**

```js
if (true) {
  let blockVar = "main sirf block ke andar hoon";
  console.log(blockVar); // ✅
}

// console.log(blockVar);   // ❌ Error
```

---

## Reassignment aur Redeclaration

**Reassignment (Value change karna)**

```js
let name = "Talha";
name = "Ali"; // ✅ (let ke saath)
console.log(name); // Ali
```

```js
const name = "Talha";
name = "Ali"; // ❌ Error (const ke saath)
```

**Redeclaration (Dubara declare karna)**

```js
let name = "Talha";
let name = "Ali"; // ❌ Error (let ke saath)

var name = "Talha";
var name = "Ali"; // ✅ (var ke saath, lekin avoid karein)
```

---

## Common Mistakes

Neeche kuch aam galtiyan di gayi hain jo beginners aksar karte hain — inhe samajhna zaroori hai taake future mein yeh errors avoid ki ja sakein.

**1. `const` ko value ke bina declare karna**

```js
const name; // ❌ Error
```

Wajah: `const` hamesha declare hote waqt hi value maangta hai — isse baad mein assign nahi kiya ja sakta, warna JavaScript ise initialize nahi kar sakta.

**2. `let` ko dobara declare karna**

```js
let name = "Talha";
let name = "Ali"; // ❌ Error
```

Wajah: `let` ek hi scope mein sirf ek hi baar declare ho sakta hai — dobara declare karne se JavaScript "already declared" error deta hai.

**3. Keyword ko variable name banana**

```js
let if = 5;  // ❌ Error
```

Wajah: `if`, `function`, `true` waghera reserved keywords hain jinka JavaScript mein already fixed meaning hai — inhe variable name nahi bana sakte.

**4. Number se shuru karna**

```js
let 1name = "Talha";  // ❌ Error
```

Wajah: JavaScript mein variable naam kabhi bhi number se shuru nahi ho sakta — sirf letter, underscore (`_`), ya dollar (`$`) se shuru hona chahiye.

**5. `const` ki value change karna**

```js
const age = 25;
age = 26; // ❌ Error
```

Wajah: `const` se banaya gaya variable ek baar value milne ke baad reassign nahi ho sakta — agar value change karni ho to `let` use karna chahiye.

---

## Data Types

Data type us **kind of value** ko batata hai jo tum kisi variable mein store kar rahe ho — jaise number, text, ya true/false. Data type program (aur JavaScript engine)
ko yeh samajhne mein madad karta hai ke woh kis tarah ka data handle kar raha hai, aur us data par kya operations perform kiye ja sakte hain (jaise numbers ko add karna,
ya strings ko join karna).

JavaScript mein **8 data types** hote hain, jo do bare categories mein divide hote hain:

### Primitive Data Types (6)

Yeh simple, single values hote hain jo directly store hote hain — inhe change nahi kiya ja sakta (immutable):

- **String**, **Number**, **Boolean**, **Null**, **Undefined**, **Symbol**

### Non-Primitive / Reference Data Types (2)

Yeh complex values hote hain jo multiple values ek sath store kar sakte hain, aur reference ke zariye store hote hain:

- **Object**, **Array**

> **Zaroori:** Primitive types ki value copy hoti hai jab tum unhe kisi doosre variable mein assign karte ho, lekin Object/Array ki **reference (memory address)** copy hoti hai.

Har data type ka apna specific kaam aur use case hai — neeche har ek ko example ke sath dekhte hain.

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

Symbol JavaScript ka ek **special type of value** hai jo hamesha **unique** hota hai aur **change nahi ho sakta** (immutable).
Yeh zyada tar object properties ke liye **unique labels ya identifiers** banane ke liye use hota hai — taake property names kabhi
accidentally clash na karein.

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

---

## Comments in JavaScript

Comments woh lines hoti hain jo **JavaScript execute nahi karta** — sirf **notes** ke liye hoti hain.

**1. Single Line Comment**

```js
// Yeh ek comment hai
let name = "Talha"; // Yeh bhi comment hai
```

**2. Multi-Line Comment**

```js
/*
  Yeh multi-line comment hai
  Aap ismein kitna bhi likh sakte hain
*/
```

**3. Comment Kab Likhein?**

```js
// ✅ Acha comment
// User ki age calculate kar raha hoon
let currentYear = 2026;
let birthYear = 2001;
let age = currentYear - birthYear;

// ❌ Bura comment
let a = 5; // variable
```

Rule: Comment "kya" nahi, "kyun" batata hai.

---

## Template Literals (Modern Strings)

Template Literals backticks (`` ` ``) mein likhe jate hain, quotes mein nahi.

**1. Basic Use**

```js
let name = "Talha";
console.log(`Hello, ${name}!`);
```

`${}` mein variable ya expression daal sakte hain.

**2. Multi-line Strings**

```js
let message = `Yeh line 1 hai
Yeh line 2 hai
Yeh line 3 hai`;
```

**3. Expression Use Karna**

```js
let a = 5;
let b = 3;
console.log(`Sum: ${a + b}`); // Sum: 8
console.log(`Product: ${a * b}`); // Product: 15
```

**4. Purana vs Naya Tareeqa**

```js
// Purana
console.log("Mera naam " + name + " hai");

// Naya (Template Literal)
console.log(`Mera naam ${name} hai`);
```

---

## Type Conversion (Type Badalna)

Ek data type se doosre mein badalna.

**1. String se Number**

```js
let str = "25";

let num1 = Number(str); // 25
let num2 = parseInt(str); // 25 (integer)
let num3 = parseFloat(str); // 25 (decimal — "25" mein decimal nahi hai isliye 25 hi aayega)
let num4 = +str; // 25 (shortcut)

console.log(typeof num1); // number
```

> Note: `parseFloat("25.5")` hota to result `25.5` aata — kyunki string mein khud decimal point tha.

**2. Number se String**

```js
let n = 25;

let s1 = String(n); // "25"
let s2 = n.toString(); // "25"
let s3 = n + ""; // "25" (shortcut)

console.log(typeof s1); // string
```

**3. Boolean Conversion**

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

**4. NaN (Not a Number)**

```js
console.log(Number("Talha")); // NaN
console.log(Number("")); // 0
console.log(Number("  25  ")); // 25

console.log(isNaN("Talha")); // true
console.log(isNaN(25)); // false
```

---

## String Methods

String methods woh **built-in functions** hain jo JavaScript strings ke sath already available hote hain — inke zariye tum string ko modify,
search, ya analyze kar sakte ho bina manually loop likhe.

```js
let str = "Hello World";

// Length
console.log(str.length); // 11

// Case Change
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// Search
console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 6
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true

// Extract
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(6)); // "World"

// Replace
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

// Trim
console.log("  hello  ".trim()); // "hello"

// Split
console.log(str.split(" ")); // ["Hello", "World"]

// Concatenation
console.log("Hello".concat(" ", "World")); // "Hello World"
```

**Kab use karein:** Jab bhi user input ko clean karna ho (jaise extra spaces hatana), text search/filter karna ho,
ya display ke liye text ka format change karna ho (uppercase/lowercase).

---

## Math Object

`Math` ek **built-in object** hai jo JavaScript mein numbers ke sath mathematical operations perform karne ke liye ready-made methods deta hai —
jaise rounding, random numbers, aur power/root calculations.

```js
// Rounding
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4 (niche)
console.log(Math.ceil(4.1)); // 5 (upar)

// Absolute
console.log(Math.abs(-5)); // 5

// Max/Min
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// Power/Root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Random (0 se 1 ke beech)
console.log(Math.random()); // 0.xxxxx

// Random number 1-10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
```

**Kab use karein:** Calculations mein (jaise total/average nikalna), games ya quizzes mein random values generate karne ke liye,
ya prices/measurements ko round karne ke liye.

---

## Common Errors (Aam Galtiyan)

**1. ReferenceError**

```js
console.log(x); // ❌ Error: x is not defined
```

Wajah: Variable declare nahi kiya.

**2. TypeError**

```js
const name = "Talha";
name = "Ali"; // ❌ Error: Assignment to constant variable
```

Wajah: `const` ki value change karna.

**3. SyntaxError**

```js
let name = "Talha   // ❌ Error: Unterminated string
```

Wajah: Quote band nahi kiya.

**4. NaN Error**

```js
console.log("Talha" - 5); // NaN
```

Wajah: String se number minus nahi kar sakte.

---

## Final Summary

| #   | Topic             | Kya Seekha                |
| --- | ----------------- | ------------------------- |
| 1   | Keywords          | Reserved words            |
| 2   | Variables         | let, const, var           |
| 3   | Naming Rules      | Letter, `_`, `$` se shuru |
| 4   | Conventions       | camelCase recommended     |
| 5   | Scope             | Global, Function, Block   |
| 6   | Reassignment      | let yes, const no         |
| 7   | Data Types        | 8 types                   |
| 8   | typeof            | Type check                |
| 9   | Comments          | Code notes                |
| 10  | Template Literals | `${}`                     |
| 11  | Type Conversion   | String ↔ Number           |
| 12  | String Methods    | length, upper, lower      |
| 13  | Math Object       | round, random             |
| 14  | Common Errors     | Reference, Type           |
