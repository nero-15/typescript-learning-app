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
    console.log(obj.first.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
