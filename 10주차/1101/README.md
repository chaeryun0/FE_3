# 연결리스트

- 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
- js에서는 그다지 메모리 효율이 좋지 못함
- 개념 : https://en.wikipedia.org/wiki/Linked_list
- 알고리즘 시각화 : https://visualgo.net/ko

## 1. object로 linkedlist 구현

```javascript
// 가장 이해하기 쉬운 코드
const list = {
  head: {
    value: 46,
    next: {
      value: 49,
      next: {
        value: 97,
        next: {
          value: 12,
          next: null,
        },
      },
    },
  },
};
// list.head.next.next.value
// list.head.next.next.next.value

let list = {
  head: null,
};

let node1 = { value: 46, next: null };
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;

// let node4 = {value: 12, next: null}
// let node3 = {value: 97, next: node4}
// let node2 = {value: 49, next: node3}
// let node1 = {value: 46, next: node2}
```

- 문제

```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21,
            next: null,
          },
        },
      },
    },
  },
};
list.head.next.next.next.value;
```

## 2. toString을 순회로 구현 ★

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0; // 인스턴스에 있는 프로퍼티
  }

  // length() { // this.length가 덮어 씀
  //   프로토타입에 붙는 메서드 (프로퍼티명과 동일하면 값이 출력되지 않음)
  //   return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에 next를 붙인 것
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    return 출력데이터;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```
