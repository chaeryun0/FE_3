# 📚 Grid

> **부모 컨테이너 요소안에서 내부 자식 요소들의 위치를 X축과 Y축 방향 모두를 이용해 배치하는 내부디스플레이타입의 하나**

<image src="https://user-images.githubusercontent.com/112460430/192091653-49fd1155-3bcc-4292-8b70-3a7563f03a23.png" width="50%">

## 🧐 Flex와 Grid의 차이점
 
> Flex : 한 방향 레이아웃 시스템 (1차원) <br>
> Grid : 두 방향(가로-세로) 레이아웃 시스템 (2차원) 
  <br>
  
## 📝 grid-container에 사용하는 속성
  
```
grid-template-columns: 1fr 1fr 1fr;         /* 열방향 그리드 트랙 사이즈 설정 */
grid-template-rows: repeat(3, 1fr);         /* 행방향 그리드 트랙 사이즈 설정 */
grid-template-columns: repeat(2, 1fr 30px); /* repeat(반복횟수, 반복값) 함수 */

grid-template-rows: repeat(3, minmax(120px, auto));
/* 행방향 그리드 트랙의 최소 높이를 120px, 최대 높이를 가용할 수 있는 최대 크기 자동으로 */

grid-template-columns: repeat(auto-fill, minmax(50px, auto));
/* grid-template-columns: repeat(auto-fit, minmax(50px, auto)); */

gap : 10px 30px; /* (row, column), flex에서도 사용가능, 익스플로러 미지원 */
```  
  
## 📝 grid-item에 사용하는 속성

> **그리드 컨테이너 안에서 그리드 아이템이 차지하는 영역의 범위와 위치를 설정하는 속성**

- 범위의 시작과 끝 설정 가능
- 컬럼과 로우 방향에 대한 축약 속성 지원
- 범위의 기준이 되는 값은 grid-line의 번호

```
- grid-column : 1 / 3;
- grid-row : 1 / 3;
- grid-area : 1/1/3/3; 
- grid-area: 1 / 1 / span 2 / span 2;  -> row방향 2칸 / column방향 2칸 차지 
  
- grid-area의 설정 값은 순서대로 각각 
  grid-row-start, grid-column-start, grid-row-end, grid-column-end를 의미

- span 키워드를 사용하면 그리드 라인의 번호를 사용하지 않아도 됨
```
### ✓ grid-template-areas 속성
```
.container {
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "main . ."
    "main . aside"
    "footer footer footer";
}
header { grid-area: header; }
main   { grid-area: main;   }
aside  { grid-area: aside;  }
footer { grid-area: footer; } 
```
### ✓ 그리드 아이템의 Z축 설정
```
aside{
  grid-area:aside;
  background-color: lightgreen;
  transition:0.3s; /* 요소에 변화가 있을 때 점진적으로 표현해줌 */
  transform-origin:0 0; /* 어떤 좌표를 기준으로 요소의 위치를 변경할지 */
}

/* aside 에 마우스를 호버하면 10% 크기를 키움*/
aside:hover{
  transform:scale(1.1);
}

footer{
	/* aside 의 크기가 커져도 footer를 가리지 않게함, footer 보이도록 */
  z-index:1;
  grid-area:footer;
  background-color: aquamarine;
}
