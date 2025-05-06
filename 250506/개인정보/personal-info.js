const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

class Info {
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

function cmpHeight(prev, cur) {
  return cur.height-prev.height;
}

let n = 5;
let member = Array(n);
for(let i=0; i<n; i++) {
  member[i] = new Info(students[i].name, students[i].height, students[i].weight);
}

let arrName = Array(n);
for(let i=0; i<n; i++) {
  arrName[i] = member[i].name;
}

// 이름순 정렬
arrName.sort();
console.log("name");
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(arrName[i] == member[j].name) {
            console.log(member[j].name, member[j].height, member[j].weight);
        }
    }
}

// 키순 정렬
member.sort(cmpHeight);
console.log("\nheight");
for(let i=0; i<n; i++) {
  console.log(member[i].name, member[i].height, member[i].weight);
}

