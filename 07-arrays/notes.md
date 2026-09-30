# JavaScript Arrays — Detailed Notes

## 1. Array kya hota hai?

Array ek **ordered list** hoti hai jis mein multiple values ek hi variable mein store ki ja sakti hain. Har value ka apna ek **index** hota hai (zero-based, yani pehli value ka index `0` hota hai).

```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]
```

**Fayde:**

- Related data ko ek jagah organize karna
- Loop ke sath easily process karna
- Dynamic size (elements add/remove kar sakte ho)

---

## 2. Array Banana (Creation)

```js
// Array literal (sab se common tareeqa)
let colors = ["red", "green", "blue"];

// Array constructor
let numbers = new Array(1, 2, 3);

// Khali array
let empty = [];

// Fixed length ka khali array
let seats = new Array(5); // 5 empty slots
```

Array mein **alag alag data types** bhi rakh sakte hain:

```js
let mixed = ["Talha", 24, true, null, { city: "Vehari" }, [1, 2, 3]];
```

---

## 3. Array ke Elements Access Karna

Bracket notation se, index ke zariye:

```js
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "mango"
console.log(fruits[10]); // undefined (index exist nahi karta)
```

### Last element nikalna

```js
console.log(fruits[fruits.length - 1]); // "mango"
// ya
console.log(fruits.at(-1)); // "mango" (modern tareeqa)
```

---

## 4. `length` Property

Array mein kitne elements hain, ye batata hai:

```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits.length); // 3
```

`length` ko manually change bhi kar sakte ho (array ko chhota/bara karne ke liye):

```js
let arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr); // [1, 2, 3]
```

---

## 5. Elements Update Karna

```js
let fruits = ["apple", "banana", "mango"];
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]
```

Agar existing length se bara index par value do, array automatically bara ho jata hai (beech ke gaps `empty`/`undefined` hote hain):

```js
let arr = ["a", "b"];
arr[5] = "z";
console.log(arr); // ["a", "b", <3 empty items>, "z"]
console.log(arr.length); // 6
```

---

## 6. Array Methods — Add/Remove Elements

| Method      | Kaam                                                    | End/Start |
| ----------- | ------------------------------------------------------- | --------- |
| `push()`    | Element **end** mein add karta hai                      | End       |
| `pop()`     | Last element **remove** karta hai aur return karta hai  | End       |
| `unshift()` | Element **start** mein add karta hai                    | Start     |
| `shift()`   | First element **remove** karta hai aur return karta hai | Start     |

```js
let arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]  (4 return hua)
arr.unshift(0); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]  (0 return hua)
```

**Multiple values ek sath:**

```js
arr.push(4, 5, 6); // end mein 3 values add
arr.unshift(-1, 0); // start mein 2 values add
```

---

## 7. `splice()` — Add/Remove/Replace (kahin bhi)

`splice(startIndex, deleteCount, ...itemsToAdd)`

```js
let arr = [1, 2, 3, 4, 5];

// Remove karna
arr.splice(1, 2); // index 1 se 2 elements remove
console.log(arr); // [1, 4, 5]

// Add karna (bina kuch remove kiye)
let arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4); // index 2 par insert
console.log(arr2); // [1, 2, 3, 4, 5]

// Replace karna
let arr3 = [1, 2, 3];
arr3.splice(1, 1, "two");
console.log(arr3); // [1, "two", 3]
```

`splice()` **original array ko modify** karta hai aur removed elements return karta hai.

---

## 8. `slice()` — Copy Nikalna (bina modify kiye)

`slice(startIndex, endIndex)` — `endIndex` exclusive hota hai.

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3)); // [2, 3]  (index 1 se 2 tak, 3 exclude)
console.log(arr.slice(2)); // [3, 4, 5]  (index 2 se end tak)
console.log(arr.slice(-2)); // [4, 5]  (aakhri 2 elements)
console.log(arr); // [1, 2, 3, 4, 5]  (original change nahi hua)
```

**`splice` vs `slice` yaad rakhne ka tareeqa:**

- `splice` → original array ko **badalta** hai (modify/mutate)
- `slice` → original array ko **chhota nahi karta**, sirf copy nikalta hai

---

## 9. Array Search Methods

```js
let fruits = ["apple", "banana", "mango", "banana"];

// indexOf: pehli occurrence ka index, warna -1
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape")); // -1

// lastIndexOf: aakhri occurrence ka index
console.log(fruits.lastIndexOf("banana")); // 3

// includes: true/false
console.log(fruits.includes("mango")); // true
console.log(fruits.includes("grape")); // false

// find: condition match karne wala pehla element
let numbers = [4, 9, 15, 20];
console.log(numbers.find((n) => n > 10)); // 15

// findIndex: us element ka index
console.log(numbers.findIndex((n) => n > 10)); // 2
```

---

## 10. Array ko String Banana

```js
let fruits = ["apple", "banana", "mango"];

console.log(fruits.join()); // "apple,banana,mango"
console.log(fruits.join(", ")); // "apple, banana, mango"
console.log(fruits.join(" - ")); // "apple - banana - mango"
console.log(fruits.toString()); // "apple,banana,mango"
```

String ko array banane ke liye `split()`:

```js
let str = "apple,banana,mango";
let arr = str.split(",");
console.log(arr); // ["apple", "banana", "mango"]
```

---

## 11. Array ko Loop Karna

```js
let fruits = ["apple", "banana", "mango"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of (value milti hai)
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach (callback function)
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

---

## 12. Higher-Order Array Methods (bohat important)

### `map()` — har element ko transform kar ke **naya array** banata hai

```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original safe)
```

### `filter()` — condition pass karne wale elements ka **naya array**

```js
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### `reduce()` — poore array ko ek **single value** mein convert karta hai

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 10

// Max nikalna
let max = numbers.reduce((a, b) => (a > b ? a : b));
console.log(max); // 4
```

### `some()` — kam se kam ek element condition pass kare to `true`

```js
let numbers = [1, 2, 3];
console.log(numbers.some((n) => n > 2)); // true
```

### `every()` — **sab** elements condition pass karein to `true`

```js
let numbers = [1, 2, 3];
console.log(numbers.every((n) => n > 0)); // true
console.log(numbers.every((n) => n > 1)); // false
```

### `sort()` — array ko sort karta hai (original ko **modify** karta hai)

```js
let numbers = [10, 2, 33, 4];
numbers.sort();
console.log(numbers); // [10, 2, 33, 4] → [10, 2, 33, 4] (string ki tarah sort hota hai!)

// Numbers ko sahi tarah sort karne ke liye compare function do:
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [2, 4, 10, 33]

numbers.sort((a, b) => b - a); // descending
console.log(numbers); // [33, 10, 4, 2]
```

**Zaroori note:** `sort()` bina compare function ke numbers ko **string** samajh kar sort karta hai (e.g. `10` se pehle `2` nahi aata, kyunke "1" < "2" character-wise). Is liye numbers sort karne ke liye hamesha `(a, b) => a - b` use karo.

### `reverse()` — array ko ultah kar deta hai

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---

## 13. Array vs Object

|          | Array                               | Object                                     |
| -------- | ----------------------------------- | ------------------------------------------ |
| Access   | Index se (`arr[0]`)                 | Key se (`obj.key`)                         |
| Order    | Ordered (sequence matter karti hai) | Un-ordered (keys ka koi fix sequence nahi) |
| Use case | List of similar items               | Related properties (entity describe karna) |

```js
let arr = ["Talha", 24, "Vehari"]; // Array
let obj = { name: "Talha", age: 24, city: "Vehari" }; // Object
```

---

## 14. Multi-dimensional Arrays (Array ke andar Array)

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0]); // [1, 2, 3]
console.log(matrix[1][2]); // 6  (row 1, column 2)

// Loop se print karna
for (let row of matrix) {
  for (let val of row) {
    console.log(val);
  }
}
```

---

## 15. Array of Objects (bohat common real-world pattern)

```js
let users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 22 },
  { name: "Omar", age: 30 },
];

// Sirf names nikalna
let names = users.map((u) => u.name);
console.log(names); // ["Ali", "Sara", "Omar"]

// Age se filter karna
let adults = users.filter((u) => u.age >= 25);
console.log(adults); // [{name: "Ali", age: 25}, {name: "Omar", age: 30}]

// Kisi specific user ko find karna
let sara = users.find((u) => u.name === "Sara");
console.log(sara); // {name: "Sara", age: 22}
```

---

## 16. Array Ko Check Karna

```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
console.log(Array.isArray({ a: 1 })); // false

console.log(typeof [1, 2, 3]); // "object" (typeof kaafi nahi hota!)
```

---

## 17. Array Copy Karna (Spread Operator)

```js
let original = [1, 2, 3];

// Shallow copy
let copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (safe)
console.log(copy); // [1, 2, 3, 4]

// Do arrays ko combine karna
let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]
```

**Note:** `let copy = original;` likhne se **reference copy** hoti hai (dono same array point karte hain), isse bachne ke liye `...` (spread) ya `slice()` use karo.

---

## 18. Destructuring (Array se values nikalna)

```js
let colors = ["red", "green", "blue"];

let [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Kuch skip karna
let [primary, , tertiary] = colors;
console.log(primary, tertiary); // red blue

// Rest operator se baqi sab
let [main, ...rest] = colors;
console.log(main); // red
console.log(rest); // ["green", "blue"]
```

---

## 19. Quick Cheat Sheet

| Method       | Kaam                        | Original Change? |
| ------------ | --------------------------- | ---------------- |
| `push()`     | End mein add                | Haan             |
| `pop()`      | End se remove               | Haan             |
| `unshift()`  | Start mein add              | Haan             |
| `shift()`    | Start se remove             | Haan             |
| `splice()`   | Add/remove/replace          | Haan             |
| `slice()`    | Copy nikalna                | Nahi             |
| `sort()`     | Sort karna                  | Haan             |
| `reverse()`  | Ultah karna                 | Haan             |
| `map()`      | Transform kar ke naya array | Nahi             |
| `filter()`   | Condition se naya array     | Nahi             |
| `reduce()`   | Single value banana         | Nahi             |
| `concat()`   | Arrays jorna                | Nahi             |
| `join()`     | String banana               | Nahi             |
| `indexOf()`  | Index dhoondna              | Nahi             |
| `includes()` | Present hai ya nahi         | Nahi             |
| `find()`     | Ek element dhoondna         | Nahi             |

---

## 20. Best Practices

1. `Array.isArray()` se check karo, `typeof` se nahi
2. Numbers sort karte waqt hamesha compare function do: `sort((a, b) => a - b)`
3. Original array ko accidentally modify karne se bachne ke liye `map`, `filter`, `slice` use karo (ye naya array dete hain)
4. Array copy karne ke liye `=` nahi, `[...arr]` ya `slice()` use karo
5. Loop ke liye jab index chahiye ho to `for` ya `forEach`, warna `for...of` zyada readable hai

---

# Practice Code

## Level 1: Basic

**Q1.** Array `[10, 20, 30, 40]` mein se 3rd element print karo.

**Q2.** Array ke end mein `50` add karo, phir start mein `0` add karo.

**Q3.** Array `[5, 12, 8, 30, 1]` mein se sab se bara number `indexOf` ke bina `find` karo.

**Q4.** Array ka last element `pop()` se nikalo aur print karo.

**Q5.** Check karo `"mango"` array `["apple", "banana", "mango"]` mein hai ya nahi.

## Level 2: Intermediate

**Q6.** Array `[1, 2, 3, 4, 5, 6]` mein se sirf even numbers ka naya array banao.

**Q7.** Array `[1, 2, 3, 4]` ke har number ko square kar ke naya array banao.

**Q8.** Array `[10, 20, 30]` ka sum `reduce` se nikalo.

**Q9.** Array `["banana", "apple", "mango"]` ko alphabetically sort karo.

**Q10.** Array `[5, 3, 8, 1, 9]` ko numbers ki tarah (ascending) sort karo.

## Level 3: Advanced

**Q11.** Array of objects se sirf un users ke naam nikalo jin ki age 18 se zyada hai.

```js
let users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Omar", age: 15 },
];
```

**Q12.** Array `[1, [2, 3], [4, [5, 6]]]` ko flat karo (`[1, 2, 3, 4, 5, 6]`).

**Q13.** Duplicate values wale array `[1, 2, 2, 3, 3, 3]` se sirf unique values nikalo.

**Q14.** Array `[1, 2, 3]` aur `[4, 5, 6]` ko ek array mein combine karo (spread operator se).

**Q15.** Array `["a", "b", "c", "d"]` se destructuring ke zariye pehla element aur baqi sab alag alag variables mein nikalo.

---

## Solutions

```js
// Q1
let arr1 = [10, 20, 30, 40];
console.log(arr1[2]); // 30

// Q2
let arr2 = [10, 20, 30, 40];
arr2.push(50);
arr2.unshift(0);
console.log(arr2); // [0, 10, 20, 30, 40, 50]

// Q3
let arr3 = [5, 12, 8, 30, 1];
let max = arr3.reduce((a, b) => (a > b ? a : b));
console.log(max); // 30

// Q4
let arr4 = [1, 2, 3];
let last = arr4.pop();
console.log(last); // 3
console.log(arr4); // [1, 2]

// Q5
let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("mango")); // true

// Q6
let nums6 = [1, 2, 3, 4, 5, 6];
let evens = nums6.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Q7
let nums7 = [1, 2, 3, 4];
let squares = nums7.map((n) => n * n);
console.log(squares); // [1, 4, 9, 16]

// Q8
let nums8 = [10, 20, 30];
let sum = nums8.reduce((total, n) => total + n, 0);
console.log(sum); // 60

// Q9
let names9 = ["banana", "apple", "mango"];
names9.sort();
console.log(names9); // ["apple", "banana", "mango"]

// Q10
let nums10 = [5, 3, 8, 1, 9];
nums10.sort((a, b) => a - b);
console.log(nums10); // [1, 3, 5, 8, 9]

// Q11
let users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Omar", age: 15 },
];
let adultNames = users.filter((u) => u.age > 18).map((u) => u.name);
console.log(adultNames); // ["Sara"]

// Q12
function flatten(arr) {
  return arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    [],
  );
}
console.log(flatten([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// Q13
let dup = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(dup)];
console.log(unique); // [1, 2, 3]

// Q14
let a14 = [1, 2, 3];
let b14 = [4, 5, 6];
let combined = [...a14, ...b14];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Q15
let letters = ["a", "b", "c", "d"];
let [firstLetter, ...restLetters] = letters;
console.log(firstLetter); // "a"
console.log(restLetters); // ["b", "c", "d"]
```

---

## Bonus Challenges

1. Ek array `[3, 7, 2, 9, 4]` mein se sab se chhota aur sab se bara number ek sath find karo (ek function se).
2. Do arrays ke common elements nikalo (intersection): `[1, 2, 3, 4]` aur `[3, 4, 5, 6]` → `[3, 4]`.
3. Array `[1, 2, 3, 4, 5]` ko do halves mein divide karo.
4. Ek `chunk(arr, size)` function likho jo array ko chhote chhote groups mein baant de: `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`.
