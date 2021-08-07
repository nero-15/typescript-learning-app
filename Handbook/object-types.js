function greet(person) {
    return "Hello " + person.name;
}
var toka = {
    name: 'toka',
    age: 1
};
console.log(greet(toka));
function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log("prop has the value '" + obj.prop + "'.");
    // But we can't re-assign it.
    //obj.prop = "hello";
}
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
// oops
//draw({ color: "red", raidus: 42 });
