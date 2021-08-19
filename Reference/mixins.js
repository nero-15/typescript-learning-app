// class Sprite {
//   name = "";
//   x = 0;
//   y = 0;
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.
// type Constructor = new (...args: any[]) => {};
// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:
// function Scale<TBase extends Constructor>(Base: TBase) {
//   return class Scaling extends Base {
//     // Mixins may not declare private/protected properties
//     // however, you can use ES2020 private fields
//     _scale = 1;
//
//     setScale(scale: number) {
//       this._scale = scale;
//     }
//
//     get scale(): number {
//       return this._scale;
//     }
//   };
// }
// Compose a new class from the Sprite class,
// with the Mixin Scale applier:
// const EightBitSprite = Scale(Sprite);
//
// const flappySprite = new EightBitSprite("Bird");
// flappySprite.setScale(0.8);
// console.log(flappySprite.scale);
// This was our previous constructor:
// type Constructor = new (...args: any[]) => {};
// // Now we use a generic version which can apply a constraint on
// // the class which this mixin is applied to
// type GConstructor<T = {}> = new (...args: any[]) => T;
//
// type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
// type Spritable = GConstructor<Sprite>;
// type Loggable = GConstructor<{ print: () => void }>;
//
// function Jumpable<TBase extends Positionable>(Base: TBase) {
//   return class Jumpable extends Base {
//     jump() {
//       // This mixin will only work if it is passed a base
//       // class which has setPos defined because of the
//       // Positionable constraint.
//       this.setPos(0, 20);
//     }
//   };
// }
// Each mixin is a traditional ES class
var Jumpable = /** @class */ (function () {
    function Jumpable() {
    }
    Jumpable.prototype.jump = function () { };
    return Jumpable;
}());
var Duckable = /** @class */ (function () {
    function Duckable() {
    }
    Duckable.prototype.duck = function () { };
    return Duckable;
}());
// Including the base
var Sprite = /** @class */ (function () {
    function Sprite() {
        this.x = 0;
        this.y = 0;
    }
    return Sprite;
}());
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);
var player = new Sprite();
player.jump();
console.log(player.x, player.y);
// This can live anywhere in your codebase:
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
