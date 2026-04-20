const fs = require("fs");
const [n1, n2] = fs.readFileSync(0).toString().trim().split('\n');

let num1 = Number(n1);
let num2 = Number(n2);
let [n2_100, n2_10, n2_1] = n2.split('').map(Number);
console.log(n1*n2_1);//(3)
console.log(n1*n2_10);//(4)
console.log(n1*n2_100);//(5)
console.log(n1*n2);//(6)