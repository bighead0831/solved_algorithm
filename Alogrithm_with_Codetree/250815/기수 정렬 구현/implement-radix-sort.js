const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const num = new Array(n).fill(0).map(()=>Array(6).fill(0)); // 최대 6자리로 구성된 n개의 수

for(let i=0; i<n; i++) { // num배열에 각 숫자 입력 (index로 자릿수 구분)
    const tmp = arr[i].toString().split('').map(Number);
    for(let j=0; j<tmp.length; j++)
        num[i][6-tmp.length+j] = tmp[j];
}

for(let i=0; i<6; i++) { // n개의 수에 대하여 6개의 각 자리에 대하여 순서대로 정렬(100000자리에서 1의자리 순으로)
    let sort_complete = true; // i자리의 수에 대하여 순서대로 정렬되면 break
    while(sort_complete) {
        sort_complete = false;
        for(let j=0; j<n-1; j++) {
            if(num[j][i] > num[j+1][i]) { // 순서 뒤바뀌어 있는지 확인
                let is_okay = true;
                for(let k=0; k<i; k++) // 자리 바꾸기 전에 현 index보다 작은 index에서 크기 체크
                    if(num[j][k] < num[j+1][k]) is_okay = false;
                
                if(is_okay) { // 조건 충족되면 자리바꾸기
                    const tmp = num[j];
                    num[j] = num[j+1];
                    num[j+1] = tmp;
                    sort_complete = true;
                }
            } else {
                continue;
            }
        }          
    }
}

for(let i=0; i<n; i++)
    process.stdout.write(Number(num[i].join(''))+' ');