function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(5, 'backnumber'));
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example('aaaa', 'aaaa');
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
var x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x);
x = "goodbye!";
console.log(x);
