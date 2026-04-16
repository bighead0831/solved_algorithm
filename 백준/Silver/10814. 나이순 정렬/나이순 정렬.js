const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift());
const user = input.slice(0);

class User { // User객체 (나이, 이름)
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}

let userInfo = new Array(n).fill(new User()); // 객체 배열 선언
for(let i=0; i<n; i++) { // 객체에 값 입력
    let [age, name] = user[i].split(' ');
    userInfo[i] = new User(Number(age), name);
}

userInfo.sort((a,b)=>(a.age-b.age)); // 나이 오름차순 정렬

for(let i=0; i<n; i++) {
    console.log(userInfo[i].age, userInfo[i].name); // 결과 출력
}