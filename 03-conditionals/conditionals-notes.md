# JavaScript Notes (Roman Urdu)

1. `switch` statement
2. `switch` vs `if / else if / else`
3. `undefined` aur `null`
4. Comparisons (`==`, `===`, `>`, `>=` etc.)
5. Logical operators (`&&`, `||`, `!`)
6. Truthy aur Falsy values
7. Block scope (`let`, `const`)
8. Practice questions ka review

---

## 1. Control Flow kya hota hai?

Control flow ka matlab hai ke program **conditions ke hisaab se alag alag code chalata hai**. `switch` aur `if / else if / else` dono isi kaam ke liye hain, lekin dono ka tareeqa aur use case alag hai.

---

## 2. `switch` Statement

### Definition

`switch` ek **expression evaluate** karta hai aur uski value ko ek ke baad ek `case` se **match** karta hai. Jahan match mil jaye, us `case` ka code chalta hai.

### Structure

```js
switch (expression) {
  case value1:
    // expression === value1 ho to ye chalega
    break;
  case value2:
    // expression === value2 ho to ye chalega
    break;
  default:
  // koi case match na ho to ye chalega
}
```

### Har hissa kya karta hai

| Hissa                 | Kaam                                                                 |
| --------------------- | -------------------------------------------------------------------- |
| `switch (expression)` | Wo value jise check karna hai                                        |
| `case value:`         | Agar expression is value ke barabar ho to is case ka code chalta hai |
| `break;`              | Case ka code chalne ke baad switch se bahar nikal jata hai           |
| `default:`            | Koi bhi case match na ho to chalta hai (`else` jaisa)                |

### `break` kyun zaroori hai?

`break` na ho to match hone ke baad bhi **neeche wale saare cases chalte rehte hain**, chahe wo match na hon. Isay **fall-through** kehte hain.

```js
let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  default:
    console.log("Default");
}
// Output:
// One
// Two
// Default
```

`x = 1` tha, lekin `break` na hone ki wajah se `case 2` aur `default` bhi chal gaye.

### `default` ke rules

- `default` **optional** hai (likhna zaroori nahi).
- Sirf tab chalta hai jab koi bhi case match na ho.
- Convention ye hai ke `default` ko **switch ke end mein** rakha jata hai.

### Example: Din ka naam (Day of the week)

```js
const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there.");
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}
```

**Kaise kaam karta hai:**

1. `dayOfWeek` ki value `3` hai.
2. `case 1` aur `case 2` match nahi hote, skip.
3. `case 3` match hota hai, to `"It's Wednesday! We're halfway there."` print hota hai.
4. `break` switch ko khatam kar deta hai, `default` tak code jata hi nahi.
5. Agar value 1 se 7 ke bahar hoti (jaise `10`), to `default` chalta.

### `switch` mein Strict Comparison (`===`)

`switch` **strict equality (`===`)** use karta hai. Yani value aur **type dono** check hote hain, type coercion nahi hoti.

```js
let x = "5";

switch (x) {
  case 5:
    console.log("Number 5");
    break;
  default:
    console.log("No match");
}
// Output: No match
```

`"5"` (string) aur `5` (number) ke types alag hain, isliye match nahi hua. Ye behaviour **predictable** hai aur chhoti bugs se bachata hai.

---

## 3. `if / else if / else`

`if / else if` zyada **flexible** hai:

- **Complex conditions** likh sakte hain (`>=`, `<`, `&&`, `||` wagaira).
- Har clause mein **alag alag variables** check kar sakte hain.

### Example: Loan eligibility

```js
let creditScore = 720;
let annualIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
  eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
  eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
  eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
  eligibilityStatus = "Not eligible due to low credit score.";
} else {
  eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
```

**Kaise chala:**

- Pehli condition: `720 >= 750` galat, to fail.
- Doosri condition: `720 >= 700` sahi **aur** `60000 >= 50000` sahi, to pass.
- Output: `"Eligible for standard loan rates."`
- Baqi conditions check hi nahi hotin, kyunke ek condition pass hone ke baad chain ruk jati hai.

**Yahan `switch` kyun nahi?** Kyunke yahan **do variables** (`creditScore`, `annualIncome`) ek saath check ho rahe hain aur conditions range wali hain. `switch` sirf "barabar hai ya nahi" check karta hai.

---

## 4. `switch` vs `if / else if` (Comparison)

|                | `switch`                               | `if / else if`                             |
| -------------- | -------------------------------------- | ------------------------------------------ |
| Kab use karein | Ek variable, kai fixed values          | Complex conditions, kai variables          |
| Readability    | Bohat values hon to behtar aur concise | Flexible logic ke liye behtar              |
| Comparison     | Sirf strict equality (`===`)           | Koi bhi condition (`>`, `<`, `&&`, `\|\|`) |

**Yaad rakhein:**

- Ek variable ko bohat si values se compare karna ho: `switch` concise hota hai.
- Complex logic ya kai variables: `if / else if`.
- Choice aakhir mein code ki zaroorat aur **personal ya team ke coding style** par bhi depend karti hai.
- `switch` ke hamesha tez hone ka koi guarantee nahi.

---

## 5. `undefined` aur `null`

### `undefined`

Jab variable **declare** ho lekin usay **value assign na ki jaye**, to wo `undefined` hota hai. Ye uninitialized variables ki default value hai. Function ka wo parameter jis ka argument nahi diya gaya, wo bhi `undefined` hota hai.

```js
let a;
console.log(a); // undefined

function greet(name) {
  console.log(name);
}
greet(); // undefined (argument nahi diya)
```

### `null`

Ye **jaan boojh kar** di gayi "khaali value" hai. Jab aap khud batana chahte hain ke is variable mein abhi koi value nahi hai.

```js
let b = null;
```

### Farq (Difference)

|                    | `undefined`              | `null`                              |
| ------------------ | ------------------------ | ----------------------------------- |
| Matlab             | Value assign hi nahi hui | Jaan boojh kar "kuch nahi" set kiya |
| Kaun set karta hai | JavaScript khud          | Programmer khud                     |

Yaad rakhne ki line: _Variables without a value are `undefined`, while `null` represents an intentional absence of a value._

---

## 6. Comparisons aur `null` / `undefined`

### 6.1 `==` (Loose equality)

`==` pehle **type coercion** karta hai (types ko same banane ki koshish), phir compare karta hai.

`null` aur `undefined` ke liye khaas rule: **sirf ek doosre ke aur apne aap ke barabar** hote hain.

```js
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(null == ""); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false
console.log(undefined == NaN); // false
```

### 6.2 `===` (Strict equality)

`===` **value aur type dono** check karta hai, coercion nahi karta.

```js
console.log(null === undefined); // false
```

Dono ke types alag hain, isliye `false`.

### 6.3 `null` ka numeric behaviour

Numeric context (`<`, `>`, `<=`, `>=`) mein `null`, `0` ban jata hai.

```js
console.log(null < 0); // false (0 < 0 false hai)
console.log(null > 0); // false (0 > 0 false hai)
console.log(null >= 0); // true  (0 >= 0 true hai)
console.log(null == 0); // false
```

**Ye confusing kyun hai?**
`null >= 0` `true` hai, lekin `null == 0` `false` hai. Wajah ye hai ke `>=` `null` ko number `0` bana leta hai, jabke `==` ka apna alag rule hai jo `null` ko `0` nahi banata. Isliye `null` ko comparisons mein khaas dhyan se use karein.

### 6.4 `undefined` ka numeric behaviour

Numeric context mein `undefined`, `NaN` (Not a Number) ban jata hai. `NaN` ke saath **har comparison `false`** hota hai.

```js
console.log(undefined < 0); // false (NaN < 0 false)
console.log(undefined > 0); // false
console.log(undefined >= 0); // false (NaN >= 0 false)
console.log(undefined == 0); // false
```

### 6.5 Summary table

|             | Numeric context mein                    | `==` se barabar              |
| ----------- | --------------------------------------- | ---------------------------- |
| `undefined` | `NaN` banta hai, har comparison `false` | sirf `null` aur khud ke      |
| `null`      | `0` banta hai                           | sirf `undefined` aur khud ke |

### 6.6 Best practice

Hamesha **`===`** use karein, khaas taur par `null` aur `undefined` ke saath. Isse type coercion ki wajah se aane wali ajeeb bugs se bach jate hain aur code ka behaviour predictable rehta hai.

---

## 7. Logical Operators

| Operator | Naam | Matlab                                              |
| -------- | ---- | --------------------------------------------------- |
| `&&`     | AND  | **Dono** conditions `true` hon to result `true`     |
| `\|\|`   | OR   | **Koi ek bhi** condition `true` ho to result `true` |
| `!`      | NOT  | `true` ko `false`, `false` ko `true` bana deta hai  |

(`XOR` JavaScript ka `||` nahi hai, `||` hamesha OR hai.)

### Short-circuit evaluation

`||` mein agar pehli side `true` mil jaye, to JavaScript doosri side check hi nahi karta.

```js
console.log(5 === 2 + 3 || 4 == 2);
// 2 + 3 = 5, to 5 === 5 true hai
// || mein pehli side true, to 4 == 2 check hi nahi hota
// Output: true
```

### `&&` ka example

```js
let x = 5;
if (x > 1 && x < 10) {
  console.log("x is between 1 and 10");
} else {
  console.log("x is not between 1 and 10");
}
// x > 1 true, x < 10 true, dono true, to if ka block chalta hai
// Output: x is between 1 and 10
```

---

## 8. Truthy aur Falsy Values

**Definition:** Truthy ya falsy wo value hoti hai jo **Boolean context** (jaise `if` ki condition) mein aane par `true` ya `false` maani jaati hai.

### Falsy values (ye `false` maani jati hain)

- `false`
- `0`
- `""` (khaali string)
- `null`
- `undefined`
- `NaN`

### Truthy values

Jo falsy nahi hain wo sab truthy hain, jaise `1`, `"hello"`, `-5`.

```js
if (1) {
  console.log("True!");
}
// 1 truthy hai, to output: True!
```

---

## 9. Block Scope (`let` aur `const`)

`let` aur `const` se bane variables **block scope** rakhte hain. Yani wo sirf usi `{ }` block ke andar maujood hote hain jahan unhe banaya gaya.

```js
const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);
```

**Step by step:**

1. `1 == "1"` `true` hai (`==` type coercion karta hai), to `if` ka block chalta hai.
2. Andar `a + b` yani `2 + 3 = 5` print hota hai.
3. `let b` sirf `if` block ke andar hai. Block ke bahar `console.log(b)` karein to **`ReferenceError`** aata hai, kyunke `b` wahan defined hi nahi.

**Output:** `5`, aur phir error.

Note: `const` se bana variable dobara assign nahi ho sakta.

---

## 10. Practice Questions Ka Review

### Switch aur `break`

**Q: `break` na likhein to kya hota hai?**
Jawab: Code agle case mein chalta rehta hai, chahe wo match kare ya na kare (**fall-through**). Error nahi aata, aur `break` na hone se behaviour badal jata hai.

**Q: `switch` ka `if/else` par kya fayda hai?**
Jawab: Ek variable ko bohat si values se compare karne ke liye `switch` zyada concise hota hai.

**Q: `switch` kaun si comparison use karta hai?**
Jawab: Strict equality (`===`).

### Fall-through ka example

```js
let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}
```

**Output:**

```
Some cars are 4x4.
Trucks can carry heavy loads.
```

**Wajah:** `"car"` match hua aur print hua. Is case mein `break` nahi tha, to fall-through se `"truck"` ka code bhi chala. Wahan `break` tha, to switch khatam ho gaya aur `default` tak nahi pohancha.

### `null` aur `undefined` ke sawal

| Expression           | Result  | Wajah                                  |
| -------------------- | ------- | -------------------------------------- |
| `null === undefined` | `false` | Types alag hain                        |
| `null == undefined`  | `true`  | `==` ka khaas rule                     |
| `null >= 0`          | `true`  | `null` numeric mein `0` banta hai      |
| `undefined > 0`      | `false` | `undefined` `NaN` banta hai            |
| `undefined < 0`      | `false` | `NaN` ke saath har comparison `false`  |
| `undefined == 0`     | `false` | `undefined` sirf `null` ke barabar hai |

### Doosre sawalon ke jawab

| Sawal                                | Jawab                                                        |
| ------------------------------------ | ------------------------------------------------------------ |
| `\|\|` kaun sa operation hai?        | OR                                                           |
| `5 === 2 + 3 \|\| 4 == 2` ka output? | `true`                                                       |
| Truthy/falsy kya hai?                | Boolean context mein `true` ya `false` maani jane wali value |
| `if (1) { console.log("True!") }`    | `True!`                                                      |
| `null` aur `undefined` mein farq?    | Value ke baghair `undefined`, jaan boojh kar khaali `null`   |
| `x = 5`, `x > 1 && x < 10`           | `x is between 1 and 10`                                      |

---

## 11. Quick Revision (Yaad rakhne wali baatein)

1. `switch` ek variable ko kai values se match karta hai, **strict equality (`===`)** ke saath.
2. `break` na ho to **fall-through** hota hai.
3. `default` optional hai aur end mein likha jata hai.
4. Complex conditions ya kai variables ke liye `if / else if` use karein.
5. `undefined` = value assign nahi hui, `null` = jaan boojh kar khaali value.
6. `null == undefined` `true`, lekin `null === undefined` `false`.
7. Numeric context mein `null` -> `0`, `undefined` -> `NaN`.
8. `NaN` ke saath har comparison `false` hota hai.
9. `&&` = AND, `||` = OR, `!` = NOT.
10. Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
11. `let` / `const` block scope rakhte hain, block ke bahar access karne par `ReferenceError` aata hai.
12. Comparisons mein hamesha `===` use karna behtar hai.
