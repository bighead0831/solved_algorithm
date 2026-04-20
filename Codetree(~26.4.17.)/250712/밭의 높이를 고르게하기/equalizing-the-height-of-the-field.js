const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, H, T] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let minEnergy = 200*N;
for(let i=0; i<=N-T; i++) {
    let energy = 0;
    for(let j=i; j<i+T; j++) {
        let height = arr[j];
        while(height != H) {
            if(height < H) {height++; energy++;}
            else if(height > H) {height--; energy++;}
        }
    }
    minEnergy = Math.min(minEnergy, energy);
}

console.log(minEnergy);