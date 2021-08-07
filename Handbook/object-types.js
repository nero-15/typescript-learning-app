function greet(person) {
    return "Hello " + person.name;
}
var toka = {
    name: 'toka',
    age: 1
};
console.log(greet(toka));
var writablePerson = {
    name: "Person McPersonface",
    age: 42
};
// works
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
function draw(circle) {
    console.log("Color was " + circle.color);
    console.log("Radius was " + circle.radius);
}
// okay
draw({ color: "blue", radius: 42 });
var boxA = { contents: "hello" };
boxA.contents;
var boxB = { contents: "world" };
boxB.contents;
function doSomething(value) {
    console.log(value);
}
var myArray = ["hello", "world"];
// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
