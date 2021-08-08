function identity<Type>(arg: Type): Type {
    //console.log(arg.length);//error
    return arg;
}

let output = identity("myString");
console.log(output);
