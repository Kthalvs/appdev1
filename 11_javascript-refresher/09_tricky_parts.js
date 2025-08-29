console.log("5" == 5); // true
console.log("5" === 5); // false

let x;
let y = null;
console.log(typeof x); // undefined
console.log(typeof y); // object

const obj = {
    regularFunc: function () {
        console.log("Regular:", this);
    },
    arrowFunc: () => {
        console.log("Arrow", this);
    }
};

obj.regularFunc(); // refers to obj
obj.arrowFunc(); // refers to global/window

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - same reference

let arr3 = [1, 2, 3]
let arr4 = [...arr3];
arr4.push(4);
console.log(arr3) // [1, 2, 3]
console.log(arr4); // [1, 2, 3, 4]