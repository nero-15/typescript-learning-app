var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var pt = new Point();
// Prints 0, 0
console.log(pt.x + ", " + pt.y);
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
