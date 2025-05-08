require("dotenv").config();
const { sum, multiply } = require("./calculate");

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

sum(a, b);
multiply(a, b);
