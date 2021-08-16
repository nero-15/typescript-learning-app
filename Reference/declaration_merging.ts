interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };

console.log(box)

namespace Animals {
  export class Zebra {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}
