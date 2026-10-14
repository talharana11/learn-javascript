# JavaScript Booleans: Mukammal Notes (Roman Urdu)

Is file mein wo sab topics hain jo is chat mein booleans se judey hue parhe gaye: boolean kya hai, equality/inequality operators, comparison operators, truthy/falsy, logical operators, `if` statement, ternary, aur wo functions jo boolean return karte hain.

---

## Fehrist (Contents)

1. Boolean kya hai?
2. Boolean variable aur `if/else`
3. Equality operator (`==`)
4. Strict equality operator (`===`)
5. Inequality operator (`!=`)
6. Strict inequality operator (`!==`)
7. Best practice: `===` aur `!==`
8. Comparison operators (`>`, `>=`, `<`, `<=`)
9. Logical NOT (`!`)
10. Truthy aur Falsy values
11. `if` statement (Step 7 ka matlab)
12. `else` aur `else if`
13. Ternary operator
14. Logical AND, OR, Nullish (`&&`, `||`, `??`)
15. Wo functions jo boolean return karte hain (`isNaN`, `Number.isNaN`)
16. Aam ghaltiyan
17. Mukhtasar summary table

---

## 1. Boolean kya hai?

**Boolean** ek data type hai jis ki **sirf do values** hoti hain:

- `true` (sahi / haan)
- `false` (ghalat / nahi)

### Boolean kyun zaroori hai?

Boolean ki wajah se program **faisla (decision)** le sakta hai. Jab bhi aap ko kisi cheez ka jawab "haan ya nahi" mein chahiye ho, boolean use hota hai. Misaal:

- Kya user logged in hai? (`true` / `false`)
- Kya user ki umar 18 se zyada hai?
- Kya password sahi hai?
- Kya user is feature ko use kar sakta hai?

### Boolean banane ka tareeqa

```js
let isLoggedIn = true;
let hasPaid = false;
```

**Dhyan rahe:**

- `true` aur `false` **chhote haroof (lowercase)** mein likhte hain. `True` ya `TRUE` likhna ghalat hai.
- Inhein **quotes mein nahi** likhte. `"true"` ek **string** hai, boolean nahi.

```js
console.log(typeof true); // "boolean"
console.log(typeof "true"); // "string"
```

### Naming ki convention

Boolean variables ke naam aam tor par `is`, `has`, `can`, `should` se shuru hote hain, taake parhne mein sawal jaisa lage:

```js
let isOnline = true;
let hasDeveloperJob = true;
let canEdit = false;
```

---

## 2. Boolean variable aur `if/else`

Lesson ki misaal:

```js
let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true
```

- `isOldEnoughToDrive` naam ka variable banaya aur usmein `true` rakha.
- `console.log` ne `true` print kiya.

Ab isay **conditional** mein use karte hain:

```js
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
  console.log("You're old enough to drive");
} else {
  console.log("Sorry, you are not old enough to drive");
}
```

### Line by line

- `if (isOldEnoughToDrive)`: check karo ke variable `true` hai ya nahi.
- Agar `true` hai, to pehla block chalega: `You're old enough to drive`.
- Agar `false` hota, to `else` wala block chalta: `Sorry, you are not old enough to drive`.
- Yahan variable `true` hai, isliye pehla message print hoga.

**Zaroori baat:** boolean variable ko direct condition mein likh sakte hain. `if (isOldEnoughToDrive === true)` likhne ki zaroorat nahi, `if (isOldEnoughToDrive)` kafi hai.

**Conditional kya hai?** Wo cheez jo aap ke code ko kisi **shart** ke hisaab se faisla karne deti hai. Ye `if/else` statement kehlata hai.

---

## 3. Equality Operator (`==`)

Do values ko compare karne ke liye equality operator use hota hai. Compare karne ka result hamesha ek **boolean** (`true` ya `false`) hota hai.

```js
console.log(5 == "5"); // true
```

### Kaise kaam karta hai?

1. JavaScript dekhta hai ke ek taraf number `5` hai aur doosri taraf string `"5"`.
2. Wo string `"5"` ko **number `5` mein convert** kar deta hai. Is convert karne ko **type coercion** kehte hain.
3. Phir `5` aur `5` ko compare karta hai. Dono barabar hain, to `true`.

**Khulasa:** `==` pehle **type badalta hai**, phir **value compare** karta hai.

### Aur misalein

```js
console.log(0 == false); // true  (false convert ho kar 0 banta hai)
console.log("" == 0); // true  ("" convert ho kar 0 banti hai)
console.log(1 == true); // true  (true convert ho kar 1 banta hai)
console.log(null == undefined); // true
```

Ye dekh kar andaza hota hai ke `==` kabhi kabhi **hairan karne wale** results deta hai. Isi liye isay kam use kiya jata hai.

---

## 4. Strict Equality Operator (`===`)

Ye **teen barabar** (`===`) ka operator hai. Ye **type coercion nahi karta**. Ye dono cheezein check karta hai:

1. **Type** same hai ya nahi.
2. **Value** same hai ya nahi.

Dono sahi hon tabhi `true`.

```js
console.log(5 === "5"); // false
```

### Kyun `false`?

- `5` ek **number** hai.
- `'5'` ek **string** hai.
- Type alag hai, to value dekhne ki zaroorat hi nahi, seedha `false`.

```js
console.log(5 === 5); // true  (type bhi number, value bhi 5)
console.log("5" === "5"); // true  (dono string, dono "5")
```

### `==` aur `===` ka farq

| Expression      | `==`   | `===`   |
| --------------- | ------ | ------- |
| `5` aur `"5"`   | `true` | `false` |
| `0` aur `false` | `true` | `false` |
| `""` aur `0`    | `true` | `false` |
| `5` aur `5`     | `true` | `true`  |

---

## 5. Inequality Operator (`!=`)

Ye check karta hai ke do values **barabar nahi** hain. Ye `==` ka ulta hai, aur ye bhi pehle **type coercion** karta hai.

```js
console.log(5 != "5"); // false
```

### Kyun `false`?

1. `"5"` convert ho kar number `5` banta hai.
2. `5` aur `5` barabar hain.
3. Sawal tha "kya ye barabar **nahi** hain?" Jawab: nahi, wo barabar hain, to `false`.

---

## 6. Strict Inequality Operator (`!==`)

Ye `!` ke baad **do barabar** (`!==`) ka operator hai. Ye `===` ka ulta hai aur **type coercion nahi karta**.

```js
console.log(5 !== "5"); // true
```

### Kyun `true`?

- `5` number hai, `"5"` string hai.
- Type alag hai, is liye ye barabar nahi hain.
- "Barabar nahi" wali baat sahi hai, to `true`.

### Chaaron operators ek nazar mein

| Operator | Naam              | Type coercion | `5` aur `"5"` par result |
| -------- | ----------------- | ------------- | ------------------------ |
| `==`     | Equality          | Haan          | `true`                   |
| `===`    | Strict equality   | Nahi          | `false`                  |
| `!=`     | Inequality        | Haan          | `false`                  |
| `!==`    | Strict inequality | Nahi          | `true`                   |

**Yaad rakhne ka tareeqa:** `=` ki tadaad jitni zyada, utna **strict** (sakht) check.

---

## 7. Best Practice

Professional projects mein aam tor par **strict operators (`===` aur `!==`)** use kiye jate hain, kyunke:

- Ye **type coercion nahi karte**, to ghair mutawaqqa results nahi aate.
- Code ka matlab **saaf** hota hai.
- Bugs kam hote hain.

**Rule:** jab tak koi khaas wajah na ho, `===` aur `!==` use karein.

---

## 8. Comparison Operators

Ye operators do values ko compare karte hain aur result **boolean** dete hain.

| Operator | Naam                  | Matlab                     |
| -------- | --------------------- | -------------------------- |
| `>`      | Greater than          | Left wali value bari hai   |
| `>=`     | Greater than or equal | Bari ya barabar            |
| `<`      | Less than             | Left wali value chhoti hai |
| `<=`     | Less than or equal    | Chhoti ya barabar          |

```js
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(18 >= 18); // true  (barabar hai)
console.log(3 < 3); // false (barabar hai, chhota nahi)
console.log(3 <= 3); // true
```

### Real misaal

```js
const age = 22;
const canVote = age >= 18;

console.log(canVote); // true
```

Yahan `age >= 18` ek boolean expression hai, aur uska result `canVote` variable mein store ho gaya.

---

## 9. Logical NOT (`!`)

`!` ek **unary operator** hai (sirf ek operand par kaam karta hai). Ye boolean ko **ulta** kar deta hai.

```js
let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
```

- `true` se `false`.
- `false` se `true`.

**Yaad rakhein:** `!` ka matlab "ulta kar do".

### Non-boolean values par `!`

`!` kisi bhi value ko pehle boolean samajhta hai, phir ulta karta hai:

```js
console.log(!"hello"); // false  ("hello" truthy hai, ulta false)
console.log(!0); // true   (0 falsy hai, ulta true)
```

---

## 10. Truthy aur Falsy Values

Boolean context (jaise `if`) mein JavaScript har value ko `true` ya `false` samajhta hai, chahe wo asal boolean na ho.

### Truthy values (jo `true` ki tarah kaam karti hain)

- Khali na hone wali strings, jaise `"hello"`
- `0` aur `-0` ke ilawa har number, jaise `4`, `-5`
- Arrays (khali array `[]` bhi)
- Objects (khali object `{}` bhi)
- Boolean `true`

### Falsy values (jo `false` ki tarah kaam karti hain)

Ye sirf thori si hain, isliye yaad karna asaan hai:

| Falsy value | Matlab                     |
| ----------- | -------------------------- |
| `false`     | Boolean false              |
| `0`         | Zero                       |
| `""`        | Khali string               |
| `null`      | Jaan boojh kar khali value |
| `undefined` | Value assign nahi hui      |
| `NaN`       | Not a Number               |

**Tip:** falsy list yaad kar lein. Is list ke ilawa **baqi sab kuch truthy** hai.

### Misalein

```js
if (null) {
  console.log("This will not run."); // nahi chalega
}

if ("freeCodeCamp") {
  console.log("This will run."); // chalega
}
```

- `null` falsy hai, to block nahi chalega.
- `"freeCodeCamp"` khali nahi, to truthy hai, block chalega.

### Ek aham nuqta

```js
if ("0") {
} // chalega, kyunke "0" khali na hone wali string hai
if (0) {
} // nahi chalega, kyunke 0 falsy hai
if ([]) {
} // chalega, khali array bhi truthy hai
```

---

## 11. `if` Statement (Step 7 ka matlab)

**Conditional statement** us waqt kaam aata hai jab aap chahte hon ke code **sirf tab chale jab koi shart poori ho**.

Misaal: "Agar baarish ho rahi hai, to chhata le lo."

### `if` ke teen hisse

| Hissa | Kya hai                                                                         |
| ----- | ------------------------------------------------------------------------------- |
| `if`  | Keyword, jis se statement shuru hota hai                                        |
| `( )` | Brackets, jin ke andar condition likhte hain                                    |
| `{ }` | Curly braces, jin ke andar wo code hota hai jo condition poori hone par chalega |

```js
if (condition) {
  console.log("condition is truthy");
}
```

- `if (condition)`: check karo ke condition truthy hai ya nahi.
- Agar truthy hai, to `{ }` ke andar ka code chalega.
- Agar falsy hai, to `{ }` ke andar ka code **chalega hi nahi**.

### Step 7 ka task

> Apne variable ke neeche ek `if` statement likhein jis ki condition `hasDeveloperJob` ho. Body mein `"Timmy is employed as a developer."` log karein.

```js
const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}
```

**Output:**

```
Timmy is employed as a developer.
```

Matlab: "Agar `hasDeveloperJob` truthy hai, to print karo ke Timmy developer hai."

### Dhyan dene wali baatein

- Condition `()` mein aur body `{}` mein likhna **lazmi** hai.
- Message **bilkul same** hona chahiye, aakhri full stop `.` samet.
- `hasDeveloperJob` ko **bina quotes** ke likhein. `"hasDeveloperJob"` likha to wo text ban jayega, aur text hamesha truthy hota hai.
- `if (...)` ke baad **semicolon `;` na lagayein**, warna body theek se kaam nahi karti.
- `if` statement variable ke **neeche** likhein, kyunke variable pehle declare hona chahiye.

---

## 12. `else` aur `else if`

### `else`

Jab `if` ki condition `false` ho, tab `else` chalta hai.

```js
const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote");
} else {
  console.log("You're not eligible to vote");
}
```

`15 >= 18` false hai, to `else` chalega: `You're not eligible to vote`.

### `else if`

Jab do se zyada raste hon:

```js
const score = 87;

if (score >= 90) {
  console.log("You got an A");
} else if (score >= 80) {
  console.log("You got a B");
} else if (score >= 70) {
  console.log("You got a C");
} else {
  console.log("You failed! You need to study more!");
}
```

- Conditions **upar se neeche** check hoti hain.
- Jaise hi pehli sahi condition milti hai, uska block chalta hai aur **baqi sab skip** ho jate hain.
- `87 >= 90` false, `87 >= 80` **true**, to `You got a B`.

---

## 13. Ternary Operator

Ye chhote `if/else` ko **ek line** mein likhne ka tareeqa hai. Iski condition bhi boolean hoti hai.

```js
condition ? expressionIfTrue : expressionIfFalse;
```

```js
const temperature = 30;
const weather = temperature > 25 ? "sunny" : "cool";

console.log(`It's a ${weather} day!`); // It's a sunny day!
```

- `temperature > 25` ek boolean expression hai, aur `30 > 25` `true` hai.
- To `?` ke baad wali value `'sunny'` milti hai.
- Agar `false` hota, to `:` ke baad wali value `'cool'` milti.

**Kab use karein?**

- Ternary: simple, ek condition wala logic.
- `if/else`: complex conditions ya kai statements. Ternary ko nest karne se code parhna mushkil ho jata hai.

---

## 14. Logical AND, OR aur Nullish Coalescing

Ye operators boolean logic mein bohat use hote hain, lekin ek **aham baat**: ye hamesha `true`/`false` return **nahi** karte, ye **asal value** return karte hain.

### Logical AND (`&&`)

Check karta hai ke **dono** operands true hain.

- Dono truthy hon to **doosri (right wali)** value return hoti hai.
- Koi falsy ho to wo **falsy value** return hoti hai.
- Dono falsy hon to **pehli falsy** value return hoti hai.

```js
console.log(true && "hello"); // 'hello'
console.log(0 && 3); // 0
console.log(false && 0); // false
```

`if` mein use (jahan result boolean jaisa kaam karta hai):

```js
if (2 < 3 && 3 < 4) {
  console.log("The if block runs");
} else {
  console.log("The else block runs");
}
```

`2 < 3` true **aur** `3 < 4` true, to `if` block chalega.

### Logical OR (`||`)

Check karta hai ke **kam az kam ek** operand truthy hai.

- Pehli value truthy ho to wahi return hoti hai.
- Pehli falsy ho to **doosri** value return hoti hai.

```js
console.log("This is truthy" || false); // 'This is truthy'
console.log(0 || "This is truthy"); // 'This is truthy'
```

### Nullish Coalescing (`??`)

Doosri value sirf tab return karta hai jab pehli **`null` ya `undefined`** ho.

```js
console.log(null ?? "default"); // 'default'
console.log(0 ?? "default"); // 0
console.log(false ?? "default"); // false
```

### `||` aur `??` ka farq

| Pehli value | `value \|\| 'default'` | `value ?? 'default'` |
| ----------- | ---------------------- | -------------------- |
| `null`      | `'default'`            | `'default'`          |
| `undefined` | `'default'`            | `'default'`          |
| `0`         | `'default'`            | `0`                  |
| `''`        | `'default'`            | `''`                 |
| `false`     | `'default'`            | `false`              |

- `||` har **falsy** value par default de deta hai.
- `??` sirf `null` aur `undefined` par default deta hai.
- Jab `0`, `''` ya `false` **valid values** hon, to `??` use karein.

---

## 15. Wo functions jo boolean return karte hain

### `isNaN()` aur `Number.isNaN()`

Ye dono check karte hain ke value `NaN` hai ya nahi, aur result **boolean** dete hain.

- `isNaN()` pehle value ko number mein **convert** karne ki koshish karta hai.
- `Number.isNaN()` **convert nahi karta**, sirf asal `NaN` par `true` deta hai.

```js
console.log(isNaN("blabla")); // true  (convert nahi ho saka)
console.log(Number.isNaN("blabla")); // false (ye asal NaN nahi, string hai)
console.log(isNaN("123")); // false ("123" number ban jata hai)
```

### `NaN` aur equality

```js
console.log(NaN === NaN); // false
```

`NaN` apne aap ke barabar bhi nahi hota. Isliye `value === NaN` se check **kaam nahi karta**. Sahi tareeqa:

```js
Number.isNaN(value);
```

### Comparison ka result bhi boolean

```js
console.log(5 > 3); // true
console.log(5 === 5); // true
```

---

## 16. Aam Ghaltiyan

1. **`=` aur `===` mein confusion**

   ```js
   if ((x = 5)) {
   } // ghalat: ye assignment hai, x ko 5 de deta hai
   if (x === 5) {
   } // sahi: ye comparison hai
   ```

   Ek `=` assignment hai, comparison nahi.

2. **`"true"` ko boolean samajhna**
   `"true"` ek string hai, boolean nahi. Aur `"false"` string bhi **truthy** hai (kyunke khali nahi).

   ```js
   if ("false") {
     console.log("chalega!");
   }
   ```

3. **`NaN` ko `===` se check karna**
   `NaN === NaN` hamesha `false` hota hai. `Number.isNaN()` use karein.

4. **Khali array/object ko falsy samajhna**
   `[]` aur `{}` truthy hain.

5. **`if (...)` ke baad `;` lagana**

   ```js
   if (isReady); // ghalat
   {
     console.log("hamesha chalega");
   }
   ```

6. **Boolean ko quotes mein likhna**
   `let isOnline = "true";` ek string hai, boolean nahi.

---

## 17. Mukhtasar Summary Table

| Topic                | Khulasa                                        |
| -------------------- | ---------------------------------------------- |
| Boolean              | Sirf `true` ya `false`                         |
| `==`                 | Type coercion ke saath barabar check           |
| `===`                | Bina coercion, type aur value dono check       |
| `!=`                 | Type coercion ke saath "barabar nahi"          |
| `!==`                | Bina coercion "barabar nahi"                   |
| Best practice        | `===` aur `!==` use karein                     |
| `>`, `>=`, `<`, `<=` | Comparison, result boolean                     |
| `!`                  | Boolean ko ulta karta hai                      |
| Falsy values         | `false`, `0`, `""`, `null`, `undefined`, `NaN` |
| Truthy               | Falsy ke ilawa baqi sab                        |
| `if`                 | Condition truthy ho to body chalao             |
| `else`               | `if` false ho to chalao                        |
| `else if`            | Kai conditions mein se sahi wali chuno         |
| Ternary              | Chhota `if/else` ek line mein                  |
| `&&`                 | Pehli falsy, warna aakhri value                |
| `\|\|`               | Pehli truthy, warna aakhri value               |
| `??`                 | Sirf `null`/`undefined` par default            |
| `Number.isNaN()`     | Asal `NaN` check karne ka sahi tareeqa         |

### Sab se zaroori yaad rakhne wali baatein

1. Boolean ki sirf do values: `true` aur `false`.
2. `==` type badalta hai, `===` nahi badalta. Hamesha `===` ko tarjeeh dein.
3. `5 == "5"` `true` hai, lekin `5 === "5"` `false`.
4. `5 != "5"` `false` hai, lekin `5 !== "5"` `true`.
5. Falsy sirf 6 hain, baqi sab truthy.
6. `if` ki condition truthy ho to body chalti hai, warna nahi.
7. `NaN === NaN` hamesha `false`, is liye `Number.isNaN()` use karein.
8. `&&`, `||`, `??` asal value return karte hain, sirf `true`/`false` nahi.
