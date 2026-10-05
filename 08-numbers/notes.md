# JavaScript Numbers

## Fehrist (Contents)

1. `Number` type kya hai?
2. `typeof` operator
3. Integers
4. Floating point numbers (floats)
5. `Infinity` aur `-Infinity`
6. `NaN` (Not a Number)
7. Number systems: decimal, binary, octal, hexadecimal
8. Numbers aur arithmetic operators
9. Floating point ki precision ka masla
10. Number ki hadein (limits)
11. Strings ko numbers mein badalna
12. Useful `Number` methods aur checks
13. Common mistakes
14. Cheat sheet

---

## 1. `Number` type kya hai?

JavaScript mein `Number` data type kisi bhi **numeric value** (ginti ki value) ko dikhata hai.

Bohat si doosri languages mein poore numbers aur decimals ke liye **alag types** hote hain (jaise `int` aur `float`). JavaScript mein aisa nahi hai. Yahan **ek hi unified `Number` type** hai jis mein ye sab aate hain:

- Poore numbers (integers)
- Decimal wale numbers (floats)
- Negative numbers
- Khaas values: `Infinity` aur `NaN`

```js
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number
```

`Number` JavaScript ke **primitive data types** mein se ek hai (strings ki tarah).

---

## 2. `typeof` operator

`typeof` batata hai ke kisi value ka type kya hai. Ye ek **operator** hai, function nahi, is liye brackets lazmi nahi.

```js
console.log(typeof 42); // number
console.log(typeof 3.14); // number
console.log(typeof "42"); // string (quotes mein hai, is liye string)
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
```

**Zaroori farq:** `42` number hai, lekin `"42"` string hai, chahe dono dekhne mein ek jaise lagein.

---

## 3. Integers (poore numbers)

**Integers** wo numbers hain jin mein decimal ya fractional hissa nahi hota. Ye **positive, negative ya zero** ho sakte hain.

```js
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number
```

### Integer check karna

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger("10")); // false (ye string hai)
console.log(Number.isInteger(5.0)); // true (5.0 aur 5 JavaScript ke liye ek hi hain)
```

**Dhyan dein:** `5.0` aur `5` JavaScript mein bilkul ek jaise hain, kyunke sab `Number` hi hai.

---

## 4. Floating point numbers (floats)

**Floats** wo numbers hain jin mein **decimal point** hota hai. Developers inhein aksar sirf "floats" kehte hain.

Ye tab kaam aate hain jab zyada tafseel (precision) chahiye ho, jaise:

- naap tol (measurements)
- paise (currency)

```js
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number
```

### Decimal ke saath arithmetic

```js
console.log(4.5 + 1.5); // 6
console.log(10.5 - 0.5); // 10
console.log(2.5 * 2); // 5
console.log(9.9 / 3); // 3.3000000000000003 (precision ka masla, section 9 dekhein)
```

### Scientific notation

Bohat bare ya bohat chhote numbers `e` ke saath likh sakte hain:

```js
console.log(1e3); // 1000      (1 x 10 ki power 3)
console.log(2.5e6); // 2500000
console.log(1e-3); // 0.001     (1 x 10 ki power -3)
```

---

## 5. `Infinity` aur `-Infinity`

JavaScript un numbers ko `Infinity` (be-hadd) se dikhati hai jo uski hadd se bahar hon.

`Infinity` aap ko ye do surtoon mein milta hai:

1. Kisi number ko `0` se divide karne par.
2. Jab number `Number` type ki upar ki hadd paar kar jaye (ye kam hota hai).

```js
const infiniteNumber = 1 / 0;

console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number
```

**Zaroori:** JavaScript mein `1 / 0` par **error nahi aata**, `Infinity` milta hai.

### `-Infinity`

```js
console.log(-1 / 0); // -Infinity
console.log(-Infinity); // -Infinity
```

### Hadd paar karna

```js
console.log(2 ** 1024); // Infinity (bohat bara number)
console.log(Number.MAX_VALUE * 2); // Infinity
```

### `Infinity` ke saath arithmetic

```js
console.log(Infinity + 1); // Infinity
console.log(Infinity * 2); // Infinity
console.log(Infinity - Infinity); // NaN (is ka koi valid natija nahi)
console.log(5 / Infinity); // 0
```

### Check karna

```js
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
```

`Number.isFinite()` `true` tab deta hai jab value ek asli, hadd wala number ho.

---

## 6. `NaN` (Not a Number)

Kabhi math ka natija koi valid number nahi hota. Aise mein JavaScript `NaN` deti hai, jis ka matlab hai **"Not a Number"**.

Aam wajahein:

- Aisi cheez par math karna jo number nahi hai.
- Ghalat conversion.
- Be-matlab operations.

```js
const notANumber = "hello world" / 2;
console.log(notANumber); // NaN
```

`'hello world'` text hai, usay `2` se divide karna mumkin nahi, is liye `NaN` aaya.

### Hairat ki baat: `NaN` ka type `number` hai

```js
console.log(typeof notANumber); // number
```

Is ki wajah ye hai ke `NaN` `Number` type ki **ek khaas value** hai, jo batati hai ke "math ka natija valid number nahi hai". Ye bahar ki cheez nahi, `Number` type ka hissa hai.

### `NaN` kab milta hai?

```js
console.log("hello" * 3); // NaN
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
console.log(Number("abc")); // NaN
console.log(parseInt("xyz")); // NaN
console.log(undefined + 1); // NaN
```

### `NaN` ki ajeeb khaasiyat: ye khud ke barabar bhi nahi hota

```js
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
```

Is liye `NaN` ko `===` se check **nahi** karna chahiye. Sahi tareeqa:

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (string NaN nahi hai)
console.log(Number.isNaN(5)); // false
console.log(Number.isNaN("hello" / 2)); // true
```

### `NaN` aage phailta hai

Ek baar `NaN` aa jaye to us ke saath har math ka natija `NaN` hi hota hai:

```js
console.log(NaN + 5); // NaN
console.log(NaN * 10); // NaN
```

---

## 7. Number systems (bases)

Hum roz **decimal (base 10)** istemal karte hain. JavaScript doosre systems ko bhi support karti hai.

| System      | Base | Digits           | Kahan istemal hota hai                        |
| ----------- | ---- | ---------------- | --------------------------------------------- |
| Decimal     | 10   | `0` se `9`       | Rozmarra ki ginti                             |
| Binary      | 2    | `0`, `1`         | Computer ki zubaan                            |
| Octal       | 8    | `0` se `7`       | Kam istemal hota hai (jaise file permissions) |
| Hexadecimal | 16   | `0`-`9`, `a`-`f` | CSS hex colors (`#ff0000`)                    |

### Binary (base 2)

Prefix: `0b`

```js
console.log(0b1010); // 10
console.log(0b1); // 1
console.log(0b11111111); // 255
```

`0b1010` ka hisab: `1x8 + 0x4 + 1x2 + 0x1 = 10`.

### Octal (base 8)

Prefix: `0o`

```js
console.log(0o17); // 15
console.log(0o10); // 8
console.log(0o777); // 511
```

`0o17` ka hisab: `1x8 + 7x1 = 15`.

### Hexadecimal (base 16)

Prefix: `0x`. Letters `a` se `f` ka matlab `10` se `15`.

| Letter | a   | b   | c   | d   | e   | f   |
| ------ | --- | --- | --- | --- | --- | --- |
| Value  | 10  | 11  | 12  | 13  | 14  | 15  |

```js
console.log(0xff); // 255
console.log(0xa); // 10
console.log(0x10); // 16
```

`0xff` ka hisab: `15x16 + 15x1 = 255`.

### CSS colors se talluq

CSS mein `#ff0000` (laal) ke teen hisse hain: `ff` (red), `00` (green), `00` (blue). Har hissa hexadecimal mein `0` se `255` tak ki value hai:

```js
console.log(0xff); // 255 (red poora)
console.log(0x00); // 0   (green nahi)
```

### Sab ka type `number` hai

```js
console.log(typeof 0b1010); // number
console.log(typeof 0o17); // number
console.log(typeof 0xff); // number
```

Sirf likhne ka tareeqa alag hai, andar se sab `Number` hi hain, aur `console.log` unhein decimal mein dikhata hai.

### Number ko doosre base ki string mein badalna: `toString(base)`

```js
console.log((10).toString(2)); // "1010"
console.log((15).toString(8)); // "17"
console.log((255).toString(16)); // "ff"
console.log((255).toString(2)); // "11111111"
```

### Doosre base ki string se number banana: `parseInt(string, base)`

```js
console.log(parseInt("1010", 2)); // 10
console.log(parseInt("17", 8)); // 15
console.log(parseInt("ff", 16)); // 255
```

---

## 8. Numbers aur arithmetic operators

| Operator | Kaam             | Misal    | Natija |
| -------- | ---------------- | -------- | ------ |
| `+`      | Jama             | `5 + 2`  | `7`    |
| `-`      | Minus            | `5 - 2`  | `3`    |
| `*`      | Zarab            | `5 * 2`  | `10`   |
| `/`      | Taqseem          | `5 / 2`  | `2.5`  |
| `%`      | Baqi (remainder) | `5 % 2`  | `1`    |
| `**`     | Power            | `5 ** 2` | `25`   |

```js
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 4); // 2.5
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
```

### Operators ki tarteeb (precedence)

```js
console.log(2 + 3 * 4); // 14 (pehle zarab)
console.log((2 + 3) * 4); // 20 (brackets pehle)
```

### Increment aur decrement

```js
let count = 5;
count++;
console.log(count); // 6

count--;
console.log(count); // 5
```

### Compound assignment

```js
let total = 10;
total += 5; // total = total + 5
console.log(total); // 15

total *= 2;
console.log(total); // 30
```

### `+` operator ka khaas masla (string ke saath)

```js
console.log(5 + 2); // 7
console.log("5" + 2); // "52"  (+ string ke saath jodta hai)
console.log("5" * 2); // 10    (* number banane ki koshish karta hai)
console.log("5" - 2); // 3
```

Agar ek taraf string ho, to `+` jama nahi karta, **text jodta hai**.

---

## 9. Floating point ki precision ka masla

Computer decimals ko **binary** mein store karta hai, aur kuch decimals binary mein bilkul sahi nahi likhe ja sakte. Is liye chhoti si ghalti aa jati hai.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
console.log(9.9 / 3); // 3.3000000000000003
```

Ye JavaScript ka bug nahi, floating point ka aam masla hai jo bohat si languages mein hota hai.

### Hal 1: `toFixed()`

`toFixed(digits)` decimal ke baad digits tay karta hai aur **string** return karta hai.

```js
const result = 0.1 + 0.2;

console.log(result.toFixed(2)); // "0.30"
console.log(Number(result.toFixed(2))); // 0.3
console.log((89.5678).toFixed(1)); // "89.6"
console.log((5).toFixed(2)); // "5.00"
```

### Hal 2: paise ko poore numbers mein rakhna

Paison ka hisab karte waqt aksar cents/paisa mein integers rakhte hain:

```js
const priceInPaisa = 1999; // 19.99 rupay
const quantity = 3;
const totalInPaisa = priceInPaisa * quantity;

console.log(totalInPaisa); // 5997
console.log(totalInPaisa / 100); // 59.97
```

---

## 10. Number ki hadein (limits)

Numbers ki ek hadd hoti hai. JavaScript ye constants deti hai:

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324 (sab se chhota positive number)
```

### Safe integer

`Number.MAX_SAFE_INTEGER` tak integers bilkul durust rehte hain. Is se bare numbers mein hisab ghalat ho sakta hai:

```js
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (ghalat, wohi aaya)
console.log(Number.isSafeInteger(100)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
```

Is se bare integers ke liye JavaScript mein alag type `BigInt` hota hai (jo aage seekhenge).

### Infinity se connection

```js
console.log(Number.MAX_VALUE * 2); // Infinity
```

---

## 11. Strings ko numbers mein badalna

User jo bhi input deta hai (jaise `prompt()` se), wo hamesha **string** hota hai. Math ke liye usay number banana parta hai.

### `Number()`

```js
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("  7  ")); // 7   (spaces hat jate hain)
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number("12px")); // NaN (poori string number honi chahiye)
console.log(Number(true)); // 1
```

### `parseInt()`: string se integer

Shuru se jahan tak number mile, utna parh leta hai. Decimal hissa kaat deta hai.

```js
console.log(parseInt("42")); // 42
console.log(parseInt("42.9")); // 42
console.log(parseInt("12px")); // 12
console.log(parseInt("px12")); // NaN
console.log(parseInt("  8 ")); // 8
```

### `parseFloat()`: string se decimal number

```js
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14abc")); // 3.14
console.log(parseFloat("10")); // 10
console.log(parseFloat(".5")); // 0.5
console.log(parseFloat("abc")); // NaN
```

### `Number()` aur `parseInt()` ka farq

| Input    | `Number()` | `parseInt()` |
| -------- | ---------- | ------------ |
| `"42"`   | `42`       | `42`         |
| `"42.9"` | `42.9`     | `42`         |
| `"12px"` | `NaN`      | `12`         |
| `""`     | `0`        | `NaN`        |

### `prompt()` ke saath

```js
const age = Number(prompt("Enter your age:"));

if (Number.isNaN(age)) {
  console.log("Please enter a valid number.");
} else {
  console.log("Next year you will be " + (age + 1));
}
```

---

## 12. Useful `Number` methods aur checks

```js
// Number.isInteger()
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false

// Number.isFinite()
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

// toFixed()
console.log((3.14159).toFixed(2)); // "3.14"

// toString()
console.log((42).toString()); // "42"
console.log((42).toString(2)); // "101010"
```

### `Math` object ke kuch aam methods (taaruf)

```js
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4  (neeche round)
console.log(Math.ceil(4.1)); // 5  (upar round)
console.log(Math.trunc(4.9)); // 4  (decimal kaat do)
console.log(Math.abs(-7)); // 7
console.log(Math.max(3, 9, 5)); // 9
console.log(Math.min(3, 9, 5)); // 3
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
```

---

## 13. Common mistakes

| Galti                                         | Sahi tareeqa                                                 |
| --------------------------------------------- | ------------------------------------------------------------ |
| Sochna ke integer aur float alag types hain   | Dono `Number` hain                                           |
| `value === NaN` se check karna                | `Number.isNaN(value)`                                        |
| `1 / 0` par error ki umeed                    | `Infinity` milta hai                                         |
| `"5" + 2` se `7` ki umeed                     | Pehle `Number("5")` karein                                   |
| `0.1 + 0.2 === 0.3` par bharosa               | `toFixed()` ya integers (paisa) use karein                   |
| `prompt()` ke jawab ko seedha number samajhna | Hamesha string hota hai, `Number()` se badlein               |
| `(5).toFixed(2)` ko number samajhna           | Ye string `"5.00"` return karta hai                          |
| `typeof NaN` se `NaN` check karna             | `typeof NaN` bhi `"number"` hai, `Number.isNaN()` use karein |
| Bohat bare integers par bharosa               | `MAX_SAFE_INTEGER` se upar ghalti aa sakti hai               |

---

## 14. Cheat sheet

| Cheez     | Misal               | `typeof` |
| --------- | ------------------- | -------- |
| Integer   | `100`, `-25`, `0`   | `number` |
| Float     | `4.5`, `89.56`      | `number` |
| Infinity  | `1 / 0`             | `number` |
| -Infinity | `-1 / 0`            | `number` |
| NaN       | `'hello world' / 2` | `number` |
| Binary    | `0b1010` (= 10)     | `number` |
| Octal     | `0o17` (= 15)       | `number` |
| Hex       | `0xff` (= 255)      | `number` |

| Kaam                     | Code                  |
| ------------------------ | --------------------- |
| String ko number banana  | `Number("42")`        |
| Integer nikalna          | `parseInt("42.9")`    |
| Decimal nikalna          | `parseFloat("3.14")`  |
| Integer hai?             | `Number.isInteger(x)` |
| NaN hai?                 | `Number.isNaN(x)`     |
| Hadd wala number hai?    | `Number.isFinite(x)`  |
| Decimal digits tay karna | `x.toFixed(2)`        |
| Doosre base mein         | `x.toString(2)`       |

### Sab se zaroori 7 baatein

1. JavaScript mein integers aur decimals ke liye **ek hi type**, `Number`, hai.
2. `Infinity` aur `NaN` dono ka type `number` hai.
3. `1 / 0` se `Infinity` milta hai, error nahi.
4. `NaN` ka matlab "Not a Number" hai, aur ye khud ke barabar bhi nahi hota. Check ke liye `Number.isNaN()` use karein.
5. Binary `0b`, octal `0o` aur hexadecimal `0x` se shuru hote hain.
6. `0.1 + 0.2` poora `0.3` nahi deta, ye floating point ka aam masla hai.
7. User ka input string hota hai, usay `Number()` se number banayein.
