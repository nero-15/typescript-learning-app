var dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet) {
    console.log("Hello, " + pet.name);
}
greet(dog); // OK
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; // OK
// x = y; // Error
var items = [1, 2, 3];
// Don't force these extra parameters
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
