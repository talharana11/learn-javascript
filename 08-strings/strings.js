// ============================================================
// JavaScript Strings: Practice File
// Har method ke 5-6 examples. Run karein: node practice.js
// ============================================================

function section(title) {
    console.log("\n===== " + title + " =====");
}

// ------------------------------------------------------------
// 1. Bracket notation (character access)
// ------------------------------------------------------------
section("Bracket notation");
const developer = "Jessica";
console.log(developer[0]);                    // J
console.log(developer[1]);                    // e
console.log(developer[developer.length - 1]); // a
console.log("JavaScript"[4]);                 // S
console.log("Hello"[10]);                     // undefined
console.log("A B"[1] === " ");                // true (space bhi character hai)

// ------------------------------------------------------------
// 2. length property
// ------------------------------------------------------------
section("length");
console.log("Hello, world!".length); // 13
console.log("JavaScript".length);    // 10
console.log("".length);              // 0
console.log(" ".length);             // 1
console.log("a b c".length);         // 5
const subject = "Programming";
console.log(subject.length);         // 11

// ------------------------------------------------------------
// 3. Template literals
// ------------------------------------------------------------
section("Template literals");
const name = "Jessica";
console.log(`Hello, ${name}!`);                      // Hello, Jessica!
console.log(`2 + 3 = ${2 + 3}`);                     // 2 + 3 = 5
const topic = "JavaScript";
console.log(`The word ${topic} has ${topic.length} letters.`);
console.log(`Upper: ${name.toUpperCase()}`);        // Upper: JESSICA
console.log(`Line one
Line two`);                                          // multi-line
console.log("Hi ${name}");                           // Hi ${name} (quotes mein kaam nahi karta)

// ------------------------------------------------------------
// 4. Escape characters aur \n
// ------------------------------------------------------------
section("Escape characters");
console.log("She said, \"Hello!\"");  // She said, "Hello!"
console.log('It\'s fun');             // It's fun
console.log("Line 1\nLine 2");        // do lines
console.log("Name:\tAli");            // tab ke saath
console.log("C:\\Users\\Ali");        // C:\Users\Ali
console.log('She said, "Hi"');        // alag quotes use karna

// ------------------------------------------------------------
// 5. charCodeAt()
// ------------------------------------------------------------
section("charCodeAt()");
console.log("A".charCodeAt(0));   // 65
console.log("a".charCodeAt(0));   // 97
console.log("!".charCodeAt(0));   // 33
console.log("Hi".charCodeAt(1));  // 105
console.log("0".charCodeAt(0));   // 48
console.log(" ".charCodeAt(0));   // 32

// ------------------------------------------------------------
// 6. String.fromCharCode()
// ------------------------------------------------------------
section("fromCharCode()");
console.log(String.fromCharCode(65));            // A
console.log(String.fromCharCode(97));            // a
console.log(String.fromCharCode(66));            // B
console.log(String.fromCharCode(48));            // 0
console.log(String.fromCharCode(33));            // !
console.log(String.fromCharCode(72, 105));       // Hi

// ------------------------------------------------------------
// 7. indexOf()
// ------------------------------------------------------------
section("indexOf()");
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.indexOf("fox"));            // 16
console.log(sentence.indexOf("cat"));            // -1
console.log("hello world".indexOf("o"));         // 4
console.log("hello world".indexOf("o", 5));      // 7 (index 5 se search)
console.log("JavaScript".indexOf("Script"));     // 4
console.log("JavaScript".indexOf("script"));     // -1 (case-sensitive)

// ------------------------------------------------------------
// 8. includes()
// ------------------------------------------------------------
section("includes()");
console.log(sentence.includes("fox"));                       // true
console.log(sentence.includes("cat"));                       // false
console.log("JavaScript is awesome!".includes("awesome"));   // true
console.log("JavaScript is awesome!".includes("Awesome"));   // false
console.log("Hello, JavaScript world!".includes("JavaScript", 7)); // true
console.log("Hello, JavaScript world!".includes("JavaScript", 8)); // false

// ------------------------------------------------------------
// 9. slice()
// ------------------------------------------------------------
section("slice()");
const text = "freeCodeCamp";
console.log(text.slice(0, 4));    // free
console.log(text.slice(4, 8));    // Code
console.log(text.slice(8));       // Camp
console.log(text.slice(-4));      // Camp
console.log(text.slice(0, -4));   // freeCode
console.log(text.slice(-8, -4));  // Code
console.log(text);                // freeCodeCamp (asal string nahi badli)

// ------------------------------------------------------------
// 10. toUpperCase()
// ------------------------------------------------------------
section("toUpperCase()");
console.log("Hello, world!".toUpperCase());  // HELLO, WORLD!
console.log("javascript".toUpperCase());     // JAVASCRIPT
console.log("abc123".toUpperCase());         // ABC123
console.log("Already UPPER".toUpperCase());  // ALREADY UPPER
console.log("a"[0].toUpperCase());           // A
const lower = "hello";
lower.toUpperCase();
console.log(lower);                          // hello (save nahi kiya, to wesi hi)

// ------------------------------------------------------------
// 11. toLowerCase()
// ------------------------------------------------------------
section("toLowerCase()");
console.log("HELLO, WORLD!".toLowerCase());          // hello, world!
console.log("I AM LEARNING JAVASCRIPT!".toLowerCase()); // i am learning javascript!
console.log("JavaScript Is Fun!".toLowerCase());     // javascript is fun!
console.log("ABC123".toLowerCase());                 // abc123
console.log("Awesome".toLowerCase() === "awesome");  // true
console.log("JavaScript is Awesome!".toLowerCase().includes("awesome")); // true

// ------------------------------------------------------------
// 12. replace()
// ------------------------------------------------------------
section("replace()");
console.log("I like cats".replace("cats", "dogs"));          // I like dogs
console.log("I love JavaScript!".replace("JavaScript", "coding")); // I love coding!
console.log("Hello, world! Welcome to the world of coding.".replace("world", "universe"));
// Hello, universe! Welcome to the world of coding. (sirf pehla)
console.log("freeCodeCamp".replace("freecodecamp", "fCC")); // freeCodeCamp (case-sensitive)
console.log("Hello World".replace(" World", ""));            // Hello
console.log("a-b-c".replace("-", "_"));                      // a_b-c

// ------------------------------------------------------------
// 13. replaceAll()
// ------------------------------------------------------------
section("replaceAll()");
console.log("I love cats and cats are so much fun!".replaceAll("cats", "dogs"));
// I love dogs and dogs are so much fun!
console.log("a-b-c".replaceAll("-", "_"));      // a_b_c
console.log("banana".replaceAll("a", "o"));     // bonono
console.log("1,2,3".replaceAll(",", " | "));    // 1 | 2 | 3
console.log("Hello".replaceAll("l", "L"));      // HeLLo
console.log("  a  b  ".replaceAll(" ", ""));    // ab

// ------------------------------------------------------------
// 14. repeat()
// ------------------------------------------------------------
section("repeat()");
console.log("Hello".repeat(3));       // HelloHelloHello
console.log("Hello! ".repeat(2));     // Hello! Hello!
console.log("=".repeat(20));          // ====================
console.log("Test".repeat(0) === ""); // true
console.log("Test".repeat(2.5));      // TestTest (neeche round)
const count = 4;
console.log("ab".repeat(count));      // abababab
try {
    "Test".repeat(-1);
} catch (error) {
    console.log(error.name);            // RangeError
}

// ------------------------------------------------------------
// 15. trim()
// ------------------------------------------------------------
section("trim()");
console.log("[" + "   Hello!   ".trim() + "]");        // [Hello!]
console.log("[" + "  Hello, world!  ".trim() + "]");   // [Hello, world!]
console.log("[" + "\n\tText\n".trim() + "]");          // [Text]
console.log("[" + "  Hello   world  ".trim() + "]");   // [Hello   world] (beech ke spaces nahi hatte)
console.log("[" + "NoSpaces".trim() + "]");            // [NoSpaces]
console.log("   ".trim() === "");                      // true

// ------------------------------------------------------------
// 16. trimStart()
// ------------------------------------------------------------
section("trimStart()");
console.log("[" + "   Hello!   ".trimStart() + "]");        // [Hello!   ]
console.log("[" + "  Hello, world!  ".trimStart() + "]");   // [Hello, world!  ]
console.log("[" + "\t\tTabbed".trimStart() + "]");          // [Tabbed]
console.log("[" + "Hello  ".trimStart() + "]");             // [Hello  ]
console.log("   Hi".trimStart().length);                   // 2
console.log("   ".trimStart() === "");                      // true

// ------------------------------------------------------------
// 17. trimEnd()
// ------------------------------------------------------------
section("trimEnd()");
console.log("[" + "   Hello!   ".trimEnd() + "]");        // [   Hello!]
console.log("[" + "  Hello, world!  ".trimEnd() + "]");   // [  Hello, world!]
console.log("[" + "Line\n\n".trimEnd() + "]");            // [Line]
console.log("[" + "  Hello".trimEnd() + "]");             // [  Hello]
console.log("Hi   ".trimEnd().length);                   // 2
console.log("love love love ".trimEnd());                // love love love

// ------------------------------------------------------------
// 18. Method chaining
// ------------------------------------------------------------
section("Method chaining");
console.log("  Ali  ".trim().toLowerCase());                         // ali
console.log("  JavaScript IS Fun  ".trim().toLowerCase().replace("fun", "great"));
// javascript is great
console.log("hello".slice(0, 1).toUpperCase() + "hello".slice(1));    // Hello
console.log("ab".repeat(3).toUpperCase());                            // ABABAB
console.log("  a-b-c  ".trim().replaceAll("-", "+"));                  // a+b+c

// ------------------------------------------------------------
// 19. Mini projects
// ------------------------------------------------------------
section("Mini projects");

// (a) camelCase banana
const lowercaseWord = "camelcase";
const camelCasedVersion =
    lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(6);
console.log(camelCasedVersion); // camelCase

// (b) Pehla letter bara karna
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize("jAVAsCRIPT")); // Javascript

// (c) Repeated word ka jumla
const repeatedLove = "love ".repeat(3);
const newSentence = `I ${repeatedLove.trim()} learning.`;
console.log(newSentence); // I love love love learning.

// (d) Ulta karna (reverse)
let reversed = "";
const original = "Hello";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed); // olleH

// ------------------------------------------------------------
// 20. prompt() (sirf browser mein chalta hai)
// ------------------------------------------------------------
// Node.js mein prompt() nahi hota. Isay browser ke console ya
// HTML file ke <script> mein chalayein.
//
// const userName = prompt("Please enter your name?", "Guest");
//
// if (userName === null) {
//   console.log("Prompt was Cancelled!");
// } else if (userName.trim() === "") {
//   console.log("You did not enter a name!");
// } else {
//   console.log("Hello, " + userName.trim() + "!");
// }
//
// Aur 5 examples:
// prompt("Enter your age:");              // sirf message
// prompt("Favorite color?", "Blue");      // default value ke saath
// const city = prompt("City?") ?? "N/A";  // Cancel par "N/A"
// const num = Number(prompt("Number?"));  // string ko number banana
// window.prompt("Same as prompt()");      // window.prompt bhi wohi hai