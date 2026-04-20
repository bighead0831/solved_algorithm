const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

const day_of_Month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_Week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function num_of_days(m, d) {
    let elapsed_day = d;
    for(let i=1; i<m; i++) elapsed_day += day_of_Month[i];
    return elapsed_day;
}

function how_many_day_of_week(d1, d2, A) {
    let dow = 0; // day of week
    for(let i=0; i<7; i++) if(A === day_of_Week[i]) dow = i;

    let elapsed_day = d2-d1;
    if(elapsed_day%7 >= dow)
        return parseInt(elapsed_day/7)+1;
    return parseInt(elapsed_day/7);  
}

console.log(how_many_day_of_week(num_of_days(m1,d1), num_of_days(m2,d2), A));