## Operators in JavaScript

Operators woh **special symbols ya keywords** hain jo JavaScript mein **values (jinhe operands kehte hain) par operations** perform karte hain — jaise jama karna, tafreeq karna, muqabla karna, ya logic check karna.

Simple lafzon mein: Operator ek **hukum** hai jo JavaScript ko batata hai ke do ya zyada values ke saath **kya karna** hai. Jaise `5 + 3` mein `+` ek operator hai jo `5` aur `3` ko jama karta hai. Operators JavaScript mein calculations, comparisons, aur logical decisions lene ke liye use hote hain.

JavaScript mein operators ko unke kaam ke hisaab se categories mein divide kiya ja sakta hai:

---

### 1. Arithmetic Operators (Hisaab Kitab)

Yeh numbers par mathematical calculations perform karte hain.

| Operator | Kaam                    | Example  | Result      |
| -------- | ----------------------- | -------- | ----------- |
| `+`      | Addition                | `5 + 3`  | `8`         |
| `-`      | Subtraction             | `5 - 3`  | `2`         |
| `*`      | Multiplication          | `5 * 3`  | `15`        |
| `/`      | Division                | `10 / 2` | `5`         |
| `%`      | Modulus (remainder)     | `10 % 3` | `1`         |
| `**`     | Exponent (power)        | `2 ** 3` | `8`         |
| `++`     | Increment (1 barhana)   | `x++`    | `x = x + 1` |
| `--`     | Decrement (1 kam karna) | `x--`    | `x = x - 1` |

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1  (10 ko 3 se divide karne pe remainder)
console.log(a ** b); // 1000  (10 ka power 3)

let count = 5;
count++; // count ab 6 hai
console.log(count); // 6

count--; // count wapas 5 hai
console.log(count); // 5
```

**Kab use karein:** Calculations, totals nikalna, counters banana (loops mein), ya kisi bhi mathematical operation ke liye.

> **Zaroori:** `%` (modulus) bohat useful hota hai yeh check karne ke liye ke number **even ya odd** hai:

```js
console.log(10 % 2); // 0 → even
console.log(7 % 2); // 1 → odd
```

---

### 2. Assignment Operators (Value Assign Karna)

Yeh variable mein value assign (ya update) karne ke liye use hote hain.

| Operator | Kaam                | Example  | Barabar Hai |
| -------- | ------------------- | -------- | ----------- |
| `=`      | Simple assignment   | `x = 5`  | `x = 5`     |
| `+=`     | Add aur assign      | `x += 3` | `x = x + 3` |
| `-=`     | Subtract aur assign | `x -= 3` | `x = x - 3` |
| `*=`     | Multiply aur assign | `x *= 3` | `x = x * 3` |
| `/=`     | Divide aur assign   | `x /= 3` | `x = x / 3` |
| `%=`     | Modulus aur assign  | `x %= 3` | `x = x % 3` |

```js
let x = 10;

x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6
```

**Kab use karein:** Jab kisi variable ki value ko uski current value ke basis par update karna ho — jaise shopping cart mein total ya score update karna.

---

### 3. Comparison Operators (Values Compare Karna)

Yeh do values ko compare karte hain aur **Boolean** (`true`/`false`) return karte hain.

| Operator | Kaam                                    | Example     | Result  |
| -------- | --------------------------------------- | ----------- | ------- |
| `==`     | Equal (loose — type check nahi karta)   | `5 == "5"`  | `true`  |
| `===`    | Strict equal (type bhi check karta hai) | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)                       | `5 != "5"`  | `false` |
| `!==`    | Strict not equal                        | `5 !== "5"` | `true`  |
| `>`      | Greater than                            | `5 > 3`     | `true`  |
| `<`      | Less than                               | `5 < 3`     | `false` |
| `>=`     | Greater than or equal                   | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal                      | `5 <= 4`    | `false` |

```js
console.log(5 == "5"); // true  (value same hai, type ignore)
console.log(5 === "5"); // false (type alag hai: number vs string)

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
```

**Kab use karein:** Conditions check karne ke liye — jaise `if` statements mein, ya do values same hain ya nahi yeh verify karne ke liye.

> **Zaroori:** Hamesha `===` (strict equal) use karo, `==` avoid karo — kyunki `==` type conversion kar deta hai jo unexpected bugs create kar sakta hai:

```js
console.log(0 == false); // true  (confusing!)
console.log(0 === false); // false (safe aur predictable)
```

---

### 4. Logical Operators (Multiple Conditions Check Karna)

Yeh multiple conditions ko combine karne ke liye use hote hain.

| Operator | Naam | Kaam                                      |
| -------- | ---- | ----------------------------------------- |
| `&&`     | AND  | Dono conditions true honi chahiye         |
| `\|\|`   | OR   | Kam se kam ek condition true honi chahiye |
| `!`      | NOT  | Condition ko reverse (ulta) kar deta hai  |

```js
let age = 25;
let hasID = true;

// AND — dono true hone chahiye
console.log(age >= 18 && hasID); // true

// OR — ek bhi true ho to chalega
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true

// NOT — value ko reverse karta hai
let isLoggedIn = false;
console.log(!isLoggedIn); // true
```

**Kab use karein:** Jab multiple conditions ek sath check karni ho — jaise login validation (`username && password`), ya access control (`isAdmin || isOwner`).

---

### 5. String Operator

`+` operator strings ke sath use hone par **concatenation** (jodna) karta hai, addition nahi.

```js
let firstName = "Talha";
let lastName = "Rana";

console.log(firstName + " " + lastName); // "Talha Rana"

// Number + String = String (concatenation ho jata hai)
console.log("5" + 3); // "53"  (number string ban gaya)
console.log(5 + "3"); // "53"
console.log(5 + 3); // 8    (dono number hain, isliye addition)
```

**Kab use karein:** Do ya zyada strings ko jodne ke liye — jaise pura naam banane ke liye first name aur last name jodna.

> **Zaroori:** Agar ek operand string ho aur dusra number, to `+` operator number ko string mein convert kar deta hai — is wajah se galti se `"5" + 3` ka result `"53"` (string) aata hai, `8` nahi.

---

### 6. Ternary Operator (Short `if-else`)

Ternary operator ek **short-hand** hai simple `if-else` conditions ke liye. Yeh ek hi line mein condition check kar leta hai.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```js
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

// Normal if-else ke barabar:
let result2;
if (age >= 18) {
  result2 = "Adult";
} else {
  result2 = "Minor";
}
```

**Kab use karein:** Jab ek simple condition ke basis par sirf ek value choose karni ho — long `if-else` likhne ke bajaye ek line mein kaam nikal jata hai.

---

### 7. Nullish Coalescing Operator (`??`)

Yeh operator left side ki value return karta hai, **agar woh `null` ya `undefined` na ho** — warna right side ki default value return karta hai.

```js
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let score = 0;
let finalScore = score ?? 100;
console.log(finalScore); // 0  (kyunki 0 null/undefined nahi hai)
```

**Kab use karein:** Jab kisi variable ke liye **default value** set karni ho, lekin `0` ya `""` (empty string) jaisi **valid falsy values** ko accidentally override nahi karna ho.

> **Farq `||` aur `??` mein:** `||` operator har **falsy value** (`0`, `""`, `false`, `null`, `undefined`) ko replace kar deta hai, lekin `??` sirf `null`/`undefined` ko replace karta hai:

```js
let score = 0;
console.log(score || 100); // 100  (galat! 0 ko bhi replace kar diya)
console.log(score ?? 100); // 0    (sahi! 0 ek valid value hai)
```

---

### Operator Precedence (Kaunsa Pehle Chalega)

Jab ek expression mein multiple operators hon, JavaScript unhe ek **fixed priority order** mein evaluate karta hai — bilkul math ki tarah (BODMAS jaisa concept).

```js
console.log(2 + 3 * 4); // 14 (multiplication pehle: 3*4=12, phir 2+12=14)
console.log((2 + 3) * 4); // 20 (brackets pehle chalte hain)
```

**Zaroori Rule:** Agar confusion ho ke kaunsa operator pehle chalega, to **brackets `()`** use kar lo — yeh hamesha sabse pehle evaluate hote hain aur code bhi zyada readable ban jata hai.

---

### Quick Summary — Operators

| Category           | Operators                 | Kaam                                        |
| ------------------ | ------------------------- | ------------------------------------------- |
| Arithmetic         | `+ - * / % **`            | Math calculations                           |
| Assignment         | `= += -= *= /=`           | Value assign/update karna                   |
| Comparison         | `== === != !== > < >= <=` | Values compare karna                        |
| Logical            | `&& \|\| !`               | Multiple conditions combine karna           |
| String             | `+`                       | Strings jodna (concatenation)               |
| Ternary            | `? :`                     | Short if-else                               |
| Nullish Coalescing | `??`                      | Default value dena (null/undefined ke liye) |

---
