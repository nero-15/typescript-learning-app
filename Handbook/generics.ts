function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity("myString");
console.log(output);
