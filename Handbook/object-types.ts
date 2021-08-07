interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

let toka: Person = {
    name: 'toka',
    age: 1
}
console.log(greet(toka))
