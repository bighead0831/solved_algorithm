const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift());
const a = input.shift().split(' ').map(Number);
const m = Number(input.shift());
const num = input.shift().split(' ').map(Number);

let set = new Set(); // 시간복잡도를 줄이기 위해 set 클래스 이용!
for(let i=0; i<n; i++) set.add(a[i]);

for(let i=0; i<m; i++) {
    let result = 0;
    if(set.has(num[i])) { // set.has()함수를 이용하여 검색! -> 시간복잡도 : O(1)
        result = 1;
    }
    console.log(result);
}

// Time Complexity : O(N) or O(M)  *여하튼 1초(1억번 loop) 안 넘음