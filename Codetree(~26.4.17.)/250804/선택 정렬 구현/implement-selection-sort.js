const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function selection_sort(arr) {
    let len = arr.length;
    for(let i=0; i<len-1; i++) {
        let min = i
        for(let j=i+1; j<len; j++)
            if (arr[j] < arr[min])
                min = j;
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
    }
    return arr;
}

console.log(selection_sort(arr).join(' '));