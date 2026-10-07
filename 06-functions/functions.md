# JavaScript Functions

## Fehrist (Contents)

1. [Functions kya hain?](#1-functions-kya-hain)
2. [Function call karna](#2-function-call-karna)
3. [Parameters aur Arguments](#3-parameters-aur-arguments)
4. [Return values](#4-return-values)
5. [Anonymous functions](#5-anonymous-functions)
6. [Default parameters](#6-default-parameters)
7. [Arrow functions](#7-arrow-functions)
8. [Scope (Global, Local, Block)](#8-scope-global-local-block)
9. [Calculator lab](#9-calculator-lab)
10. [Boolean Check lab (booWho)](#10-boolean-check-lab-boowho)
11. [Email Masking lab](#11-email-masking-lab)
12. [Loan Qualification Checker workshop](#12-loan-qualification-checker-workshop)
13. [Celsius to Fahrenheit lab](#13-celsius-to-fahrenheit-lab)
14. [Card Counter lab](#14-card-counter-lab)
15. [Leap Year lab](#15-leap-year-lab)
16. [Truncate String lab](#16-truncate-string-lab)
17. [Confirm Ending lab](#17-confirm-ending-lab)
18. [Aam ghaltiyan (Common mistakes)](#18-aam-ghaltiyan-common-mistakes)
19. [Review summary table](#19-review-summary-table)

---

## 1. Functions kya hain?

Function code ka woh **reusable block** hai jo ek khaas kaam karta hai. Isay ek **machine** samjho: input leti hai, us par operations karti hai, aur output deti hai.

```js
function greet() {
  console.log("Hello, Jessica!");
}
```

Yahan `greet` naam ka function **declare** (banaya) gaya hai. Sirf banane se code nahi chalta, function ko **call** karna parta hai.

**Function declaration ki sakht:**

```
function  naam  (parameters)  {  code  }
```

---

## 2. Function call karna

Function call (ya **invocation**) ka matlab function ko asal mein chalana. Naam likho aur uske baad brackets `()`.

```js
function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"
```

Sahi aur ghalat tareeqa:

```js
sum(1, 2)      // sahi
(1, 2)sum      // ghalat
```

---

## 3. Parameters aur Arguments

- **Parameter**: function banate waqt placeholder (jagah-rokne wala).
- **Argument**: call karte waqt di jane wali asal value.

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!
```

Yahan `name` parameter hai, aur `"Alice"`, `"Nick"` arguments hain. Ek function baar baar alag arguments ke saath use ho sakta hai.

Kai parameters:

```js
function addNumbers(x, y, z) {
  return x + y + z;
}

console.log(addNumbers(5, 3, 8)); // 16
```

---

## 4. Return values

- Function khatam hone par hamesha ek value return karta hai.
- Agar `return` na likho to default value **`undefined`** hoti hai.
- `return` value wapis deta hai aur function ko **wahin rok deta hai** (us ke neeche ka code nahi chalta).

```js
function doSomething() {
  console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined
```

`return` ke saath:

```js
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7
```

**`console.log` vs `return`:** `console.log` sirf screen par print karta hai. `return` value wapis deta hai jo aap aage code mein use kar sakte ho. Labs ke tests hamesha **return value** dekhte hain.

---

## 5. Anonymous functions

Bina naam ka function, jo variable mein store hota hai:

```js
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

const multiplyNumbers = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // 20
```

Variable ke naam se function call hota hai.

---

## 6. Default parameters

Agar call mein argument na diya jaye to parameter ki **pehle se tay value** use hoti hai.

```js
function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
```

Doosri misaal:

```js
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + amount * taxRate;
};

console.log(calculateTotal(100)); // 105
```

`taxRate` nahi diya, to `0.05` use hua: `100 + (100 * 0.05) = 105`.

---

## 7. Arrow functions

Function likhne ka chhota tareeqa. `function` keyword nahi chahiye, aur parameters aur body ke beech `=>` aata hai.

**Regular function:**

```js
function greetings(name) {
  console.log("Hello, " + name + "!");
}
```

**Arrow function:**

```js
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```

### Arrow function ke qaide

**1. Ek parameter ho to brackets hata sakte ho:**

```js
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```

**2. Koi parameter na ho to brackets lazmi hain:**

```js
const greetings = () => {
  console.log("Hello");
};
```

**3. Ek line ki body ho to `{}` aur `return` dono hata sakte ho (implicit return):**

```js
const greetings = (name) => console.log("Hello, " + name + "!");
const square = (number) => number * number;

console.log(square(5)); // 25
```

**4. `{}` ke saath `return` likhna zaroori hai:**

```js
const calculateArea = (width, height) => {
  return width * height;
};

console.log(calculateArea(5, 3)); // 15
```

**5. `{}` hataye to `return` bhi hatao, warna SyntaxError:**

```js
// Ghalat: SyntaxError
const calculateArea = (width, height) => return width * height;

// Sahi
const calculateArea = (width, height) => width * height;
```

**Yaad rakho:** yeh chhota syntax sirf arrow functions mein chalta hai. Regular function mein aise brackets/braces hataye to error aata hai:

```js
// Ghalat
function greetings name console.log("Hello, " + name + "!");
```

Ek aur misaal:

```js
const cube = (x) => {
  return x * x * x;
};

console.log(cube(3)); // 27

const calculateArea2 = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea2(5, 10));
// "The area of the rectangle is 50 square units."
```

### Arrow function kab use karein?

Personal projects mein aksar hamesha. Team mein dekho ke codebase mein pehle se kaunsa style hai.

### Quick table

| Situation              | Syntax                            |
| ---------------------- | --------------------------------- |
| Ek parameter           | `name => ...` (brackets optional) |
| Koi parameter nahi     | `() => ...` (brackets lazmi)      |
| Do ya zyada parameters | `(a, b) => ...` (brackets lazmi)  |
| Ek line ki body        | `{}` aur `return` dono hata do    |
| `{}` ke saath          | `return` likhna zaroori           |

---

## 8. Scope (Global, Local, Block)

Scope ka matlab hai ke variable code ke kin hissoon mein nazar aata hai.

### Global scope

Sab se bahar wala scope. Yahan ke variables har jagah accessible hain. Kam istemal karo (naming conflicts aur sambhalna mushkil).

```js
let globalVar = "I'm a global variable";

function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```

### Local scope

Function ke andar banaya variable sirf usi function mein accessible hota hai.

```js
function greet() {
  let message = "Hello, local scope!";
  console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // ReferenceError
```

### Block scope

`let` aur `const` se banay variables sirf apne `{}` block (jaise `if`, `for`, `while`) ke andar accessible hote hain.

```js
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // "I'm in a block"
}
// console.log(blockVar); // ReferenceError
```

| Scope      | Kahan accessible?                  |
| ---------- | ---------------------------------- |
| **Global** | Poore code mein                    |
| **Local**  | Sirf function ke andar             |
| **Block**  | Sirf `{}` ke andar (`let`/`const`) |

---

## 9. Calculator lab

```js
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5)); // 7
console.log(calculateSum(10, 10)); // 20
console.log(calculateSum(5, 5)); // 10

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5)); // 17
console.log(calculateDifference(12, 1)); // 11
console.log(calculateDifference(17, 9)); // 8

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5)); // 65

function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

console.log(calculateQuotient(7, 11)); // 0.6363636363636364
console.log(calculateQuotient(3, 0)); // "Error: Division by zero"

function calculateSquare(num) {
  return num ** 2; // ya Math.pow(num, 2)
}

console.log(calculateSquare(2)); // 4
console.log(calculateSquare(9)); // 81

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25)); // 5
console.log(calculateSquareRoot(100)); // 10
```

**Ahem nukte:**

- Zero se divide karne par JavaScript error nahi deta, `Infinity` deta hai. Is liye `num2 === 0` check lagaya.
- Error string bilkul exact honi chahiye: `"Error: Division by zero"` (`Error` mein do `r`, `zero` small `z`).
- `Math.pow(5, 2)` aur `5 ** 2` dono `25` dete hain.
- `Math.sqrt(9)` ka jawab `3`.
- Ternary version: `return num2 === 0 ? "Error: Division by zero" : num1 / num2;`

---

## 10. Boolean Check lab (`booWho`)

**Maqsad:** function jo `true` return kare agar argument boolean primitive (`true` ya `false`) ho, warna `false`.

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); // false
console.log(booWho({ a: 1 })); // false
console.log(booWho(1)); // false
console.log(booWho(NaN)); // false
console.log(booWho("a")); // false
console.log(booWho("true")); // false
console.log(booWho("false")); // false
```

**`typeof` operator value ki type batata hai:**

| Value                 | `typeof`     |
| --------------------- | ------------ |
| `true`, `false`       | `"boolean"`  |
| `1`, `NaN`            | `"number"`   |
| `"a"`, `"true"`       | `"string"`   |
| `[1, 2, 3]`, `{a: 1}` | `"object"`   |
| `[].slice`            | `"function"` |

**Ahem sabaq:**

- Function ko parameter chahiye (`booWho(bool)`). `booWho()` khali brackets ke saath value pakad hi nahi sakta.
- `return true;` har cheez par `true` deta hai, isi se sirf tests 2 aur 3 pass hue the.
- `"true"` (string) aur `true` (boolean) alag cheezein hain.
- `==` type convert karta hai, `===` nahi. `!!bool` sirf truthy/falsy check karta hai, type nahi.

---

## 11. Email Masking lab

**Maqsad:** email ke username ke beech ke characters ko `*` se chhupana.

```
myEmail@email.com  →  m*****l@email.com
```

### Methods ek ek karke

**`indexOf`**: character ki position (ginti 0 se):

```js
"info@test.dev".indexOf("@"); // 4
"info@test.dev".indexOf("z"); // -1 (nahi mila)
```

**`slice(start, end)`**: `start` se `end` se pehle tak:

```js
const word = "hello";
word.slice(0, 1); // "h"
word.slice(1, 4); // "ell"
word.slice(2); // "llo"
word.slice(-1); // "o" (aakhri)
word.slice(0, -1); // "hell"
```

**`repeat`**: string dohrata hai:

```js
"*".repeat(3); // "***"
"*".repeat(0); // ""
```

**`length`**: property hai, `()` nahi lagte:

```js
"info".length; // 4
```

**`replace`**: pehli match badalta hai (`replaceAll` sab):

```js
"hello".replace("l", "L"); // "heLlo"
"hello".replaceAll("l", "L"); // "heLLo"
```

### Solution

```js
function maskEmail(email) {
  const at = email.indexOf("@");
  const username = email.slice(0, at);
  const domain = email.slice(at);

  const first = username.slice(0, 1);
  const last = username.slice(-1);
  const star = "*".repeat(username.length - 2);

  return first + star + last + domain;
}

const email = "koi.email@example.com";

console.log(maskEmail("info@test.dev")); // i**o@test.dev
console.log(maskEmail("user@domain.org")); // u**r@domain.org
console.log(maskEmail("apple.pie@example.com")); // a*******e@example.com
console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com

console.log(maskEmail(email));
```

**Step by step (`"info@test.dev"`):**

| Variable   | Value                          |
| ---------- | ------------------------------ |
| `at`       | `4`                            |
| `username` | `"info"`                       |
| `domain`   | `"@test.dev"` (`@` shamil hai) |
| `first`    | `"i"`                          |
| `last`     | `"o"`                          |
| `star`     | `"**"` (4 - 2 = 2)             |
| return     | `"i**o@test.dev"`              |

**Chhota version:**

```js
function maskEmail(email) {
  const at = email.indexOf("@");
  return email[0] + "*".repeat(at - 2) + email[at - 1] + email.slice(at);
}
```

**Nukte:**

- Stars ki ginti = `username.length - 2`.
- Yeh solution kam az kam 2 character ke username maan kar chalta hai.
- `email` variable function ke **bahar** hona chahiye aur `console.log(maskEmail(email))` zaroori hai.

---

## 12. Loan Qualification Checker workshop

### Step 1: Variables

```js
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;
```

Naam camelCase mein (`min` + `Income` + `For` + `Duplex`). Numbers mein comma nahi, aur quotes nahi.

### Steps 2 se 5: `getLoanMessage` function

```js
function getLoanMessage(annualIncome, creditScore) {
  if (
    annualIncome >= minIncomeForDuplex &&
    creditScore >= minCreditScoreForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}
```

**Nukte:**

- `&&` (AND): dono shartein sahi hon.
- `>=` ka matlab "barabar ya zyada".
- Tarteeb zaroori hai: duplex (sab se mehnga), phir condo, phir car.
- `else if` sirf tab check hota hai jab pichli conditions ghalat hon.
- `else` mein condition nahi likhte, yeh "baaqi sab" case hai.

### Step aakhir: Function test karna

```js
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg); // You qualify for a duplex, condo, and car loan.
console.log(condoLoanMsg); // You qualify for a condo and car loan.
console.log(carLoanMsg); // You qualify for a car loan.
console.log(noLoanMsg); // You don't qualify for any loans.
```

| Variable        | Income | Score | Kyun                                        |
| --------------- | ------ | ----- | ------------------------------------------- |
| `duplexLoanMsg` | 85000  | 850   | Duplex ki dono shartein sahi                |
| `condoLoanMsg`  | 65000  | 690   | Score 700 se kam, duplex ghalat. Condo sahi |
| `carLoanMsg`    | 45000  | 660   | Score 680 se kam, condo ghalat. Car sahi    |
| `noLoanMsg`     | 25000  | 550   | Teeno ghalat, `else` chala                  |

**Function declaration** (`function getLoanMessage...`) hoisting ki wajah se call se baad bhi likha ja sakta hai. Arrow function (`const`) ko call se **pehle** likhna parta hai.

---

## 13. Celsius to Fahrenheit lab

**Formula:**

```js
fahrenheit = celsius * (9 / 5) + 32;
```

```js
function convertCtoF(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertCtoF(-30)); // -22
console.log(convertCtoF(-10)); // 14
console.log(convertCtoF(0)); // 32
console.log(convertCtoF(20)); // 68
console.log(convertCtoF(30)); // 86
```

**Chhota version:**

```js
function convertCtoF(celsius) {
  return celsius * (9 / 5) + 32;
}
```

**Nukte:**

- `*` aur `/` ki priority barabar hai aur woh left se right chalte hain, `+` se pehle. Isliye `celsius * 9/5 + 32` aur `celsius * (9/5) + 32` ka result ek jaisa hai.
- Hisaab (`30`): `30 * 9 = 270`, `270 / 5 = 54`, `54 + 32 = 86`.
- Paani `0°C` par jamta hai jo `32°F` hai, isliye `+ 32`.

---

## 14. Card Counter lab

**Rules:**

| Card                     | Count mein tabdeeli |
| ------------------------ | ------------------- |
| `2, 3, 4, 5, 6`          | `+1`                |
| `7, 8, 9`                | koi tabdeeli nahi   |
| `10, "J", "Q", "K", "A"` | `-1`                |

- Count `> 0` ho to `"<count> Bet"`.
- Count `0` ya negative ho to `"<count> Hold"`.

```js
let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

**`switch` ke nukte:**

- `switch (card)` value ko har `case` se compare karta hai.
- Khali `case` neeche wale `case` ke code mein "gir" jate hain (fall-through), isliye kai cases ek hi kaam share karte hain.
- `break` switch ko rok deta hai.
- `default` tab chalta hai jab koi `case` match na ho.

**Count badalne ke short tareeqe:**

```js
count++; // count = count + 1
count--; // count = count - 1
count += 1; // count = count + 1
```

**Test 7 ka hisaab** (`3, 7, "Q", 8, "A"`):

| Card | Kya hua           | count |
| ---- | ----------------- | ----- |
| 3    | `+1`              | 1     |
| 7    | koi tabdeeli nahi | 1     |
| "Q"  | `-1`              | 0     |
| 8    | koi tabdeeli nahi | 0     |
| "A"  | `-1`              | -1    |

Result: `"-1 Hold"`.

**`if / else if` wala alternative:**

```js
let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    // kuch nahi
  } else {
    count--;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
}
```

**Nukte:**

- `count` function ke **bahar** (global) `let` se banao, taake pichli calls ka hisaab yaad rahe.
- Condition `count > 0` hai, `>= 0` nahi, kyunke zero par `Hold` chahiye.
- `" Bet"` aur `" Hold"` mein shuru ka space zaroori hai.
- Khud test karte waqt `count = 0;` karke dobara shuru karo.

---

## 15. Leap Year lab

**Rules:**

- 4 se divide ho to leap year.
- Lekin 100 se bhi divide ho to leap year **nahi**.
- Lekin 400 se bhi divide ho to phir leap year **hai**.

`%` (modulus) baqi (remainder) deta hai. Baqi `0` ho to number poora divide hota hai:

```js
2024 % 4; // 0
1901 % 4; // 1
1900 % 100; // 0
1900 % 400; // 300
2000 % 400; // 0
```

**Condition ek line mein:**

```js
year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
```

```js
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

const year = 2024;
const result = isLeapYear(year);
console.log(result); // 2024 is a leap year.
```

**Ternary version:**

```js
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
}
```

| year   | Nateeja                                                 |
| ------ | ------------------------------------------------------- |
| `2024` | `2024 is a leap year.`                                  |
| `2000` | `2000 is a leap year.`                                  |
| `1900` | `1900 is not a leap year.` (100 se divide, 400 se nahi) |
| `1901` | `1901 is not a leap year.` (4 se divide nahi)           |

**Nukte:**

- Template string (backticks) mein `${year}` se value string mein aati hai.
- `year` variable function ke bahar, aur `result` mein return value rakhni hai.
- `||` OR (koi ek sahi), `&&` AND (dono sahi), `!==` "barabar nahi".

---

## 16. Truncate String lab

**Maqsad:** string lambi ho to `num` characters tak kaat kar aakhir mein `...` lagao, warna string jaisi hai waisi wapis.

```js
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// Peter Piper...

console.log(truncateString("A-", 1));
// A...

console.log(truncateString("Absolutely Longer", 2));
// Ab...
```

**Ternary version:**

```js
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

**Nukte:**

- `>` use hota hai, `>=` nahi, kyunke barabar length par string unchanged wapis deni hai.
- `slice(0, num)` pehle `num` characters deta hai.
- `if` mein `return` hone par function wahin ruk jata hai, neeche wali `return str;` nahi chalti.

---

## 17. Confirm Ending lab

**Maqsad:** check karo pehli string dusri string par khatam hoti hai ya nahi, bina `.endsWith()` ke.

**Idea:** pehli string ke **aakhri** `target.length` characters kaato aur target se compare karo. Negative `slice` aakhir se ginta hai:

```js
"Hello".slice(-1); // "o"
"Hello".slice(-3); // "llo"
"Hello".slice(-5); // "Hello"
```

```js
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sage")); // false
console.log(confirmEnding("Abstraction", "action")); // true
```

**Doosra tareeqa (`substring`):**

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}
```

**Nukte:**

- Tests parameter ke **naam** nahi, sirf **tarteeb** dekhte hain. `str1, str2` bhi theek hai, lekin `str, target` zyada saaf naam hain.
- Comparison (`===`) khud `true`/`false` deta hai, `if` ki zaroorat nahi.
- `slice(target.length)` (minus ke baghair) shuru se kaatta hai, ghalat hai.

---

## 18. Aam ghaltiyan (Common mistakes)

| Ghalti                                        | Nateeja                                  | Hal                          |
| --------------------------------------------- | ---------------------------------------- | ---------------------------- |
| `console.log` likha, `return` nahi            | Test fail, function `undefined` deta hai | `return` use karo            |
| `=` se compare kiya (`if (x = 0)`)            | Value assign ho jati hai                 | `===` use karo               |
| String mein spelling/capital ka farq          | Exact-match test fail                    | String bilkul copy karo      |
| `const` se woh variable banaya jo badalta hai | `count++` error deta hai                 | `let` use karo               |
| Global variable function ke andar banaya      | Har call par reset                       | Function ke bahar banao      |
| `{}` ke saath `return` bhool gaye (arrow)     | `undefined` milta hai                    | `return` likho ya `{}` hatao |
| `{}` hataye lekin `return` rakha              | SyntaxError                              | `return` bhi hatao           |
| Parameter na likha (`booWho()`)               | Value pakadi nahi jati                   | `booWho(bool)`               |
| `>=` ki jagah `>` ya ulta                     | Boundary case ghalat                     | Shart dobara parho           |
| Number ko quotes mein likha                   | Number string ban jata hai               | Quotes hatao                 |
| Number mein comma (`60,000`)                  | Error                                    | `60000` likho                |

---

## 19. Review summary table

| Topic                                  | Ek line mein                                   |
| -------------------------------------- | ---------------------------------------------- |
| Function                               | Reusable code ka block                         |
| Declare / Call                         | Banana / chalana (`name()`)                    |
| Parameter / Argument                   | Placeholder / asal value                       |
| `return`                               | Value wapis deta hai aur function rok deta hai |
| Default return                         | `undefined`                                    |
| Default parameter                      | Argument na ho to pehle se tay value           |
| Anonymous function                     | Bina naam ka, variable mein store              |
| Arrow function                         | Chhota syntax: `=>`                            |
| Global scope                           | Poore code mein accessible                     |
| Local scope                            | Sirf function ke andar                         |
| Block scope                            | Sirf `{}` ke andar (`let`/`const`)             |
| `typeof`                               | Value ki type string mein batata hai           |
| `%`                                    | Baqi (remainder)                               |
| `&&`, `\|\|`                           | AND, OR                                        |
| `slice`, `indexOf`, `repeat`, `length` | String ke kaam ke tools                        |
| `switch`                               | Kai cases ek variable ki value se check karna  |
| Ternary                                | `shart ? agar_sahi : warna`                    |

**Mubarak ho, aapne functions ke saare topics aur labs mukammal kar liye hain.**
