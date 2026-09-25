## Conditionals in JavaScript

Conditionals JavaScript ko yeh decide karne mein madad karte hain ke **kaunsa code chalana hai** aur **kaunsa nahi**, depending on ke koi condition **true** hai ya **false**.
Simple lafzon mein: Conditionals JavaScript ko **decision lene** ki power dete hain — bilkul jaise hum real life mein sochte hain: _"Agar aisa hai, to yeh karo — warna woh karo."_

JavaScript mein conditionals banane ke kai tareeqe hain:

---

### 1. `if` Statement

Sabse basic conditional. Agar condition **true** ho, to `{ }` ke andar wala code chalta hai — warna skip ho jata hai.

```js
let age = 20;

if (age >= 18) {
  console.log("Aap adult hain.");
}
```

**Kab use karein:** Jab sirf ek condition check karni ho, aur agar woh false ho to kuch bhi na karna ho.

---

### 2. `if...else` Statement

Agar condition **true** ho to ek block chalta hai, **false** ho to doosra block chalta hai.

```js
let age = 15;

if (age >= 18) {
  console.log("Aap adult hain.");
} else {
  console.log("Aap minor hain.");
}
```

**Kab use karein:** Jab do possible outcomes hon — ek true ke liye, ek false ke liye.

---

### 3. `if...else if...else` Statement

Jab **multiple conditions** check karni hon, ek ke baad ek.

```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}
// Output: "Grade: A"
```

**Kab use karein:** Jab do se zyada possible outcomes hon — jaise grading system, ya multiple price ranges.

> **Zaroori:** JavaScript conditions ko **upar se neeche** check karta hai aur jaise hi koi condition true milti hai,
> wahi block chalta hai aur baaki sab skip ho jate hain — is liye order matter karta hai.

---

### 4. Nested `if` Statements

Ek `if` statement ke andar doosra `if` statement — jab ek condition ke andar bhi further check karna ho.

```js
let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Entry allowed.");
  } else {
    console.log("ID required for entry.");
  }
} else {
  console.log("Underage — entry denied.");
}
```

**Kab use karein:** Jab pehli condition true hone ke baad bhi ek aur condition check karni ho.

> **Note:** Zyada nesting (3-4+ levels) code ko mushkil bana deta hai — is se bachne ke liye `&&` (logical AND) use kar sakte ho:

```js
if (age >= 18 && hasID) {
  console.log("Entry allowed.");
}
```

---

### 5. `switch` Statement

Jab ek hi variable ki **multiple specific values** check karni hon, `switch` statement `if...else if` se zyada clean aur readable hota hai.

```js
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // "Wednesday"
```

**Kab use karein:** Jab ek variable ki exact values check karni hon (jaise days, months, status codes) — `if...else if` ke bajaye zyada readable hota hai.

> **Zaroori:** Har `case` ke baad `break;` lagana **zaroori** hai — warna JavaScript agle case ko bhi chalata rahega (isse **fall-through** kehte hain):

```js
let x = 1;
switch (x) {
  case 1:
    console.log("One");
  // break; missing hai
  case 2:
    console.log("Two");
    break;
}
// Output: "One" AND "Two" dono print honge (galat)
```

`default` case tab chalta hai jab koi bhi case match na ho — yeh optional hai lekin likhna acha practice hai.

---

### 6. Ternary Operator (Short Conditional)

Jaisa Operators section mein cover kiya tha, ternary operator `if...else` ka short-hand hai — jab sirf ek simple value return karni ho.

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

**Kab use karein:** Jab condition simple ho aur sirf ek value assign/return karni ho — poora `if...else` likhne ki zarurat na ho.

---

### Truthy aur Falsy Values

JavaScript mein `if` condition sirf `true`/`false` hi nahi, balke **kisi bhi value** ko check kar sakta hai — JavaScript automatically usay true ya false mein convert kar deta hai.

**Falsy values** (yeh sab `if` mein **false** ki tarah treat hote hain):

```js
(false, 0, "", null, undefined, NaN);
```

**Baaki sab kuch truthy hai** (including `"0"` string, `[]` empty array, `{}` empty object):

```js
if (0) {
  console.log("Yeh nahi chalega");
}

if ("Hello") {
  console.log("Yeh chalega — kyunki non-empty string truthy hai");
}

if ("") {
  console.log("Yeh nahi chalega — empty string falsy hai");
}
```

**Kab use karein:** Jab kisi variable mein value hai ya nahi yeh check karna ho, bina explicitly `=== null` ya `=== ""` likhe:

```js
let username = "";

if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Username nahi diya gaya");
}
```

---

### Quick Summary — Conditionals

| Type                  | Kab Use Karein                                          |
| --------------------- | ------------------------------------------------------- |
| `if`                  | Ek condition check karni ho                             |
| `if...else`           | Do outcomes hon (true/false)                            |
| `if...else if...else` | Multiple conditions hon                                 |
| Nested `if`           | Ek condition ke andar aur condition check karni ho      |
| `switch`              | Ek variable ki multiple specific values check karni hon |
| Ternary (`? :`)       | Simple condition, short value return karni ho           |

---
