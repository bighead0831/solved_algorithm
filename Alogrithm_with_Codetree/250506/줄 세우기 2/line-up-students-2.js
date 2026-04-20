const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

class Student {
    constructor (height, weight, num) {
        this.height = height;
        this.weight = weight;
        this.num = num;
    }
}

function cmp (prev, cur) {
    if(prev.height===cur.height)
        return cur.weight-prev.weight;
    return prev.height-cur.height;
}

let students = Array(n);
for(let i=0; i<n; i++) students[i] = new Student(studentInputs[i][0], studentInputs[i][1], i+1);

students.sort(cmp);

students.forEach(students => console.log(students.height, students.weight, students.num));