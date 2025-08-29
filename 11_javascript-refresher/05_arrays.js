let foods = ["Pizza", "Fries", "Burger"];

foods.push("Pasta"); // add at end
foods.shift(); // remove first

for (let food of foods) {
    console.log(food);
}

let likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);