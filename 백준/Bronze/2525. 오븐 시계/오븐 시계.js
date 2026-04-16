const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

if(b+(c%60)>=60) {
    if(a+parseInt(c/60)+1>=24) {
        console.log(a+parseInt(c/60)-24+1, b+(c%60)-60);
    } else {
        console.log(a+parseInt(c/60)+1, b+(c%60)-60);
    }
} else {
    if(a+parseInt(c/60)>=24) {
        console.log(a+parseInt(c/60)-24, b+(c%60));
    } else {
        console.log(a+parseInt(c/60), b+(c%60));
    }
}