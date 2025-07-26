const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

function isInterest(n) {
    const num = Array.from(String(n), Number);
    let n1 = num[0];
    let n2 = -1;

    let cnt1 = 1;
    let cnt2 = 0;

    for(let i=1; i<num.length; i++) {
        if(num[i] === n1) {
            cnt1++;
            continue;
        }
        else {
            if(n2 === -1) {
                n2 = num[i];
                cnt2++;
            } else if (n2 === num[i]) {
                cnt2++;
            }
            else return false;
        }
    }
    if(cnt1>1 && cnt2>1) return false;
    else if(cnt1==0 || cnt2==0) return false;
    
    return true;
}

let interestNum = 0;
for(let i=x; i<=y; i++) 
    if(isInterest(i))
        interestNum++;
console.log(interestNum);