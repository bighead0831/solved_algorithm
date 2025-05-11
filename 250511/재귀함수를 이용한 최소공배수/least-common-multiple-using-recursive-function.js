const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

// 최대 공약수 ** 유클리드 호제법 활용
function getGCD(a, b) {
    if(b==0) {
        return a;
    }
    return getGCD(b, a%b);
}

// 최소 공배수 formula: L = A*B/G
function getLCM(a, b) {
    return (a*b)/getGCD(a, b);
}

/* function getAllGCD(cnt) {
    if(cnt==n-1) {
        return numbers[cnt];
    }
    return getGCD(numbers[cnt], getAllGCD(cnt+1));
}*/

function getAllLCM(n) {
    let cnt = n-1;
    let result = numbers[cnt];
    
    while(true) {
        if(cnt == 0) {
            break;
        }
        result = getLCM(result, numbers[cnt-1]);
        cnt--;
    }
    return result;
}

console.log(getAllLCM(n));