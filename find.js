const nums = [5, 12, 8, 20];

const first = nums.find(n => n > 10);

console.log(first); // 12



const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Omar" },
];

const user = users.find(u => u.id === 2);

console.log(user); // { id: 2, name: "Sara" }

const products = [
  { id: 1, name: "Phone", price: 800 },
  { id: 2, name: "Shirt", price: 30 },
  { id: 3, name: "Laptop", price: 1500 },
];

const p1=products.find(p => p.id === 3);
console.log(p1); // { id: 3, name: "Laptop", price: 1500 }
const p2=products.find( p => p.name === "Shirt");
console.log(p2); // { id: 2, name: "Shirt", price: 30 }
const p3=products.find(p => p.price > 1000);
console.log(p3); // { id: 3, name: "Laptop", price: 1500 }