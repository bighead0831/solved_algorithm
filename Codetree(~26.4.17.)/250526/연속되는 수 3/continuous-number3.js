const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
function checkMaxLength (arr) {
    let result = 1; // return할 결과값 result
    let length = 1; // 각 연속된 수열을 임시 저장할 변수 length

    for(let i=0; i<n; i++) {
        if((arr[i]>0 && arr[i-1]>0) || (arr[i]<0 && arr[i-1]<0)) { // 연속되는 정수의 부호가 같을 경우에만 length 길이 증가
            length++;
            if(result < length) result = length;
        } else { // 연속되는 정수의 부호가 다를 경우 length 길이 초기화
            length = 1;
        }
    }
    return result;
}

console.log(checkMaxLength(arr));