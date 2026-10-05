# JavaScript Strings: Detailed Notes (Roman Urdu)

## Fehrist (Contents)

1. String kya hai?
2. Immutability
3. Characters access karna
4. `length` property
5. Escape characters aur `\n`
6. Concatenation aur Template Literals
7. ASCII, Unicode, `charCodeAt()`, `fromCharCode()`
8. Search methods: `indexOf()`, `includes()`
9. `slice()`
10. Case methods: `toUpperCase()`, `toLowerCase()`
11. `replace()` aur `replaceAll()`
12. `repeat()`
13. Trim methods
14. `prompt()`
15. Method chaining
16. Practice example: camelCase
17. Common mistakes
18. Cheat sheet

---

## 1. String kya hai?

**String** characters ka silsila (sequence) hai jo teen tarah ke quotes mein likha ja sakta hai:

```js
const single = "Hello";
const double = "Hello";
const backtick = `Hello`;
```

- Strings **primitive data type** hain.
- Letters, numbers, spaces, punctuation, sab characters hain.
- Spaces bhi characters mein ginay jaate hain.

---

## 2. Immutability

**Immutable** ka matlab hai ke string ek baar ban jaye to us ke andar ke characters ko seedha badla nahi ja sakta.

```js
let word = "Hello";
word[0] = "J";
console.log(word); // "Hello" (koi tabdeeli nahi hui)
```

Isi liye har string method (jaise `toUpperCase()`, `replace()`, `slice()`) **nayi string** return karta hai aur asal string ko nahi badalta:

```js
const greeting = "hello";
const loud = greeting.toUpperCase();

console.log(greeting); // "hello" (asal string wesi hi)
console.log(loud); // "HELLO" (nayi string)
```

**Yaad rakhein:** method ka natija kisi variable mein save karein, warna wo kho jayega.

---

## 3. Characters access karna (Bracket Notation)

Kisi character tak pohanchne ke liye `[index]` use hota hai. **Index zero-based** hota hai, yaani ginti `0` se shuru hoti hai.

```js
const developer = "Jessica";

console.log(developer[0]); // "J"
console.log(developer[1]); // "e"
console.log(developer[6]); // "a"
```

| Character | J   | e   | s   | s   | i   | c   | a   |
| --------- | --- | --- | --- | --- | --- | --- | --- |
| Index     | 0   | 1   | 2   | 3   | 4   | 5   | 6   |

### Aakhri character

Aakhri index hamesha `length - 1` hota hai:

```js
const firstName = "Jessica";
const lastCharacter = firstName[firstName.length - 1];

console.log(lastCharacter); // "a"
```

Agar index maujood na ho to `undefined` milta hai:

```js
console.log(firstName[100]); // undefined
console.log(firstName[firstName.length]); // undefined
```

---

## 4. `length` property

`length` string ke characters ki tadaad batati hai. Ye **property** hai, method nahi, is liye `()` nahi lagte.

```js
const greeting = "Hello, world!";

console.log(greeting.length); // 13
console.log(greeting.length()); // TypeError, brackets nahi lagane
```

Spaces aur punctuation (`,` aur `!`) bhi ginay jaate hain.

---

## 5. Escape characters aur `\n`

### Escaping

Agar string ke andar wahi quote chahiye jo string ko band karta hai, to us se pehle backslash `\` lagayein:

```js
const statement = 'She said, "Hello!"';
console.log(statement); // She said, "Hello!"
```

Doosra tareeqa: alag tarah ke quotes use karein:

```js
const statement2 = 'She said, "Hello!"';
```

### Newline `\n`

`\n` nayi line banata hai:

```js
const poem =
  "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

Output:

```
Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.
```

### Aam escape sequences

| Sequence | Matlab       |
| -------- | ------------ |
| `\n`     | Nayi line    |
| `\t`     | Tab          |
| `\\`     | Ek backslash |
| `\"`     | Double quote |
| `\'`     | Single quote |

---

## 6. Concatenation aur Template Literals

### `+` operator se jodna (Concatenation)

```js
const firstName = "Ali";
const lastName = "Khan";

const fullName = firstName + " " + lastName;
console.log(fullName); // "Ali Khan"
```

### Template literals

**Backticks** (`` ` ``) mein likhi jaati hain. Variable ko `${...}` ke andar rakhte hain. Is ko **string interpolation** kehte hain.

```js
const name = "Jessica";
const greeting = `Hello, ${name}!`;

console.log(greeting); // "Hello, Jessica!"
```

`${}` ke andar expression bhi likh sakte hain:

```js
const topic = "JavaScript";
console.log(`The word ${topic} has ${topic.length} letters.`);
// The word JavaScript has 10 letters.
```

### Multi-line strings

Template literals mein seedha nayi line likh sakte hain:

```js
const message = `Line one
Line two
Line three`;
console.log(message);
```

**Dhyan dein:** `"..."` ya `'...'` mein `${name}` kaam nahi karta, wo seedha text ki tarah print hota hai. Sirf backticks mein kaam karta hai.

---

## 7. ASCII, Unicode, `charCodeAt()` aur `fromCharCode()`

### ASCII kya hai?

Computer sirf numbers samajhta hai. **ASCII** (American Standard Code for Information Interchange) har basic English character ko ek number deta hai. Is mein 128 characters hain: letters (A-Z, a-z), digits (0-9), symbols, aur control characters (newline, tab).

| Character | Code |
| --------- | ---- |
| `A`       | 65   |
| `B`       | 66   |
| `a`       | 97   |
| `!`       | 33   |

### Unicode (UTF-16)

JavaScript andar se **Unicode (UTF-16)** istemal karti hai. Unicode ke pehle 128 characters ASCII ke barabar hain, is liye ASCII wali misalein JavaScript mein kaam karti hain.

### `charCodeAt(index)`: character se number

```js
const letter = "A";
console.log(letter.charCodeAt(0)); // 65

const symbol = "!";
console.log(symbol.charCodeAt(0)); // 33

const word = "Hi";
console.log(word.charCodeAt(1)); // 105 (i ka code)
```

### `String.fromCharCode(number)`: number se character

```js
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(97)); // "a"
console.log(String.fromCharCode(66)); // "B"
```

`fromCharCode()` hamesha `String.` ke saath likha jata hai.

### Kaam ki baatein

- Bare letters ke codes: `65` se `90`
- Chhote letters ke codes: `97` se `122`
- Bare aur chhote letter ke code mein `32` ka farq hota hai.

---

## 8. Search methods

### `indexOf()`: substring ki jagah

Substring ka **pehla index** deta hai. Na mile to `-1`.

```js
const text = "The quick brown fox jumps over the lazy dog.";

console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

### `includes()`: substring hai ya nahi

`true` ya `false` return karta hai.

```js
const text = "The quick brown fox jumps over the lazy dog.";

console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

### Case-sensitive

```js
const phrase = "JavaScript is awesome!";

console.log(phrase.includes("awesome")); // true
console.log(phrase.includes("Awesome")); // false
```

### Doosra parameter: kahan se search shuru ho

```js
const text = "Hello, JavaScript world!";

console.log(text.includes("JavaScript", 7)); // true
console.log(text.includes("JavaScript", 8)); // false
```

### Farq

| Method       | Kya batata hai           |
| ------------ | ------------------------ |
| `includes()` | Sirf `true` / `false`    |
| `indexOf()`  | Position (index) ya `-1` |

---

## 9. `slice()`

String ka hissa nikal kar **nayi string** return karta hai. Asal string nahi badalti.

```js
string.slice(startIndex, endIndex);
```

- `startIndex`: yahan se shuru, ye index **shamil** hai.
- `endIndex`: yahan se pehle ruk jata hai, ye index **shamil nahi**. Optional hai.

```js
const text = "freeCodeCamp";

console.log(text.slice(0, 4)); // "free"
console.log(text.slice(4, 8)); // "Code"
console.log(text.slice(8, 12)); // "Camp"
```

### Sirf start index

```js
const message = "Hello, world!";
console.log(message.slice(7)); // "world!"
```

### Negative index (peeche se ginti)

```js
const message = "JavaScript is fun!";

console.log(message.slice(-4)); // "fun!"
console.log(message.slice(0, -5)); // "JavaScript is"
```

`-1` aakhri character hai, `-2` aakhri se pehla, aur isi tarah.

### Beech ka hissa

```js
const message = "I love JavaScript!";
console.log(message.slice(7, 17)); // "JavaScript"
```

### Misal: end index shamil nahi

```js
const text = "JavaScript is awesome!";
console.log(text.slice(0, 9)); // "JavaScrip"  (index 9 shamil nahi)
console.log(text.slice(0, 10)); // "JavaScript"
```

---

## 10. Case methods

### `toUpperCase()`: saare letters bare

```js
const text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
```

### `toLowerCase()`: saare letters chhote

```js
const text = "HELLO, WORLD!";
console.log(text.toLowerCase()); // "hello, world!"
```

Dono nayi string dete hain, asal nahi badalti.

### Case-insensitive comparison

```js
const phrase = "JavaScript is Awesome!";
console.log(phrase.toLowerCase().includes("awesome")); // true
```

### Sirf pehla letter bara karna

```js
const word = "javascript";
const capitalized = word[0].toUpperCase() + word.slice(1);

console.log(capitalized); // "Javascript"
```

---

## 11. `replace()` aur `replaceAll()`

### `replace()`: sirf pehla match

```js
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"
```

Agar match kai baar ho, to sirf **pehla** badalta hai:

```js
const phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase.replace("world", "universe"));
// "Hello, universe! Welcome to the world of coding."
```

### Case-sensitive

```js
const sentence = "I enjoy working with JavaScript.";
console.log(sentence.replace("javascript", "coding"));
// "I enjoy working with JavaScript." (match nahi hua, koi tabdeeli nahi)
```

Match na mile to koi error nahi aata, wohi string wapas milti hai.

### `replaceAll()`: saare matches

```js
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs"));
// "I love dogs and dogs are so much fun!"
```

### Farq

| Method         | Kitne matches badalta hai |
| -------------- | ------------------------- |
| `replace()`    | Sirf pehla                |
| `replaceAll()` | Saare                     |

**Note:** `searchValue` string ya **regular expression (regex)** ho sakti hai. Regex aage lessons mein aayegi.

---

## 12. `repeat()`

String ko kai baar dohrata hai.

```js
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
```

`repeat()` beech mein space nahi lagata. Agar space chahiye to string mein khud daalein: `"Hello ".repeat(3)`.

### `count` ke qawaid

```js
const word = "Test";

console.log(word.repeat(0)); // ""  (khali string)
console.log(word.repeat(2.5)); // "TestTest"  (neeche round hota hai)
console.log(word.repeat(-1)); // RangeError
console.log(word.repeat(Infinity)); // RangeError
```

| Count            | Natija             |
| ---------------- | ------------------ |
| Positive integer | String utni baar   |
| `0`              | `""`               |
| Decimal (`2.5`)  | Neeche round (`2`) |
| Negative         | `RangeError`       |
| `Infinity`       | `RangeError`       |

### Variable ke saath

```js
const count = 4;
const word2 = "Test";
console.log(word2.repeat(count)); // "TestTestTestTest"
```

---

## 13. Trim methods

**Whitespace** matlab spaces, tabs aur line breaks jo nazar nahi aate.

```js
const text = "  Hello, world!  ";

console.log(text.trim()); // "Hello, world!"
console.log(text.trimStart()); // "Hello, world!  "
console.log(text.trimEnd()); // "  Hello, world!"
```

| Method        | Kahan se hatata hai   |
| ------------- | --------------------- |
| `trim()`      | Shuru aur aakhir dono |
| `trimStart()` | Sirf shuru            |
| `trimEnd()`   | Sirf aakhir           |

**Zaroori:** ye lafzon ke **beech** ke spaces nahi hatate.

```js
console.log("  Hello   world  ".trim()); // "Hello   world"
```

---

## 14. `prompt()`

Browser mein user se dialog box ke zariye input leta hai.

```js
prompt(message, default);
```

- `message`: dialog mein dikhne wala sawal.
- `default`: input field mein pehle se likhi value (optional).

```js
const answer = prompt("What's your favorite animal?", "Cat");
```

### Return value

| User ka amal       | `prompt()` ki value |
| ------------------ | ------------------- |
| Text likh kar OK   | Wo text (string)    |
| Khali chhor kar OK | `""` (khali string) |
| Cancel             | `null`              |

### Poora example

**HTML:**

```html
<button id="prompt-btn">Show Prompt</button>
<p id="output"></p>
```

**JavaScript:**

```js
const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const userName = prompt("Please enter your name?", "Guest");

  if (userName === null) {
    output.textContent = "Prompt was Cancelled!";
  } else if (userName.trim() === "") {
    output.textContent = "You did not enter a name!";
  } else {
    output.textContent = "Hello, " + userName + "!";
  }
});
```

### Zaroori baatein

- Jab tak user OK ya Cancel na dabaye, script ruki rehti hai.
- Modern bari applications mein aksar avoid kiya jata hai (rukawat dalta hai, browsers mein alag dikhta hai, style nahi hota). Is ki jagah HTML forms use hote hain.
- `window.prompt()` aur `prompt()` ek hi cheez hain.

---

## 15. Method chaining

Kai methods ko ek ke baad ek jod sakte hain, kyunke har method string return karta hai:

```js
const userInput = "  Ali  ";
console.log(userInput.trim().toLowerCase()); // "ali"
```

```js
const text = "  JavaScript IS Fun  ";
const clean = text.trim().toLowerCase().replace("fun", "great");
console.log(clean); // "javascript is great"
```

---

## 16. Practice example: camelCase

camelCase mein pehla lafz chhote letters mein hota hai, aur is ke baad har lafz ka pehla letter bara hota hai: `freeCodeCamp`, `camelCase`, `learningIsFun`.

```js
const lowercaseWord = "camelcase";

const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(6);

console.log(camelCasedVersion); // "camelCase"
```

Tareeqa:

1. `slice(0, 5)` se `"camel"` mila.
2. `lowercaseWord[5]` se `"c"` mila, `toUpperCase()` se `"C"` bana.
3. `slice(6)` se baqi `"ase"` mila.
4. `+` se teeno jore gaye.

Aur "I love love love learning." wala example:

```js
const repeatedLove = "love ".repeat(3); // "love love love "
const newSentence = `I ${repeatedLove}learning.`;

console.log(newSentence.replace("  ", " ")); // "I love love love learning."
console.log(`I ${repeatedLove.trim()} learning.`); // "I love love love learning."
```

---

## 17. Common mistakes

| Galti                                                  | Sahi tareeqa                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `str.length()`                                         | `str.length` (property hai)                                  |
| `str.toUpperCase` (brackets nahi)                      | `str.toUpperCase()`                                          |
| `str.toUpperCase();` aur umeed ke `str` badal gayi     | `str = str.toUpperCase();` ya naye variable mein save karein |
| `"Hi ${name}"`                                         | `` `Hi ${name}` `` (backticks)                               |
| `str[str.length]`                                      | `str[str.length - 1]`                                        |
| `slice(0, 5)` mein 5th index ka character ummeed karna | End index shamil nahi hota                                   |
| `includes("Awesome")` aur `"awesome"` ko ek samajhna   | Dono case-sensitive hain                                     |
| `"x".repeat(-1)`                                       | Count negative nahi hona chahiye                             |
| `str.fromCharCode(65)`                                 | `String.fromCharCode(65)`                                    |
| `replace()` se saare matches badalne ki ummeed         | `replaceAll()` use karein                                    |

---

## 18. Cheat sheet

| Cheez             | Syntax                   | Misal                        | Natija     |
| ----------------- | ------------------------ | ---------------------------- | ---------- |
| Character         | `str[i]`                 | `"Hello"[1]`                 | `"e"`      |
| Aakhri character  | `str[str.length - 1]`    | `"Hello"[4]`                 | `"o"`      |
| Length            | `str.length`             | `"Hello".length`             | `5`        |
| Code              | `str.charCodeAt(i)`      | `"A".charCodeAt(0)`          | `65`       |
| Code se character | `String.fromCharCode(n)` | `String.fromCharCode(66)`    | `"B"`      |
| Position          | `str.indexOf(x)`         | `"fox".indexOf("x")`         | `2`        |
| Maujood hai?      | `str.includes(x)`        | `"fox".includes("o")`        | `true`     |
| Hissa             | `str.slice(a, b)`        | `"freeCodeCamp".slice(0, 4)` | `"free"`   |
| Bare letters      | `str.toUpperCase()`      | `"hi".toUpperCase()`         | `"HI"`     |
| Chhote letters    | `str.toLowerCase()`      | `"HI".toLowerCase()`         | `"hi"`     |
| Pehla badlo       | `str.replace(a, b)`      | `"aa".replace("a", "b")`     | `"ba"`     |
| Saare badlo       | `str.replaceAll(a, b)`   | `"aa".replaceAll("a", "b")`  | `"bb"`     |
| Dohrao            | `str.repeat(n)`          | `"Hi".repeat(3)`             | `"HiHiHi"` |
| Dono taraf saaf   | `str.trim()`             | `" Hi ".trim()`              | `"Hi"`     |
| Shuru saaf        | `str.trimStart()`        | `" Hi ".trimStart()`         | `"Hi "`    |
| Aakhir saaf       | `str.trimEnd()`          | `" Hi ".trimEnd()`           | `" Hi"`    |

### Sab se zaroori 6 baatein

1. Strings **immutable** hain, methods nayi string return karti hain.
2. Index **0** se shuru hota hai.
3. `includes()`, `replace()`, `replaceAll()` **case-sensitive** hain.
4. `slice(start, end)` mein **end shamil nahi** hota.
5. `repeat()` mein **negative** ya `Infinity` se `RangeError` aata hai.
6. `trim()` sirf **shuru aur aakhir** ke spaces hatata hai.
