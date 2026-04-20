const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
let students = Array(n).fill(0);
let result = -1;

for(let i=0; i<m; i++) {
    students[penalizedPersons[i]-1]++;
    if(students[penalizedPersons[i]-1] === k) {
        result = penalizedPersons[i];
        break;
    }
}

console.log(result);