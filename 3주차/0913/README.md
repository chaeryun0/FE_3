# CSS declarations

<!-- 절대적인 것은 아니고 주로 -->

## h1과 p 의 기본단위

    h1의 기본px : 32px;
    p의 기본px : 16px;

고정 단위로 주면 좋은 것 : 패딩, 마진, 모니터 크기에 따라 상관없이 보일 것들,이미지, 반응형 고려하지 않아도 될 때, 글씨와 관련 없는 것들, 계산하기 쉬워야 하는 것들
가변 단위로 주면 좋은 것 : 패딩,마진,이미지, 폰트

## 1. 고정 단위란? 

사용자가 선언한 고정된 크기 그대로를 화면에 그리기 때문에 직관적으로 사용 가능
ex) cm, mm, px 등이 있지만 cm,mm은 거의 쓰지 않음

## 2. 상대 단위란?

배수 단위, 부모 요소의 글자크기 등 특정한 대상을 기준삼아 상대적으로 font-size가 결정 됨
ex) em, %, rem, vw, vh 등

### em
em은 상대 길이 단위로 배수를 나타내는 단위이며, 부모의 font-size에 따라 기준점을 세우고 기준점에 따라 크기가 달라짐
ex) 버튼(large, medium, small) 등에 텍스트의 비율에 따라 달라져야 할 경우에 쓰임
    
### rem
rem은 html의 폰트사이즈를 기준으로 정해짐, 기본적으로 em보다 많이 쓰임

<br>

## overflow 속성

요소의 콘텐츠가 너무 커다랄 경우 요소를 어떻게 처리할지 지정

- visible : overflow 속성의 기본 값, 콘텐츠를 자르지 않음 (x축이나 y축 값에 따라 한쪽만 스크롤 바 생성)
- hidden : 콘텐츠를 요소의 크기만큼 맞추기 위해 잘라냄
- scroll : 콘텐츠를 요소의 크기만큼 맞추기 위해 잘라냄, 잘려진 나머지 부분을 확인 할 수 있도록 스크롤 바(x축, y축 모두) 제공

<br>

## background-image

1) background-image : url을 이용해 이미지의 주소에서 이미지를 불러옴
2) background-color : 요소의 배경 색 지정
3) background-repeat : 배경이미지를 어떻게 반복할것인지 지정
	- repeat 기본값
	- no-repeat
	- repeat-x
	- repeat-y
	- round
	- space
4) background-position : 배경이미지의 위치를 지정
5) background-size

<br>

## font

text-transform : 텍스트를 대문자나 소문자로 표현
font-style : 기울기 글꼴로 표현 (normal 일반 스타일, italic 필기체, oblique 기울임체)
text-align : 텍스트의 정렬을 표현 (justify는 마지막 줄을 제외하고 양쪽으로 정렬)
text-decoration : 텍스트의 장식을 설정 (none은 효과제거, underline은 밑줄)

<br>

## opacity

- 요소의 투명도를 지정
- 이때 투명도가 들어간 요소 안의 내용물도 함께 투명 해짐
- 값은 0.0 과 1 사이의 숫자를 지정할 수 있으며 만약 값이 0.5라면 투명도는 50%



