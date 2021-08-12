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
var Point = /** @class */ (function () {
    // Normal signature with defaults
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var pt = new Point();
console.log(pt);
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
