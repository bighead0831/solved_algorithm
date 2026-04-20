const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);
/*
function setTeam(array) {
    let tmpArr = [];
    for(let i=0; i<array.length-1; i++) {
        for(let j=i+1; j<array.length; j++) {
            let sum = arr[i]+arr[j];
            for(let k=0; k<array.length; k++) if(k!=i || k!=j) tmpArr.push(array[k]);
            setTeam(tmpArr);
        }
    }
}*/

let totalSum = 0;
for(let i=0; i<arr.length; i++) { // 전체 능력치 총합 (나중에 3번 팀 값 쉽게 구하기 위함) for Time Complexity
    totalSum += arr[i];
}


let result = 6000000;
for(let i1=0; i1<arr.length-1; i1++) {
    for(let j1=i1+1; j1<arr.length; j1++) {
        let sum1 = arr[i1]+arr[j1]; // 1번팀 : i1, j1번 팀원의 능력치 합계
        for(let i2=0; i2<arr.length-1; i2++) {
            if(i2 === i1 || i2 === j1) continue; // 2번팀 충족조건 : 1번팀원 미포함
            else {
                for(let j2=i2+1; j2<arr.length; j2++) {
                    if(j2 === i1 || j2 === j1) continue; // 2번팀 충족조건 : 1번팀원 미포함
                    else {
                        let sum2 = arr[i2]+arr[j2]; // 2번팀 : i2, j2번 팀원의 능력치 합계
                        let sum3 = totalSum-sum1-sum2; // 3번팀 : 능력치 총합에서 1번, 2번팀 능력 뺀 값

                        let maxSum = Math.max(sum1, sum2, sum3); // 1~3번 팀 중 가장 능력 높은 팀
                        let minSum = Math.min(sum1, sum2, sum3); // 1~3번 팀 중 가장 능력 낮은 팀
                        result = Math.min(result, maxSum-minSum); // 능력높은 팀과 능력낮은 팀의 차가 적을수록 균형있게 구성된 것
                    }

                }
            }
        }
        
    }
}

console.log(result);


// Time Complexity : O(900)
// Space Complexity : O(1)