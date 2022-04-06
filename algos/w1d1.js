// const strA1 = "ABC";
// const strB1 = "abc";
// const expected1 = true;

// const strA2 = "ABC";
// const strB2 = "abd";
// const expected2 = false;

// const strA3 = "ABC";
// const strB3 = "bc";
// const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
    return (strA.toLowerCase() === strB.toLowerCase());
}

console.log(caseInsensitiveStringCompare(strA1,strB1));
console.log(caseInsensitiveStringCompare(strA2,strB2));
console.log(caseInsensitiveStringCompare(strA3,strB3));

// =============
// Acronym
// =============

/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

// const str1 = "object oriented programming";
// const expected1 = "OOP";

// // The 4 pillars of OOP
// const str2 = "abstraction polymorphism inheritance encapsulation";
// const expected2 = "APIE";

// const str3 = "software development life cycle";
// const expected3 = "SDLC";

// // Bonus: ignore extra spaces
// const str4 = "  global   information tracker    ";
// const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    // edge case empty
    if(str.length <= 0) { return "String is empty!"; }

    var output = "";

    if(str[0] !== " ") { output += str[0].toUpperCase(); }

    for(let i = 1; i < str.length; i++) {
        if((str[i - 1] === " " && str[i] !== " ") ) { output += str[i].toUpperCase(); }
    }

    return output;
}

console.log(acronymize(str1));
console.log(acronymize(str2));
console.log(acronymize(str3));
console.log(acronymize(str4));


// ===============
// Reverse String
// ===============

/* 
String: Reverse
Given a string,
return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}