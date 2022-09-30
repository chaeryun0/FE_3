# 📚 Sass 변수(Variable)

- 변수 사용 기준 : 값이 두 번 이상 반복되거나, 값이 수정될 가능성이 있다면 변수 생성 고려하기 
- 변수 생성 시 ```$``` 기호를 사용해서 스타일을 적용할 값을 저장

## 📍 변수의 타입

```
- numbers : 1, .82, 20px, 2em 등
- strings : "./images/a.png", bold, left, uppercase 등
- colors : green, #FFF, rgba(255,0,0,.5) 등
- booleans : true, false
- null
- lists : 10px 20px 30px                      // 공백 구분 배열 생성
- nth($lists, 2)                             // $lists 변수의 2번째 항목 사용
- map: ("h1": 45px, "h2": 19px, "p": 16px); // 키와 값으로 이루어진 자료구조
- map-get($map, "key");                    // 맵에 저장되어있는 키를 두 번째 인자로 적어 값을 불러옴
```

## 📍 Lists 와 Maps의 내장함수

```
append(list,value,[separator]) : lists의 값을 추가하는 함수
index(list,value) : lists의 값에 대한 인덱스를 리턴하는 함수
nth(list, n) : lists의 인덱스에 해당하는 값을 리턴하는 함수
```
```
map-get(map,key) : 키에 해당하는 값을 값을 리턴하는 함수
map-keys(map) : map에 들어있는 키(key) 전부를 리턴하는 함수
map-values(map) : map에 들어있는 값(value) 전부를 리턴하는 함수
```

## 📍 변수의 Scope(변수의 유효범위)

### ﹅ 지역변수
```
1. 선언한 자기자신을 감싸고 있는 중괄호 { } 안에서 사용
2. 하위 단계에 있는 중괄호에서도 사용 가능

.info{
	$line-normal : 1.34; // 지역변수
	font-size : 15px;
	line-height : $line-normal;
	text-align : right;
  span{
		line-height : $line-normal;
	}
}
```
### ﹅ 전역변수 
>  가장 윗부분에 정의하면 파일 내 어디서든 사용 가능

## 📍 Operator
```
- 비교연산자 (숫자형) 
1. < , <=, >, >=
2. ==, != (모든 타입)

- 산술연산자 (숫자나 색) : +, -, *, /
- String의 a + b : "문자열" 더하기, 문자열  "a", "b" 를 합쳐서 새로운 문자열로 반환

- 논리연산자 (불리언 타입)
```

## 📍 Mixin

> Mixin은 코드를 재사용하기 위해 만들어진 기능
> 중복되는 코드는 mixin으로 만들어 놓고 원하는 선택자 블럭에 mixin을 include하여 사용

```
@mixin 이름(매개변수) // 생성
@include 이름(인수)  // 사용

- 앞에 @Mixin을 쓰고 이름을 정해준 후, 중괄호 { } 안에 중복되는 코드를 넣어준 후, @include를 사용하여 스타일 하고자 하는 요소에 포함 시키기
- mixin은 파일을 만들어서 import하여 사용하거나, mixin을 사용할 파일 내에서 선언 후 사용 가능
- 이때, 여러 개의 mixin을 만들어 사용한다면, _mixins.scss 파일을 만들어서 관리
```

### 인수(Arguments)
> mixin 이름 뒤에 인수를 넣어서 사용할 수 있으며, 일반 언어와 마찬가지로 매개변수와 인수의 개수가 같아야 함 <br>
> mixin에 매개변수를 사용하면, 능동적으로 스타일을 적용할 수 있음 <br>
  → mixin의 매개변수에 들어가는 인자들의 값에 따라 형태는 같지만 스타일이 조금씩 달라지기 때문
```
@mixin image-style($ul, $size, $repeat, $positionX, $positionY) {
  background-image: url($ul);
  background-size: $size;
  background-repeat: $repeat;
  background-position: $positionX $positionY;
} 
// background 관련 스타일 코드가 들어있음
// mixin의 인수에 따라 조금씩 다른 스타일링이 가능
```
### Content 

> Mixin에서 내용을 추가하고 싶을 때 사용
> @content를 사용하면 원하는 부분에 스타일을 추가하여 전달할 수 있음

```
// 정의하는 곳에서
@mixin sample{
	display: flex;
	justify-content: center;
	align-items: center;
  @content;
}

// 사용하는 곳에서 (추가로 스타일링을 할 수 있음)
a {
	@include sample{
	    color: white;
	}
}
```
## 📍 조건문, 반복문, 함수

> 기존 프로그래밍 언어들에서 사용되는 조건문, 반복문을 사용해 코드의 재사용을 줄이는 것이 가능

### ﹅ 조건문
> 조건에 따라 스타일을 주고자 할 때, if와 else문을 사용 <br>
> if문 하나만 사용 할 수도 있으며, 뒤에 나오는 else문, else if문과도 함께 사용도 가능 <br>

```
if (조건){
	// 조건이 참일 때 실행될 구문
} @else if(조건){
	// else if 조건이 참일 때 실행될 구문
} @else{
	// 위에 모든 조건이 거짓일 때 실행될 구문
}
```

### ﹅ 반복문
> @for은 정의한 횟수만큼 코드 실행을 반복
> @for문에 from(시작 : 이상) - through(끝 : 이하)를 사용하여 시작과 끝을 정함

```
@for ($변수) from (시작) through(끝){
	// 반복할 내용
}
```

```
// each문은 lists나 맵의 각각의 요소마다 코드를 실행해서 스타일을 적용할 수 있게 함

@each ($변수) in (리스트나 맵){ 
	// 반복할 내용
}
```

### ﹅ function

> @function 키워드를 사용하여 함수를 생성하고 **함수이름( )** 형태로 함수를 호출하고 실행
> mixin은 스타일 코드를 반환 vs function은 `@return` 을 사용해서 값 자체를 반환

```
@function 함수이름($매개변수) {
	// 실행 코드
	@return 값
}
```

### ﹅ 내장함수

> 기본적으로 내장되어 있는 함수 () <br>
> ()앞에 있는 것은 변수일 뿐 실행시키는 것은 ()괄호 <br>
> lists, maps, max, min 등등

