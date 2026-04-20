const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,k] = input[0].split(' ').map(Number);

// 이항계수 공식 =  n!/((n-k)!k!)
function factorial(n) {
    let result = 1;
    for(let i=1; i<=n; i++) result *= i;
    return result;
}

console.log(factorial(n)/(factorial(n-k)*factorial(k)));