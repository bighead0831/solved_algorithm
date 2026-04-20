const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

class Block {
    constructor (start, end) {
        this.start = start;
        this.end = end;
    }
}

let block = Array(k);
for(let i=0; i<k; i++) {
    block[i] = new Block(segments[i][0], segments[i][1]);
}

function build_Block() {
    let space = Array(n).fill(0);

    for(let i=0; i<k; i++) {
        for(let j=block[i].start; j<=block[i].end; j++) {
            space[j] += 1;
        }
    }

    let max = 0;
    for(let i=0; i<n; i++) {
        if(max < space[i]) max = space[i];
    }
    return max;
}

console.log(build_Block());