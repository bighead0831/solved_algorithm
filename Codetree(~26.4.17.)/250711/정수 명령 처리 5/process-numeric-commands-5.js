const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

let arr = [];

function push_back_A(a) { arr.push(a); }

function pop_back() { arr.pop(); }

function get_size() { return arr.length; }

function get_K(k) { return arr[k-1]; }

for(let i=0; i<n; i++) {
    let per_command = commands[i].split(' ');
    if(per_command[0] === 'push_back') {
        push_back_A(Number(per_command[1]));
    } else if(per_command[0] === 'get') {
        console.log(get_K(Number(per_command[1])));
    } else if(per_command[0] === 'size') {
        console.log(get_size(Number(per_command[1])));
    } else if(per_command[0] === 'pop_back') {
        pop_back();
    }
}