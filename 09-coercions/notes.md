# JavaScript Type Coercion

## Fehrist (Contents)

1. Type coercion kya hai?
2. Implicit aur Explicit coercion
3. `+` operator ka double kaam
4. `-`, `*`, `/` ke saath coercion
5. Jab string number jaisi na ho (`NaN`)
6. Booleans ke saath coercion
7. `null` aur `undefined` ke saath coercion
8. Operators ki tarteeb aur coercion
9. Explicit conversion: `Number()`, `String()`, `Boolean()`
10. Truthy aur Falsy values
11. Comparison aur coercion: `==` vs `===`
12. Real project ki misalein
13. Common mistakes
14. Cheat sheet

---

## 1. Type coercion kya hai?

JavaScript ek aisi language hai jahan cheezein kabhi kabhi hairat angez tareeqe se kaam karti hain. Ek bari hairat tab hoti hai jab numbers aur strings ko ek hi calculation mein mila diya jaye.

**Type coercion** ka matlab hai: ek value ka **ek data type se doosre data type mein badal jana**.

```js
const result = 5 + "10";
console.log(result); // "510"
console.log(typeof result); // string
```

Yahan `5` number tha, lekin JavaScript ne usay khud ba khud string bana liya. Is ke liye aap ne koi code nahi likha, JavaScript ne khud ye faisla kiya.

**Kyun zaroori hai:** Agar aap coercion ko na samjhein to aise bugs aate hain jin ki wajah samajh nahi aati. Isay samajhna mazboot code likhne ke liye zaroori hai.

---

## 2. Implicit aur Explicit coercion

| Kism                    | Matlab                                   | Misal             |
| ----------------------- | ---------------------------------------- | ----------------- |
| **Implicit** (andar ka) | JavaScript khud ba khud type badalti hai | `"5" * 2`         |
| **Explicit** (wazeh)    | Aap khud code likh kar type badalte hain | `Number("5") * 2` |

```js
// Implicit: JavaScript ne khud "5" ko number banaya
console.log("5" * 2); // 10

// Explicit: aap ne khud Number() se badla
console.log(Number("5") * 2); // 10
```

Is lesson ka zyada hissa **implicit coercion** ka hai. Explicit conversion ka tareeqa section 9 mein hai, aur bugs se bachne ka behtar tareeqa wahi hai.

---

## 3. `+` operator ka double kaam

`+` operator **do kaam** karta hai:

1. Numbers ko **jama** karna (addition)
2. Strings ko **jorna** (string concatenation)

Jab `+` ke ek taraf number aur doosri taraf string ho, to JavaScript **dono ko string** bana kar jor deti hai.

```js
const result = 5 + "10";

console.log(result); // "510"
console.log(typeof result); // string
```

Hisab: `5` ko `'5'` banaya, phir `'5' + '10'` = `'510'`.

### Tarteeb badalne par

```js
const result = "10" + 5;

console.log(result); // "105"
console.log(typeof result); // string
```

Yahan bhi natija string hai. Tarteeb badalne se sirf shakal badli (`510` se `105`), type wohi rehta hai.

### Aur misalein

```js
console.log(5 + "5"); // "55"
console.log("5" + 5); // "55"
console.log("Age: " + 20); // "Age: 20"
console.log(10 + ""); // "10"  (number ko string banane ka tareeqa)
console.log("3" + "4"); // "34"  (dono pehle se strings hain)
console.log(true + "Hi"); // "trueHi"
```

### Teen cheezein jorne par tarteeb ka asar

JavaScript `+` ko **baayein se daayein** chalati hai:

```js
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"
```

- `1 + 2 + '3'`: pehle `1 + 2 = 3` (number), phir `3 + '3'` = `'33'`.
- `'1' + 2 + 3`: pehle `'1' + 2 = '12'` (string), phir `'12' + 3` = `'123'`.

Aik baar string aa jaye, to baqi sab string ban kar jurta jata hai.

---

## 4. `-`, `*`, `/` ke saath coercion

Baqi arithmetic operators string jorne ka kaam nahi karte. Is liye JavaScript **string ko number banane** ki koshish karti hai, phir hisab karti hai. Ye bhi type coercion hai, lekin ulti disha mein (string se number).

```js
const subtractionResult = "10" - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = "10" * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = "20" / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```

### Doosre operators ke saath bhi

```js
console.log("7" % 2); // 1
console.log("3" ** 2); // 9
console.log("5" * "2"); // 10  (dono strings, dono number ban gayi)
console.log("9" - "4"); // 5
console.log("8" / "2"); // 4
```

### Khaali ya spaces wali string

```js
console.log("" * 5); // 0   (khaali string 0 ban jati hai)
console.log("  7  " * 2); // 14  (spaces hat jate hain)
```

---

## 5. Jab string number jaisi na ho (`NaN`)

Agar string se valid number na ban sake, to JavaScript `NaN` (Not a Number) deti hai.

```js
const subtractionResult = "abc" - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = "abc" * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = "abc" / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
```

`'abc'` ek meaningful number nahi ban sakti, is liye teeno ka natija `NaN` hai.

**Yaad dilayein:** `NaN` `Number` type ki ek khaas value hai, is liye `typeof NaN` bhi `number` deta hai.

### Aur misalein

```js
console.log("12px" * 2); // NaN  (poori string number nahi hai)
console.log("hello" / 2); // NaN
console.log("1,000" - 1); // NaN  (comma ki wajah se)
console.log("3.5" * 2); // 7    (decimal string theek ban jati hai)
```

### `NaN` aage phailta hai

```js
console.log("abc" - 5 + 10); // NaN  (NaN ke saath har math NaN deti hai)
```

---

## 6. Booleans ke saath coercion

Math mein JavaScript booleans ko numbers ki tarah samajhti hai:

- `true` bunta hai `1`
- `false` bunta hai `0`

```js
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number
```

- `true + 1` = `1 + 1` = `2`
- `false + 1` = `0 + 1` = `1`

### Aur misalein

```js
console.log(true + true); // 2
console.log(true * 5); // 5
console.log(false * 5); // 0
console.log(true - 1); // 0
```

### Boolean aur string

Jab string saath ho to `+` jorne ka kaam karta hai, aur boolean text ban jata hai:

```js
const result3 = "Hello" + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```

```js
console.log(true + "1"); // "true1"
console.log("Is ready: " + false); // "Is ready: false"
```

---

## 7. `null` aur `undefined` ke saath coercion

Math mein:

- `null` bunta hai `0`
- `undefined` bunta hai `NaN`

```js
const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

- `null + 5` = `0 + 5` = `5`
- `undefined + 5` = `NaN + 5` = `NaN`

### Aur misalein

```js
console.log(null * 10); // 0
console.log(undefined * 10); // NaN
console.log(null + 1); // 1
console.log(null - 1); // -1
```

### String ke saath

```js
console.log(null + "a"); // "nulla"
console.log(undefined + "a"); // "undefineda"
```

Jab string saath ho, to `null` text `"null"` aur `undefined` text `"undefined"` ban jata hai.

---

## 8. Operators ki tarteeb aur coercion

Mixed expressions mein pehle operator precedence ke mutabiq `*`, `/` hote hain, phir `+`, `-`. Coercion har operation par alag alag hoti hai.

```js
console.log("5" + 2 * 3); // "56"
```

Hisab:

1. Pehle `2 * 3 = 6` (zarab pehle hota hai).
2. Phir `'5' + 6` = `'56'` (string ke saath `+` jorta hai).

```js
console.log("10" - 2 + "5"); // "85"
```

Hisab:

1. `'10' - 2 = 8` (number, kyunke `-` string ko number banata hai).
2. `8 + '5'` = `'85'` (ab `+` ke saath string hai, to jor diya).

```js
console.log("3" * "4" + 1); // 13
```

Hisab:

1. `'3' * '4' = 12`.
2. `12 + 1 = 13`.

---

## 9. Explicit conversion: `Number()`, `String()`, `Boolean()`

Bugs se bachne ka behtar tareeqa ye hai ke aap khud type badlein.

### `Number()`: number mein badalna

```js
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("  7  ")); // 7
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number("12px")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
```

Ye wohi qaayde hain jo implicit coercion mein dekhe.

### Unary plus (`+`): chhota tareeqa

```js
console.log(+"42"); // 42
console.log(+"abc"); // NaN
console.log(+true); // 1
```

### `String()`: string mein badalna

```js
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log((255).toString()); // "255"
```

### Template literal bhi string banata hai

```js
console.log(`${5}`); // "5"
console.log(typeof `${5}`); // string
```

### `Boolean()`: boolean mein badalna

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

Is ki tafseel agle section mein hai.

### Implicit aur explicit ka muqabla

| Maqsad                  | Implicit  | Explicit (behtar) |
| ----------------------- | --------- | ----------------- |
| String ko number banana | `'5' * 1` | `Number('5')`     |
| Number ko string banana | `5 + ''`  | `String(5)`       |
| Boolean banana          | `!!'hi'`  | `Boolean('hi')`   |

Explicit tareeqa parhne mein saaf hota hai aur doosre log (aur aap khud baad mein) asani se samajh lete hain.

---

## 10. Truthy aur Falsy values

Jab JavaScript ko kisi value ko `true` ya `false` ki tarah samajhna parta hai (jaise `if` mein), to wo us value ko boolean mein badalti hai. Ye bhi coercion hai.

### Falsy values (sirf ye `false` ban ti hain)

| Value                | Boolean |
| -------------------- | ------- |
| `false`              | `false` |
| `0`                  | `false` |
| `-0`                 | `false` |
| `0n` (BigInt zero)   | `false` |
| `""` (khaali string) | `false` |
| `null`               | `false` |
| `undefined`          | `false` |
| `NaN`                | `false` |

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

### Truthy values

In ke ilawa **baqi sab kuch** `true` hota hai:

```js
console.log(Boolean(1)); // true
console.log(Boolean(-5)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true  (khaali nahi, is liye true)
console.log(Boolean(" ")); // true  (ek space bhi character hai)
console.log(Boolean("false")); // true  (text "false" bhi truthy hai)
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

### `if` mein istemal

```js
const userName = prompt("Enter your name:");

if (userName) {
  console.log("Hello, " + userName);
} else {
  console.log("No name entered.");
}
```

`userName` khaali string `""` ya `null` (Cancel) ho to `if` `false` samjhega.

---

## 11. Comparison aur coercion: `==` vs `===`

| Operator | Naam            | Coercion karta hai? |
| -------- | --------------- | ------------------- |
| `==`     | Loose equality  | Haan                |
| `===`    | Strict equality | Nahi                |

```js
console.log(5 == "5"); // true   (string number ban gayi)
console.log(5 === "5"); // false  (types alag hain)

console.log(0 == false); // true
console.log(0 === false); // false

console.log("" == 0); // true
console.log("" === 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(NaN == NaN); // false  (NaN khud ke barabar bhi nahi)
```

**Behtar aadat:** hamesha `===` istemal karein, taake coercion ki wajah se ghair mutawaqqa (unexpected) natije na aayein.

### Greater/less than ke saath

```js
console.log("10" > 5); // true   (string number ban gayi)
console.log("10" < "9"); // true   (dono strings, to text ki tarah compare: "1" < "9")
console.log(Number("10") < Number("9")); // false (number ki tarah compare)
```

Dono strings hon to JavaScript unhein **text ki tarah** compare karti hai, number ki tarah nahi. Isi liye number compare karne se pehle `Number()` lagana chahiye.

---

## 12. Real project ki misalein

### Misal 1: `prompt()` ka jawab hamesha string hota hai

```js
const age = prompt("Enter your age:"); // maan lein user ne 20 likha

console.log(age + 1); // "201"  (galat, text jur gaya)
console.log(Number(age) + 1); // 21     (sahi)
```

### Misal 2: Form ya input se numbers jama karna

```js
const price = "100";
const tax = "15";

console.log(price + tax); // "10015" (galat)
console.log(Number(price) + Number(tax)); // 115     (sahi)
```

### Misal 3: Shopify/Liquid ya JS mein price ke saath

```js
const itemPrice = "49.99"; // data aksar string mein aata hai
const quantity = 3;

console.log(itemPrice * quantity); // 149.97 (* ki wajah se coercion theek chali)
console.log(itemPrice + quantity); // "49.993" (galat, + ne jor diya)
console.log(Number(itemPrice) * quantity); // 149.97
```

### Misal 4: Input validate karna

```js
const input = "12abc";
const value = Number(input);

if (Number.isNaN(value)) {
  console.log("Please enter a valid number.");
} else {
  console.log("Valid:", value);
}
// Output: Please enter a valid number.
```

---

## 13. Common mistakes

| Galti                                 | Wajah                                   | Sahi tareeqa                     |
| ------------------------------------- | --------------------------------------- | -------------------------------- |
| `'5' + 2` se `7` ki umeed             | `+` string ke saath jorta hai           | `Number('5') + 2`                |
| `prompt()` ke jawab par seedha math   | Wo string hota hai                      | `Number(prompt(...))`            |
| `'10' < '9'` se number compare karna  | Strings text ki tarah compare hoti hain | Pehle `Number()` karein          |
| `==` istemal karna                    | Coercion se ghair mutawaqqa natije      | `===` istemal karein             |
| `value === NaN`                       | `NaN` khud ke barabar nahi              | `Number.isNaN(value)`            |
| `'0'` ko falsy samajhna               | Khaali nahi, to truthy hai              | `Number('0')` ya `=== '0'` check |
| `Number('12px')` se `12` ki umeed     | Poori string number honi chahiye        | `parseInt('12px')`               |
| `null` aur `undefined` ko ek samajhna | Math mein `0` aur `NaN`                 | Alag alag sambhalein             |

---

## 14. Cheat sheet

### Operator ke hisab se qaida

| Operator                 | String ke saath kya karta hai                     |
| ------------------------ | ------------------------------------------------- |
| `+`                      | Number ko **string** bana kar **jorta** hai       |
| `-`, `*`, `/`, `%`, `**` | String ko **number** bana kar **hisab** karta hai |

### Math mein values ka badalna

| Value       | Number ban kar | Misal                   |
| ----------- | -------------- | ----------------------- |
| `true`      | `1`            | `true + 1` = `2`        |
| `false`     | `0`            | `false + 1` = `1`       |
| `null`      | `0`            | `null + 5` = `5`        |
| `undefined` | `NaN`          | `undefined + 5` = `NaN` |
| `'10'`      | `10`           | `'10' - 5` = `5`        |
| `'abc'`     | `NaN`          | `'abc' - 5` = `NaN`     |
| `''`        | `0`            | `'' * 5` = `0`          |

### `+` ke saath string aaye to

| Expression        | Natija         |
| ----------------- | -------------- |
| `5 + '10'`        | `"510"`        |
| `'10' + 5`        | `"105"`        |
| `'Hello' + true`  | `"Hellotrue"`  |
| `null + 'a'`      | `"nulla"`      |
| `undefined + 'a'` | `"undefineda"` |
| `1 + 2 + '3'`     | `"33"`         |
| `'1' + 2 + 3`     | `"123"`        |

### Explicit conversion

| Kaam            | Code                |
| --------------- | ------------------- |
| Number banana   | `Number(x)` ya `+x` |
| String banana   | `String(x)`         |
| Boolean banana  | `Boolean(x)`        |
| Integer nikalna | `parseInt(x)`       |
| Decimal nikalna | `parseFloat(x)`     |

### Sab se zaroori 7 baatein

1. **Type coercion** matlab ek data type ka doosre mein badal jana.
2. `+` ke saath string aaye to natija **string** hota hai.
3. `-`, `*`, `/` string ko **number** banane ki koshish karte hain, na ban sake to `NaN`.
4. Math mein `true` = `1`, `false` = `0`, `null` = `0`, `undefined` = `NaN`.
5. `prompt()` aur form input hamesha **string** hote hain, math se pehle `Number()` lagayein.
6. Hamesha `===` istemal karein, `==` nahi.
7. Behtar code ke liye **explicit conversion** (`Number()`, `String()`, `Boolean()`) karein.
