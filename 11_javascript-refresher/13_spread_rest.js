const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

const user = { name: "Kathline", age:20 };
const extendedUser = { ...user, course: "BSIS" };

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(newNumbers);
console.log(extendedUser);
console.log(sum(1, 2, 3, 4));