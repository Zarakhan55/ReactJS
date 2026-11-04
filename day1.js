// maxOfTwo(a, b) returns the bigger number
const maxOftwo =(a,b)=>a>b?a:b;
console.log(maxOftwo(5, 10)); // Output: 10
// isEven(n) returns true or false
const event=(n)=>n%2===0;
console.log(event(4));











const user = {
  name: "Ayesha",
  age: 24,
  city: "Karachi",
  job: "Designer",
  skills: ["Figma", "CSS", "React"]
};
// Destructure name, age, city, job from user.
// Destructure the first two skills (skill1, skill2) from user.skills.
// Print this sentence using a template literal:
// Ayesha, 24, is a Designer from Karachi. Top skills: Figma and CSS.
// Write a function introduce({ name, job }) that returns "Ayesha works as a Designer".
const { name, age, city, job } = user;
const [skill1, skill2] = user.skills;
console.log(`${name}, ${age}, is a ${job} from ${city}. Top skills: ${skill1} and ${skill2}.`);
const introduce = ({ name, job }) => `${name} works as a ${job}`;
console.log(introduce(user));




const original = { name: "Ali", age: 25, hobbies: ["gaming", "coding"] };
const nums = [1, 2, 3];
// Make a copy of original with age changed to 30. Then print original.age to prove it is still 25.
// Make a new object with "reading" added to hobbies. The original hobbies array must not change.
// Make a new array from nums with 0 at the start and 4 at the end.
// Merge { a: 1, b: 2 } and { b: 3, c: 4 }. Predict the result before running it.
const copy={ ...original,age:30};
console.log(original.age); // Output: 25

const reading={ ...original,hobbies:[...original.hobbies,"reading"]};
console.log(original.hobbies); // Output: ["gaming", "coding"]
const newArray=[0,...nums,4];
const merged={ ...{ a: 1, b: 2 }, ...{ b: 3, c: 4 }};
console.log(merged); // Output: { a: 1, b: 3, c: 4 }