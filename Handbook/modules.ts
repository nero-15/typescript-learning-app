import hello from "./hello.js";
hello();

// import { pi, phi, absolute } from "./maths.js";
//
// console.log(pi);
// const absPhi = absolute(phi);

// import { pi as π } from "./maths.js";
//
// console.log(π);

import * as math from "./maths.js";

console.log(math.pi);
const positivePhi = math.absolute(math.phi);
