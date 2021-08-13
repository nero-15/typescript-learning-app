// class Point {
//   x = 0;
//   y = 0;
// }

// const pt = new Point();
// Prints 0, 0
// console.log(`${pt.x}, ${pt.y}`);
//
// pt.x = "0"; error

class GoodGreeter  {
  name: string;

  constructor() {
    this.name = "hello";
  }
}

const gg = new GoodGreeter ();
console.log(gg);

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
const og = new OKGreeter ();
console.log(og);
//
// class Greeter {
//   readonly name: string = "world";
//
//   constructor(otherName?: string) {
//     if (otherName !== undefined) {
//       this.name = otherName;
//     }
//   }
//
//   err() {
//     //this.name = "not ok";
//   }
// }
// const g = new Greeter();
//g.name = "also not ok";
// console.log(g);

// class Point {
//   x: number;
//   y: number;
//
//   // Normal signature with defaults
//   constructor(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const pt = new Point();
// console.log(pt);

// class Base {
//   k = 4;
// }
//
// class Derived extends Base {
//   constructor() {
//     // Prints a wrong value in ES5; throws exception in ES6
//     super();//'super' must be called before accessing 'this' in the constructor of a derived class.
//     console.log(this.k);
//   }
// }
//
// const derived = new Derived();
// console.log(derived);

class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
const pt = new Point();
pt.scale(5);
console.log(pt);

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// class Ball implements Pingable { //error
//   pong() {
//     console.log("pong!");
//   }
// }

// class Animal {
//   move() {
//     console.log("Moving along!");
//   }
// }
//
// class Dog extends Animal {
//   woof(times: number) {
//     for (let i = 0; i < times; i++) {
//       console.log("woof!");
//     }
//   }
// }

// const d = new Dog();
// // Base class method
// d.move();
// // Derived class method
// d.woof(3);

class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");

class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
// g.getName();//error

// class Base {
//   private x = 0;
// }
// const b = new Base();
// // Can't access from outside the class
// console.log(b.x);

class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
const c = new Box(15);
console.log(b)
console.log(c)
