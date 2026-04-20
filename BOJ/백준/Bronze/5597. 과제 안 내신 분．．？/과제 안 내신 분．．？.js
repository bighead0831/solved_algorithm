const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const students = input.slice().map(Number);
students.sort((a,b)=>a-b);
for(let i=1; i<=30; i++) {
    let non = 0;
    for(let j=0; j<28; j++) {
        if(i===students[j]) {non=0; break;}
        else non = i;
    }
    if(non!=0) console.log(i);
}