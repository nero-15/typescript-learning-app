function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function firstElement(arr) {
    return arr[0];
}
// s is of type 'string'
var s = firstElement(["a", "b", "c"]);
// n is of type 'number'
var n = firstElement([1, 2, 3]);
console.log(s);
console.log(n);
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
console.log(parsed);
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
var longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
var longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
//const notOK = longest(10, 100);
