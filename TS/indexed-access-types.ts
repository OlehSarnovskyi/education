interface Person { age: number; name: string; alive: boolean; }
type Age = Person['age'];
let age: Age = 2;

type I1 = Person['age' | 'name'];

type I2 = Person[keyof Person];




const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23, alive: true },
  { name: 'Eve', age: 38 },
];

type Person2 = typeof MyArray[number];

let p2: Person2 = {
  age: 2,
  name: 's',
  alive: true
};




// can use only *types*
// cannot mix runtime and build time
const key = 'age';
type Age2 = Person[key];
