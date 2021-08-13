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
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    Greeter.prototype.err = function () {
        //this.name = "not ok";
    };
    return Greeter;
}());
var g = new Greeter();
//g.name = "also not ok";
console.log(g);
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
var Base = /** @class */ (function () {
    function Base() {
        this.k = 4;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = 
        // Prints a wrong value in ES5; throws exception in ES6
        _super.call(this) || this;
        console.log(_this.k);
        return _this;
    }
    return Derived;
}(Base));
var derived = new Derived();
console.log(derived);
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving along!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("woof!");
        }
    };
    return Dog;
}(Animal));
var d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
