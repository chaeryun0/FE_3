# 📚 nullish 병합 연산자 '??'

> ??를 사용하면 피연산자 중 ‘값이 할당된’ , ‘값이 확정되어있는’ 변수를 찾을 수 있다.

```
// height가 null이나 undefined인 경우, 100을 할당
height = height ?? 100;

a ?? b의 평가 결과 // a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b
```
```
|| : 첫 번째 truthy 값을 반환
?? : 첫 번째 정의된(defined) 값을 반환

|| : 0, null, undefined
?? : null, undefined
```

# 📚 for문, for in문, for of문

```
// for of문 : 키 값만 출력하는 반복문, 배열에서 사용 가능, value값 출력은 `템플릿 리터럴 활용`

const pocketmons = {
	피카츄 : 1,
	라이츄 : 2,
};
console.table(pocketmons);

// key 값 출력 
for ( let pocketmon in pocketmons) {
	console.log(pocketmon);
}

// value 값 출력
for ( let pocketmon in pocketmons) {
	console.log(`${pocketmons[pocketmon]}`);
}
👉🏻 이를 해결하기 위해 Object 메소드가 나옴
```
```
const seat = [['피카츄' , '라이츄', '파이리' ],
              ['피죤투' , '또가스', '메타몽' ]];

// for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

// for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}
```
```
Object.keys()    // key 값만 배열 형태로 반환
Object.values()  // value 값만 배열 형태로 반환
Object.entries() // key, value 형태의 배열들을 반환

👉🏻 for of 반복문은 배열에서 사용 가능하기 때문에 위 메소드들을 활용하여 for of 문을 활용활 수 있음 
```

# 📚 while문, do while문
```
while(조건문) {
	실행문;
}

do {
		실행문;
} while(조건문);

// do...while 문법은 while문과 비슷하지만 조건문 이전에 실행문이 있기 때문에 실행문의 코드가 반드시 한 번은 실행되는 것이 차이점
// continue문은 break문과 유사하게 동작하지만, 반복문을 완전히 빠져나가는 break와 다르게 continue문은 반복문의 다음 반복으로 이동함
```

