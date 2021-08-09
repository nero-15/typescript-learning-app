// Prints "string"
console.log(typeof "Hello world");

let s = "hello";
let n: typeof s;

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
