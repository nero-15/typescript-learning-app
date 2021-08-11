var person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});
person.on("firstNameChanged", function (newValue) {
    console.log("firstName was changed to " + newValue + "!");
});
