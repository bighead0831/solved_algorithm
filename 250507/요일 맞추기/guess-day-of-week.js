const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const day_of_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getDayofWeek(m1, d1, m2, d2) {
    let prevDay = d1;
    for(let i=1; i<m1; i++) {
        prevDay += day_of_month[i];
    }
    
    let curDay = d2;
    for(let i=1; i<m2; i++) {
        curDay += day_of_month[i];
    }

    let elapsedDay = curDay-prevDay;
    if(elapsedDay<0) {
        elapsedDay = 7+elapsedDay;
    }
    return day_of_week[elapsedDay%7];
}

console.log(getDayofWeek(m1, d1, m2, d2));