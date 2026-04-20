const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

function isPalindrome(n) {
    let num = Array.from(String(n), Number);
    let revNum = [];
    for(let i=1; i<=num.length; i++)
        revNum.push(num[num.length-i]);

    if(n===Number(revNum.join(''))) return true;
    else return false;
}

let cnt = 0;
for(let i=x; i<=y; i++)
    if(isPalindrome(i)) cnt++;

console.log(cnt);