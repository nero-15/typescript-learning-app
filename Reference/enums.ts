// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
//}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction);

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
console.log(BooleanLikeHeterogeneousEnum);

enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
}
console.log(E1);
console.log(E2);
