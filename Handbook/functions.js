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
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// const arr = combine([1, 2, 3], ["hello"]);
var arr = combine([1, 2, 3], ["hello"]);
console.log(arr);
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
// a: number (good)
//const a = firstElement1([1, 2, 3]);
// b: any (bad)
var b = firstElement2([1, 2, 3]);
//console.log(a)
console.log(b);
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
// The inferred return type is void
function noop() {
    return;
}
function fail(msg) {
    throw new Error(msg);
}
function fn(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
// 'a' gets value [10, 20, 30, 40]
var a = multiply(10, 1, 2, 3, 4);
console.log(a);
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
