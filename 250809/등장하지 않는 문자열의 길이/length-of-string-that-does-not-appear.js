const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let size_minStr = 0; // 두 번 이상 연속 부분 문자열로 나타나지 않는 문자열의 최소 길이

for(let i=0; i<n; i++) { // (0~n-1)에서 시작하는 부분문자열
    const chkStr = []; // 검사할 부분문자열
    for(let j=0; j<n-i; j++) { // 부분문자열의 길이
        chkStr.push(string[i+j]);
        for(let k=i+j+1; k<=n-chkStr.length; k++) { // 부분문자열 설정 이후 문자열에서 탐색
            if(chkStr[0] === string[k]) { // 부분문자열의 첫 글자 발견하면 검사 진행
                let isOk = true;
                for(let l=0; l<chkStr.length; l++)
                    if(chkStr[l] != string[k+l]) isOk = false;
                if(isOk) size_minStr = Math.max(size_minStr, chkStr.length+1); // 부분문자열과 이후 문자열 중 연속되게 일치하면 결과값 넣기
            }
        }
        
    }
}

console.log(size_minStr);