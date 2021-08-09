//type Person = { age: number; name: string; alive: boolean };
// type Age = Person["age"];//type Age = numbe//r

type I1 = Person["age" | "name"];

//type I1 = string | number

type I2 = Person[keyof Person];

//type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
// type I3 = Person[AliveOrName];

//type I3 = string | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

// type Person = {
//     name: string;
//     age: number;
// }
type Age = typeof MyArray[number]["age"];

//type Age = number
// Or
type Age2 = Person["age"];

//type Age2 = number

// alias
type key = "age";
//type Age = Person[key];
