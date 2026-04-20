const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input.shift(0).split(' ').map(Number);

const arr1 = new Array(n).fill(0).map( ()=>[] );
for(let i=0; i<n; i++) {
    let a = input.shift(0).split(' ').map(Number);
    for(let j=0; j<m; j++){
        arr1[i].push(a[j]);
    }
}

const arr2 = new Array(n).fill(0).map( ()=>[] );
for(let i=0; i<n; i++) {
    let a = input.shift(0).split(' ').map(Number);
    for(let j=0; j<m; j++){
        arr2[i].push(a[j]);
    }
}

const sum = new Array(n).fill(0).map( ()=>Array(m).fill(0) );
for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        sum[i][j] = arr1[i][j]+arr2[i][j];
        process.stdout.write(sum[i][j]+' ');
    }
    process.stdout.write('\n');
}