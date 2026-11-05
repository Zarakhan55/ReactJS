const arr=[1,2,3];
const dbl=arr.map(n=>n*2);
console.log(dbl);


const arr1=[
    {
        name:"zara",
        age:20
    },
    {
        name:"mike",
        age:30
    },
    {
        name:"john",
        age:40
    }
]
const newNames=arr1.map(n=>n.name)
console.log(newNames);



const prices = [10, 20, 30];
const plusTax =prices.map(price=>price+4);
console.log(plusTax);
const mul=prices.map(price=>price*2);
console.log(mul);