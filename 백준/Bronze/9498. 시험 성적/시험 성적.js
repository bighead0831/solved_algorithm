const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let num = Number(input[0]);

let result = '';
if(num<=100 && num>=90) {
    result = 'A';
} else if(num<=89 && num>=80) {
    result = 'B';
} else if(num<=79 && num>=70) {
    result = 'C';
} else if(num<=69 && num>=60) {
    result = 'D';
} else {
    result = 'F';
}

console.log(result);