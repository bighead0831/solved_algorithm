const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function insertion_sort(arr) {
    for(let i=1; i<n; i++) {
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertion_sort(arr).join(' '));