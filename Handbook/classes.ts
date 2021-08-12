class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

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
