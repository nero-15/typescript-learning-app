function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

console.log(greet({name: 'toka', age: 1}))
