const person = {
    name: "Kathline",
    age: 20
};

const hobbies = ["Eating", "Watching", "Reading"];

const { name, age } = person
const [hobby1, hobby2, hobby3] = hobbies;

function printName({ name }) {
    console.log(name);
}

console.log(name, age);
console.log(hobby1, hobby2, hobby3);
printName(person);