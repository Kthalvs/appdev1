function greet(name) {
    return `Hello, ${name}!`; 
}

const square = (num) => num * num;

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(greet("Kathline"));
console.log(square(4));
console.log(calculator(3, 5));