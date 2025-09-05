// Import default and named exports from the other module
import greeting, { info } from './15_modules_export.js';

// Use the imports to display a message
console.log(greeting()); // "Hello from the module!"
console.log(`Name: ${info.name}, Age: ${info.age}`);