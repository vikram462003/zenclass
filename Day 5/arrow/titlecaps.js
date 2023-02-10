const arr = ["hello", "world", "javascript"];
const titleCased = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(titleCased);
