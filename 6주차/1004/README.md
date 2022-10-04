# 📚 Day23
    
 <details>
<summary> 원시타입 vs 참조형(객체)</summary>
<div markdown="1">

    원시타입
    - number
    - string
    - boolean
    - null
    - undefined
    - Symbol
    - Bigint
    
    - 원시 타입 : 하나의 값만 가지며 불변 데이터이므로 연산을 해도 기존 값 변경 X
      const result = 'hello' + 'world' // 'helloworld'
    - 원시 타입을 제외한 나머지는 모두 객체 : 함수, 배열, 정규식 등

</div>
</details>   

 <details>
<summary> 형 변환</summary>
<div markdown="1">

```
String()  // 문자형 변환
Number()  // 숫자형 변환 
Boolean() // 불린형 변환

Number('문자')     // NaN
Number(null)      // 0
Number(undefined) // NaN

Number(0)   // false
Number('0') // true

Number('')  // false
Number(' ') // true
```
  
</div>
</details>
   
 <details>
<summary>증가 연산자, 감소 연산자</summary>
<div markdown="1">

    let n = 10;
    let result = n++; // 10, 11, 12, 
    
    n++ : 증가시키기 이전 값부터 result에 넣음
    ++n : 증가시킨 값을 result에 넣음

</div>
</details>

<details>
<summary>비교 연산자: true, false로 반환</summary>
<div markdown="1">

    ==  // 동등 연산자(값만 비교, 값의 동등을 판단)
    === // 엄격한 동등 연산자(값과 타입까지 비교, 값의 일치를 판단)
    
    1 == true  // true
    1 === true // false


</div>
</details>
    
<details>
<summary>논리 연산자 : &&, ||, !</summary>
<div markdown="1">

    and 연산자(&&) // 모두 참이면 참(하나라도 false면 false 반환) 
    or 연산자(||) // 하나라도 참이면 참(모든 값이 false일 때만 false)
    not 연산자(!) // 불리언 값을 반대로(t->f, f->t)
  
    단락평가
    and 연산자(&&) : 앞의 평가결과가 거짓이면 뒤의 평가 결과와 상관없이 -> false 반환
    or 연산자(||) : 앞의 평가결과가 참이면 뒤의 평가 결과와 상관없이 -> true 반환 
    and가 > or보다 우선순위가 더 높음

</div>
</details>

 <details>
<summary>객체</summary>
<div markdown="1">
  
```
const x = {
age: 30
}

// 접근
x.age
x['age']

// 추가
x.name = '이름';
x['name'] = '이름';

// 삭제
delete x.age; 
```
  
</div>
</details>   

 <details>
<summary>배열</summary>
<div markdown="1">

> 대괄호를 이용해 여러 개의 값을 리스트 형태로 나열한 자료구조로, ‘인덱스로 참조되는 요소’라는 값의 집합을 의미 <br>
> JavaScript의 배열은 배열 타입으로 존재하지 않고 객체 타입으로 존재 <br>
> 값의 참조가 인덱스로 이루어진다.

```
unshift() : 맨 앞 요소 추가
shift() : 맨 앞 요소 삭제
push() : 맨 뒤 요소 추가
pop() : 맨 뒤 요소 삭제

splice(요소를 위치시키고자 하는 인덱스, 제거할 요소의 개수, 배열에 추가할 요소)

slice(잘라낼 배열의 시작점 인덱스, 잘라낼 배별 종료지점 인덱스-생략가능)

reverse() : 배열 내 요소의 순서를 거꾸로 뒤집고 마지막 위치에 있는 인덱스의 요소가 0번째 위치에 오게 된다. 

indexOf(탐색하고자 하는 요소, 탐색을 시작하고자 하는 인덱스-생략가능)

isArray() : 인자가 배열인지 확인하고 싶을 때

join() : 배열 내 요소들을 연결해 하나의 값으로 만들 때 (값의 자료형은 문자열)

fill() : 배열 내 원하는 요소를 같은 값으로 채움
```

</div>
</details>  

<details>
<summary>var, let, const 차이점</summary>
<div markdown="1">
  
  
|  |  중복선언 |  재할당 |   스코프 (Scope) |   호이스팅 (Hoisting) | 전역객체 프로퍼티 |
| --- | --- | --- | --- | --- | --- |
| var | 가능 | 가능 | 함수레벨 스코프 | 호이스팅 시 undefined로 변수 초기화(호이스팅 수행) | 할당 |
| let | 불가 | 가능 | 블록레벨 스코프| 선언 단계-TDZ-초기화 단계-할당 단계로 분리되어 진행(호이스팅 수행) | undefined |
| const | 불가 | 불가 | 블록레벨 스코프 | 초기화 이전 접근 시 ReferenceError발생 (호이스팅 수행) | undefined |
    
```
변하지 않는 값은 const
변할 수 있는 값은 let 으로 선언

- 함수를 제외한 영역에서 var로 선언한 변수는 전역변수로 간주
- var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화
- const는 선언과 할당을 동시에
- 블록 레벨 스코프(block-level scope)는 블록 내에서 변수가 선언되었기 때문에 지역변수의 개념
- block 내에서만 유효하며, 외부에서 접근(=참조)할 수 없는 상태가 된다.
 ```
</div>
</details>  

<details>
<summary>typeof 연산자</summary>
<div markdown="1">

  ```
  typeof null // object

  typeof undefined // undefined
  typeof 1n // bigint
  ```

</div>
</details>

<details>
<summary>truthy 값과 falsy 값</summary>
<div markdown="1">

- 자바스크립트의 모든 값은 truthy 값과 falsy 값 2가지로 나뉨
- 아래 falsy 값 외에는 모두 truthy
  ```
    - false
    - null       // 존재하지 않는 값, 값이 없음
    - undefined // 값이 할당되어 있지 X, 매개변수 값X(정의되지X)
    - NaN
    - ''빈 문자열
    - 0
    - 0n
  ```

</div>
</details>
    
    
<details>
<summary>숫자 형변환</summary>
<div markdown="1">

    Number('문자') // NaN
    Number(null) // 0
    Number(undefined) // NaN
    
    Number(0)   // false
    Number('0') // true
    
    Number('')  // false
    Number(' ') // true

</div>
</details>    

 <details>
<summary>깊은 복사 & 얕은 복사</summary>
<div markdown="1">

    얕은 복사 : 객체의 참조값(메모리 주소 값)을 복사
    깊은 복사 : 객체의 실제 값을 복사, 원본 보존


</div>
</details>   

    
