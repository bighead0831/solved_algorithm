const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// Please Write your code here.
const WINBLACK = 1; // win black
const WINWHITE = 2; // win white
const DRAW = 0; // draw each other

function inRange(r,c) {
    return 0<=r && r<19 && 0<=c && c<19;
}

let cnt = 0;
let [resR, resC] = [0, 0];
let winColor = DRAW;

function chkRow(r,c, color) {
    if(inRange(r, c)) {
        if(arr[r][c] != color) {
            if(cnt === 5) {[resR, resC] = [r-3, c]; winColor = color;}
            else {cnt = 0;}
        } else {
            cnt++;
            return chkRow(r+1, c, color);
        }
    } else {
        cnt = 0;
    }
}

function chkColumn(r,c, color) {
    if(inRange(r, c)) {
        if(arr[r][c] != color) {
            if(cnt === 5) {[resR, resC] = [r, c-3]; winColor = color;}
            else {cnt = 0;}
        } else {
            cnt++;
            return chkColumn(r, c+1, color);
        }
    } else {
        cnt = 0;
    }
}

function chkDiagonal_R(r,c, color) {
    if(inRange(r, c)) {
        if(arr[r][c] != color) {
            if(cnt === 5) {[resR, resC] = [r-3, c-3]; winColor = color;}
            else {cnt = 0;}
        } else {
            cnt++;
            return chkDiagonal_R(r+1, c+1, color);
        }
    } else {
        cnt = 0;
    }
}

function chkDiagonal_L(r,c, color) {
    if(inRange(r, c)) {
        if(arr[r][c] != color) {
            if(cnt === 5) {[resR, resC] = [r-3, c+3]; winColor = color;}
            else {cnt = 0;}
        } else {
            cnt++;
            return chkDiagonal_L(r+1, c-1, color);
        }
    } else {
        cnt = 0;
    }
}


for(let i=0; i<19; i++) {
    for(let j=0; j<19; j++) {
        if(arr[i][j] != 0) {
            chkRow(i, j, arr[i][j]);
            chkColumn(i, j, arr[i][j]);
            chkDiagonal_R(i, j, arr[i][j]);
            chkDiagonal_L(i, j, arr[i][j]);
        }
    }
}

console.log(winColor);
console.log(resR+1, resC+1);