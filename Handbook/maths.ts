// // @filename: maths.ts
// export var pi = 3.14;
// export let squareTwo = 1.41;
// export const phi = 1.61;
//
// export class RandomNumberGenerator {}
//
// export function absolute(num: number) {
//   if (num < 0) return num * -1;
//   return num;
// }

function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};
