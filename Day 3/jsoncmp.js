let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let string1 = JSON.stringify(obj1);
let string2 = JSON.stringify(obj2);

if (string1 == string2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}