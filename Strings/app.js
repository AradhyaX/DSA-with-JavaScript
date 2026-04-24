// TOPIC: Strings in JavaScript

// Q1: REVERSE A STRING
/*
let strRev = "hello";
let reversedStr = "";
for (let i = strRev.length - 1; i >= 0; i--) {
    reversedStr += strRev[i];
}
console.log("Reversed string is: " + reversedStr);
*/

// Q2: CHECK FOR PALINDROME
/*
let strPal = "racecar";
let isPalindrome = true;
let left = 0;
let right = strPal.length - 1;
while (left < right) {
    if (strPal[left] !== strPal[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}
console.log("Is '" + strPal + "' a palindrome? " + isPalindrome);
*/

// Q3: COUNT VOWELS IN A STRING
/*
let strVowels = "javascript is awesome";
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < strVowels.length; i++) {
    if (vowels.indexOf(strVowels[i]) !== -1) {
        count++;
    }
}
console.log("Number of vowels: " + count);
*/

// Q4: FIND LONGEST WORD IN A STRING
/*
let sentence = "The quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
let longestWord = "";
for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
console.log("Longest word is: " + longestWord);
*/

// Q5: CAPITALIZE FIRST LETTER OF EACH WORD
/*
let strToCapitalize = "hello world from javascript";
let wordsArr = strToCapitalize.split(" ");
for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1);
}
let capitalizedStr = wordsArr.join(" ");
console.log("Capitalized string: " + capitalizedStr);
*/
