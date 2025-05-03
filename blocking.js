var a = 107;
var b = 6789;

console.log("Hello Everyone");

const crypto = require("node:crypto");

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First sync password generation");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (key, error) => {
  console.log("Second async password generation");
});

function multiply(a, b) {
  return a * b;
}

var c = multiply(a, b);

console.log("Product is " + c);
