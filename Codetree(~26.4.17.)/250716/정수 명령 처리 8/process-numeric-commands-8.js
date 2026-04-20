const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0; // 노드 갯수
    }

    push_front(newData) {
        const newNode = new Node(newData); // 새 노드 1개 생성
        newNode.next = this.head; // 새 노드의 next 값을 head로
        if(this.head != null) { // 기존 노드가 비어있지 않다면
            this.head.prev = newNode; // head의 prev를 새 노드로
            this.head = newNode; // head는 새 노드로
        } else { // 기존 노드가 비어있다면
            this.head = newNode; // head는 새 노드로
            this.tail = newNode; // tail도 새 노드로
        }
        newNode.prev = null; // 새 노드가 head이므로 prev는 null
        this.nodeNum++; // 노드의 갯수 증가
    }

    push_back(newData) {
        const newNode = new Node(newData);
        newNode.prev = this.tail;
        if(this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = null;
        this.nodeNum++;
    }

    pop_front() {
        if(this.head.next === null) {
            const temp = this.head;
            this.head = null;
            this.tail = null;
            console.log(temp.data);
        } else {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
            console.log(temp.data);
        }

        this.nodeNum--;
    }

    pop_back() {
        if(this.tail.prev === null) {
            const temp = this.tail;
            this.tail = null;
            this.head = null;
            console.log(temp.data);
        } else {
            const temp = this.tail;
            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;
            console.log(temp.data);
        }

        this.nodeNum--;
    }

    size() {
        console.log(this.nodeNum);
    }

    empty() {
        if(this.nodeNum != 0) {
            console.log(0);
        } else {
            console.log(1);
        }
    }

    front() {
        console.log(this.head.data);
    }

    back() {
        console.log(this.tail.data);
    }
}

const ddl = new DoublyLinkedList();
for(let i=0; i<n; i++) {
    let com = commands[i].split(' ');
    if(com[0] === 'push_front') {
        ddl.push_front(Number(com[1]));
    } else if(com[0] === 'push_back') {
        ddl.push_back(Number(com[1]));
    } else if(com[0] === 'pop_front') {
        ddl.pop_front();
    } else if(com[0] === 'pop_back') {
        ddl.pop_back();
    } else if(com[0] === 'size') {
        ddl.size();
    } else if(com[0] === 'empty') {
        ddl.empty();
    } else if(com[0] === 'front') {
        ddl.front();
    } else if(com[0] === 'back') {
        ddl.back();
    }
}