const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.
// The distance of moving A per Sec
let mA = [];
for(let i=0; i<n; i++) {
    let [t, d] = movesA[i].split(' ');
    for(let j=0; j<Number(t); j++) {
        if(d === 'L') {
            mA.push(-1);
        } else if(d === 'R') {
            mA.push(1);
        }
    }
}
// The distance of moving A per Sec
let mB = [];
for(let i=0; i<m; i++) {
    let [t, d] = movesB[i].split(' ');
    for(let j=0; j<Number(t); j++) {
        if(d === 'L') {
            mB.push(-1);
        } else if(d === 'R') {
            mB.push(1);
        }
    }
}

// The time is Same (longer time is the time)
let length = mA.length;
if(mA.length < mB.length)  length = mB.length;

// The position of A per Sec
let pA = Array(length).fill(0);
pA[0] = mA[0];
for(let i=1; i<length; i++) {
    if(i >= mA.length) {pA[i] = pA[i-1];}
    else {pA[i] = pA[i-1]+mA[i];}
}

// The position of B per Sec
let pB = Array(length).fill(0);
pB[0] = mB[0];
for(let i=1; i<length; i++) {
    if(i >= mB.length) {pB[i] = pB[i-1];}
    else {pB[i] = pB[i-1]+mB[i];}
}

// counting of meeting Robots each other.
let cnt = 0;
for(let i=1; i<length; i++) {
    if((pA[i-1] != pB[i-1]) && (pA[i] === pB[i])) cnt++;
}

console.log(cnt);