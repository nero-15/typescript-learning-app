// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet('toka');

function getFavoriteNumber(): number {
  return 26;
}
console.log(getFavoriteNumber());

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
    console.log("The coordinate's x value is " + obj.first);
    console.log("The coordinate's y value is " + obj.last);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
