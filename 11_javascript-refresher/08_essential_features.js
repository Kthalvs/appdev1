let hobbies = ["Watching", "Reading", "Eating"];
hobbies.map(hobby => console.log(hobby));

const student = { name: "Kathline", age: 20 };
const { name, age } = student;
console.log(name, age);

let original = [1, 2, 3];
let copy = [...original, 4, 5];
console.log(copy);