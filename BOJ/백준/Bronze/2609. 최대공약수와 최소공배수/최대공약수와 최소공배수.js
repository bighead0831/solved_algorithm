const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n1, n2] = input[0].split(' ').map(Number);

function gcd(a,b) {
    let g = 0;
    for(let i=1; i<=Math.min(a,b); i++)
        if(a%i===0 && b%i===0) g=i;
    return g;
}

function lcm(a,b,g) {
    return a*b/g;
}

console.log(gcd(n1,n2));
console.log(lcm(n1,n2,gcd(n1,n2)));