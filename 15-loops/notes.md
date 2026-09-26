# Loops in JavaScript

## Loops Kya Hain?

Loops (ya "chakkar") JavaScript ka woh feature hain jo **ek hi code ko baar baar chalane** ki ijazat dete hain — **bina repeat kiye**.
Simple lafzon mein: Loop ek **machine** ki tarah hai jo aapki di hui instruction ko **kitni baar bhi** chala sakti hai.
Jaise agar aapko 1 se 100 tak numbers print karne hon, toh 100 `console.log()` likhne ke bajaye **ek loop** likh dein — kaam ho jayega.

---

### 1. `for` Loop (Jab Ginti Pata Ho)

Sabse zyada use hone wala loop — jab aapko **pata ho** ke loop kitni baar chalana hai.

**Syntax:**

```js
for (initialization; condition; increment) {
  // code jo baar baar chalega
}
```

**Example:**

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 1 2 3 4 5
```

**Kya hua:** `i = 1` se start hua, jab tak `i <= 5` sach hai loop chalta raha, aur har round k baad `i++` se ek badh gaya.

**Teen parts:**

- Initialization → `let i = 1` (starting point)
- Condition → `i <= 5` (jab tak true, chalta rahega)
- Update → `i++` (har round k baad increment/decrement)

**Kab use karein:** Jab exact number of repetitions pata ho — jaise 1 se 10 tak, ya array ki length tak.

---

### 2. `while` Loop (Jab Sirf Condition Pata Ho)

Jab ginti pehle se pata na ho, sirf condition pata ho jab tak chalna hai.

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

**Kya hua:** Condition check hoti hai, agar sach hai to body chalti hai, phir dobara condition check hoti hai —
yeh silsila condition k false hone tak chalta hai.

**Zaroori:** `i++` likhna mat bhoolein — warna condition kabhi false nahi hogi aur **infinite loop** ban jayega.

**Kab use karein:** Jab repetition ka number fix na ho — jaise "jab tak user sahi password na de" waghera.

---

### 3. `do...while` Loop (Pehle Chalao, Phir Check Karo)

Yeh loop pehle body **ek dafa zaroor** chalata hai, phir condition check karta hai.

```js
let i = 10;

do {
  console.log(i);
  i++;
} while (i <= 5);
// Sirf 10 print hoga (ek dafa chala, phir condition false)
```

**Kya hua:** Condition (`10 <= 5`) false hai, lekin body pehle hi ek dafa chal chuki thi — isliye kam se kam 1 output zaroor aya.

**Farq `while` se:** `while` pehle condition check karta hai (chal bhi na sake), `do...while` pehle chalata hai phir check karta hai.

**Kab use karein:** Jab code kam se kam ek baar zaroor chalna ho — jaise menu dikhana ya input lena.

---

### 4. `for...of` Loop (Arrays / Strings K Liye)

Array ya string k har **value** par loop chalane k liye.

```js
const fruits = ["apple", "mango", "banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple mango banana
```

**Kya hua:** Har iteration mein `fruit` array ka agla element ban gaya — index nikalne ki zaroorat nahi padi.

**Kab use karein:** Jab array/string k sirf **values** chahiye hon, index se matlab na ho.

---

### 5. `for...in` Loop (Objects K Liye)

Object k har **key** par loop chalane k liye.

```js
const user = { name: "Talha", role: "Frontend Dev", city: "Vehari" };

for (const key in user) {
  console.log(key + ": " + user[key]);
}
// name: Talha
// role: Frontend Dev
// city: Vehari
```

**Kya hua:** Har iteration mein `key` object ki agli property ka naam ban gaya, aur `user[key]` se uski value nikali.

**Kab use karein:** Jab object k saari properties ko loop karna ho. (Arrays k liye `for...in` avoid karein — `for...of` behtar hai.)

---

### 6. `break` aur `continue`

- **`break`** → loop ko turant rok deta hai
- **`continue`** → current iteration skip karke agle round pe chala jata hai

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
```
