"use strict";
exports.__esModule = true;
var hello_js_1 = require("./hello.js");
hello_js_1["default"]();
// import { pi, phi, absolute } from "./maths.js";
//
// console.log(pi);
// const absPhi = absolute(phi);
// import { pi as π } from "./maths.js";
//
// console.log(π);
var math = require("./maths.js");
console.log(math.pi);
var positivePhi = math.absolute(math.phi);
