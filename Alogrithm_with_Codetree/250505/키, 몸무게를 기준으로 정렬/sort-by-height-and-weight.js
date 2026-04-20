const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

class Member {
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

function cmp(prev, cur) {
    if(prev.height==cur.height)
        return cur.weight-prev.weight;
    return prev.height-cur.height;
}

let result = Array(n);
for(let i=0; i<n; i++) {
    result[i] = new Member(records[i][0], records[i][1], records[i][2]);
}

result.sort(cmp);

for(let i=0; i<n; i++) {
    console.log(result[i].name, result[i].height, result[i].weight);
}