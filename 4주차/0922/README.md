# 📚 CSS 실무 테크닉

## ✓ input box custom & select box custom

>  **웹접근성을 고려하여 input 태그를 IR 기법으로 숨기고 label 태그를 스타일링 하는 방법** <br>
> 꾸미기 힘든 input 요소를 화면에서 숨기고 + label 요소를 연결해 label 요소에 스타일을 적용 <br>
> option 태그는 고정되어 있는 스타일이 바뀌지 않아 운영체제마다 커스텀 하기가 힘들기 때문에 select, option 태그를 사용하지 않고 ```<button>```, ```<ul>```, ```<li>``` 로 스타일링 한다.

<br>

## 🔧 IR(Image Replacement) 테크닉

> 디자인적으로 보이지 않지만, 스크린 리더나 브라우저를 위해 정보를 전달하는 텍스트를 html 곳곳에 숨겨두는 방법

1. PC용으로 사용된 이미지내에서 의미있는 텍스트의 대체텍스트를 제공할 때
2. Mobile용으로 사용된 이미지내에서 의미있는 텍스트의 대체텍스트를 제공할 때
3. 스크린리더가 읽을 필요는 없지만  마크업 구조상 필요한 경우 (heading 태그)
```
.screen_out { 
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}
```
```
.blind {
	position: absolute;
	clip: rect(0 0 0 0); /* (top, right, bottom, left)  */
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
}
```

4. 중요한 이미지 대체텍스트로 이미지 off 시 에도 대체 텍스트를 보여주고자 할 때
```
.ir_wa{
	display:block;
	overflow:hidden;
	position:relative;
	z-index:-1;
	width:100%;
	height:100%
}
```


## 🔧 CSS Sprite 기법

> **여러가지의 이미지를 하나의 이미지 파일안에 배치하여 이미지로드 부담을 줄이는 방법** <br>
> 중요하지 않은, 꾸며주는 개념의 장식 요소만 사용
  
 <image src="https://user-images.githubusercontent.com/112460430/191753286-53f237a0-19b3-43dd-b1e9-d1b3e912fe2b.png" width="30%">
 
- 장점 : 하나의 이미지 파일안에 여러 이미지가 배치되기 때문에 이미지 로드 부담이 적다.
- 단점 
   - 이미지를 개별 포지션으로 잡아서 사용하여 스프라이트 이미지 하나가 웹에 로드되지 않으면 전체 이미지를 사용할 수 없음
   - 이미지 판 자체가 커지면 용량이 커져서 로드가 오래 걸리게 된다.
   - 관리가 어려움 (한 판에 있는 이미지 하나를 수정하기 보다 새로운 이미지를 추가하여 적용)
- 해결 방법 : 이미지 포맷을 데이터 포맷으로 바꾸는 방법

   <br>
  
## 🔧 레티나 디스플레이 대응법
  
   
 > 레티나랑 일반 모니터보다 높은 화소 밀도를 가진 디스플레이 기존 px 단위 사용한 이미지를 넣게 되면 같은 이미지를 불렀을 때 화소가 많아지면 선명도가 떨어져서 이미지가 흐려 보이는 현상 <br>
 - 레티나 디스플레이는 인치에 비해 픽셀이 압축되어 같은 인치의 노멀 디스플레이 보다 픽셀이 더 많기 때문 <br>
 - 해결 방법 : 화면에 우리가 그리고자 하는 사이즈의 2배 되는 이미지를 준비 →  CSS에서 px 지정하여 업로드
  
