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

class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    //this.name = "not ok";
  }
}
const g = new Greeter();
//g.name = "also not ok";
console.log(g);

class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
const pt = new Point();
console.log(pt);

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    super();//'super' must be called before accessing 'this' in the constructor of a derived class.
    console.log(this.k);
  }
}

const derived = new Derived();
console.log(derived);
