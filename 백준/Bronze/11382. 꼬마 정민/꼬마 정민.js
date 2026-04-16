const fs = require("fs");
const [n1, n2, n3] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(n1+n2+n3);