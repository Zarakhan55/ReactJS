const nums = [1, 2, 3, 4, 5];

const big = nums.filter(n => n > 3);

console.log(big); // [4, 5]

const users = [
  { name: "Ali", age: 15 },
  { name: "Sara", age: 22 },
  { name: "Omar", age: 30 },
];
const adults=users.filter(user => user.age >= 18);
console.log(adults); // [{ name: "Sara", age: 22 }, { name: "Omar", age: 30 }]

const prices = [10, 25, 40, 5, 60];
// Make a new array with only prices over 20.
// Make a new array with only prices under 30.
// Print prices to check it did not change.

const over20 = prices.filter(p=>p>20);
console.log(over20); // [25, 40, 60]
const under30 = prices.filter(p=>p<30);
console.log(under30);
console.log(prices); // [10, 25, 40, 5, 60]