// class Point {
//   x = 0;
//   y = 0;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const pt = new Point();
// Prints 0, 0
// console.log(`${pt.x}, ${pt.y}`);
//
// pt.x = "0"; error
var GoodGreeter = /** @class */ (function () {
    function GoodGreeter() {
        this.name = "hello";
    }
    return GoodGreeter;
}());
var gg = new GoodGreeter();
console.log(gg);
var OKGreeter = /** @class */ (function () {
    function OKGreeter() {
    }
    return OKGreeter;
}());
var og = new OKGreeter();
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
var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
        this.y = 10;
    }
    Point.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return Point;
}());
var pt = new Point();
pt.scale(5);
console.log(pt);
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
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
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello, world!");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, " + name.toUpperCase());
        }
    };
    return Derived;
}(Base));
var d = new Derived();
d.greet();
d.greet("reader");
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.getName());
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var g = new SpecialGreeter();
g.greet(); // OK
// g.getName();//error
// class Base {
//   private x = 0;
// }
// const b = new Base();
// // Can't access from outside the class
// console.log(b.x);
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.printX = function () {
        console.log(MyClass.x);
    };
    MyClass.x = 0;
    return MyClass;
}());
console.log(MyClass.x);
MyClass.printX();
