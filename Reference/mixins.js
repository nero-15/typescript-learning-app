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
var Sprite = /** @class */ (function () {
    function Sprite(name) {
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.name = name;
    }
    return Sprite;
}());
// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:
function Scale(Base) {
    return /** @class */ (function (_super) {
        __extends(Scaling, _super);
        function Scaling() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Mixins may not declare private/protected properties
            // however, you can use ES2020 private fields
            _this._scale = 1;
            return _this;
        }
        Scaling.prototype.setScale = function (scale) {
            this._scale = scale;
        };
        Object.defineProperty(Scaling.prototype, "scale", {
            get: function () {
                return this._scale;
            },
            enumerable: false,
            configurable: true
        });
        return Scaling;
    }(Base));
}
// Compose a new class from the Sprite class,
// with the Mixin Scale applier:
var EightBitSprite = Scale(Sprite);
var flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
