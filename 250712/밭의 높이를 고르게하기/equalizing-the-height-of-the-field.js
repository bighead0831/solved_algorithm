const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let minEnergy = 200*n;
for(let i=0; i<n-t; i++) {
    let energy = 0;
    for(let j=i; j<i+t; j++) {
        let height = arr[j];
        while(height != h) {
            if(height < h) {
                height++;
                energy++;
            } else if(height > h) {
                height--;
                energy++;
            } else {
                break;
            }
        }
    }
    minEnergy = Math.min(minEnergy, energy);
}

console.log(minEnergy);