const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
let finalNum = 0;
for (let i = 1; i <= n; i++) { // Time Complexity = O(n)
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
  finalNum = Math.max(finalNum, Number(x));
}

// arr에 푯말 든 사람 세우기
let arr = Array(finalNum).fill(0);
for(let i=0; i<n; i++) { // Time Complexity = O(n)
    if(people[i][1] === 'G') arr[people[i][0]-1] = 1; // 푯말 G를 들면 1 입력
    else if(people[i][1] === 'H') arr[people[i][0]-1] = 2; // 푯말 H를 들면 2 입력
}

let result = 0;
if(finalNum-1<=k) {
    for(let i=0; i<finalNum; i++) 
        result += arr[i];
} else {
    for(let i=0; i<finalNum-k; i++) { // Time Complexity = O(n)
        let sum = 0
        for(let j=i; j<i+(k+1); j++) 
            sum += arr[j];
        result = Math.max(result, sum);
    }
}

console.log(result);