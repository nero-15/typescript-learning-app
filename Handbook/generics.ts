interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    //console.log(arg.length);//error
    return arg;
}

let output = identity("myString");
console.log(output);

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);// Array has a .length, so no more error
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
