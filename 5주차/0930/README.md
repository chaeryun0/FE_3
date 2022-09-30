# 📚 JavaScript

> 웹브라우저가 해석해서 실행할 수 있는 유일한 프로그래밍 언어 <br>
> 웹페이지를 동적으로 만들기 위해 만들어진 프로그래밍 언어 <br>
> HTML을 프로그래밍으로 제어 <br>
> 자바스크립트는 사용자의 이벤트를 받고 내장 객체들을 이용한 CSS나 태그의 스타일 관련 속성, 날짜, 텍스트 등을 조작 <br>


### 👀 JavaScript 생태계

```
ES6
ECMA(에크마) Script - 표준
JavaScript - 실행할 수 있는 환경 
- 브라우저 - 익스플로러, 파이어폭스, 크롬(v8)...- node(v8 + @)

Angular, React, Vue, jQuery
```
### ✓ 브라우저 기능들
```
window.alert() : 브라우저에 메세지 다이얼로그를 띄움
window.prompt() : 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄움
window.confirm() : true 혹은 false 값을 반환하는 다이얼로그를 띄움

console.log() : 콘솔창에 로그 메세지를 보여줌
console.error() : 콘솔창에 에러 메세지를 보여줌
console.table() : 콘솔창에 데이터를 테이블 형태로 제공
```

### 📍 변수

> **변할 수 있는 수, 변할 수 있는 정보**<br>
> 물건을 잠시 보관하는 상자 같은 역할로 데이터를 담는 공간<br>
- 변수 선언 : 어떤 변수를 사용할지 정하는 것 (var, let, const)<br>
- 변수 정의 : 선언된 변수에 값을 넣는것

#### ✓ 변수명을 정할 때
```
- 변수이름은 $, _ 를 제외한 공백, 특수문자, 구두점 등을 사용할 수 없음
- 첫 글자는 숫자가 될 수 없음
- 대소문자 구별
- 예약어가 쓰일 수 없음
- 유니코드 문자도 사용할 수 있음
- var, let, const의 키워드를 사용할 수 있음
```

### 📍 변수의 자료형
    
```
parseInt 
- 숫자와 문자가 포함된 문자열 "2022년도" 에서 숫자부분만 뽑아냄 (소수점 포함 x)
- 문자형 데이터인데, 숫자로 이루어진 형태만 정상적으로 형변환 시킨

Number 
- 숫자만 있는 문자열에서 소수점 포함 숫자부분을 뽑아냄
- 문자형 데이터와 숫자형 데이터가 섞여 있어도 숫자만 알아서 걸러냄

indexOf(찾을문자열) : 정규식 표현에 사용X
search(찾을문자열) : 정규식 표현에 사용

integer: 정수 (소수점 포함 X) / number: 소수점 포함
bigint: big integer 큰 정수
sqrt: square root 줄임
```
```
숫자 관련
number()
parstInt()

문자열 관련
indexOf()
search()
slice()
substr()
substring()
replace()
replaceAll()
toUpperCase()
toLowerCase()
includes()
concat()
split()
trim()

math 객체 메서드 : max(), min(), round(), random()
```




