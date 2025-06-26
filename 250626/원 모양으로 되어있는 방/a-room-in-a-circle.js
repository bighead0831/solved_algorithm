const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]); // n개의 방
const arr = input.slice(1, n + 1).map(Number); // 각 방의 수용인원 (순서대로)

// Please Write your code here.
function inRange(num) {return num>=0 && num<arr.length;}

let people = 0;
for(let i=0; i<arr.length; i++) people += arr[i];
const People = people; // 전체 인원

let minDist = 10000000000000000;
for(let i=0; i<arr.length; i++) {
    let dist = 0;
    people = People;
    for(let j=i; j<i+arr.length; j++) {
        if(inRange(j)) {people -= arr[j];} 
        else {people -= arr[j-arr.length];}
        dist += people;
    }
    minDist = Math.min(minDist, dist);
}

console.log(minDist);