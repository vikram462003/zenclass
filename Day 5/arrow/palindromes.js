const arr = ["car", "bike", "hello", "world"];
const isPalindrome = word => word === word.split("").reverse().join("");
const palindromes = arr.filter(isPalindrome);
console.log(palindromes);
