const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let size_minStr = 0; // 두 번 이상 연속 부분 문자열로 나타나지 않는 문자열의 최소 길이

for(let i=0; i<n; i++) {
    let tmpStr = []; // 검사할 부분문자열
    for(let j=0; j<n-i; j++) {
        tmpStr.push(string[i+j]); // 검사할 부분문자열(i~n-1)
        let tmp = 0; // 부분문자열 첫 index
        let chkStr = i+j+1; // 검사할 문자열 첫 index
        let cnt = 0; // 중복되는 부분문자열의 길이를 저장할 cnt
        while(1) {
            if(chkStr > string.length) break; // 검사할 문자열의 index가 문자열의 길이를 넘어버릴 경우 종료

            if(tmpStr[tmp] != string[chkStr]) {
                if(tmp!=0) break; // 부분문자열의 연속이 깨졌으므로 종료
                else chkStr++;
            }
            else {
                tmp++; 
                chkStr++;
                if(tmp==tmpStr.length) {
                    cnt = tmp;
                    break;
                }
            }
        }
        if(cnt != 0) size_minStr = Math.max(size_minStr, cnt+1);
    }
}

console.log(size_minStr);