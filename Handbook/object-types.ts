interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

let toka: Person = {
    name: 'toka',
    age: 1
}
console.log(greet(toka))

interface SomeType {
  readonly prop: string;
}

// function doSomething(obj: SomeType) {
//   // We can read from 'obj.prop'.
//   console.log(`prop has the value '${obj.prop}'.`);
//
//   // But we can't re-assign it.
//   //obj.prop = "hello";
// }

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'


interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// interface Colorful {
//   color: string;
// }
//
// interface Circle {
//   radius: number;
// }
//
// interface ColorfulCircle extends Colorful, Circle {}
//
// const cc: ColorfulCircle = {
//   color: "red",
//   radius: 42,
// };
// console.log(cc)

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
//draw({ color: "red", raidus: 42 });

// Generic Object Types
// interface Box {
//   contents: unknown;
// }
//
// let x: Box = {
//   contents: "hello world",
// };
//
// // we could check 'x.contents'
// if (typeof x.contents === "string") {
//   console.log(x.contents.toLowerCase());
// }
//
// // or we could use a type assertion
// console.log((x.contents as string).toLowerCase());

interface Box<Type> {
  contents: Type;
}

interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: "hello" };
boxA.contents;


let boxB: StringBox = { contents: "world" };
boxB.contents;

// function doSomething(value: Array<string>) {
//   console.log(value);
// }

let myArray: string[] = ["hello", "world"];

// either of these work!
// doSomething(myArray);
// doSomething(new Array("hello", "world"));

function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  //values.push("hello!");
}

function doSomething(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
}

doSomething(["hello", 42]);
