// Task 1: Initialize the Array
let greetings = new Array(7).fill("Hello");
console.log(greetings);// ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

// Task 2: Update part of the Array
greetings.fill("Hi", 0, 3);
console.log(greetings); // ["Hi", "Hi", "Hi", "Hello", "Hello", "Hello", "Hello"]

// Task 3: Populate with a for loop
let multiplyTen = new Array(5);
for (let i = 0; i < multiplyTen.length; i++) {
  multiplyTen[i] = i * 10;
}
console.log(multiplyTen); // [0, 10, 20, 30, 40]
