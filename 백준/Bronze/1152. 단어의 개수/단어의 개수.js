const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const sentence = input[0].split('');

let cnt = 0;
let chk = 0; // 단어 시작 확인
for(let i=0; i<sentence.length; i++) {
    if(sentence[i]!=' ' && chk === 0) {
        chk = 1; // 단어 시작하면 1로 설정
        cnt++;
    } else if(sentence[i]===' ' && chk === 1) {
        chk = 0; // 단어 끝나면 0으로 설정
    }
}
console.log(cnt);