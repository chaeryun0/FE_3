## 📚 text

```
vertical-align: baseline; /* 기본값 */
vertical-align: sub; /* 부모의 subscript(아래첨자)-baseline 에 맞추어 정렬 */
vertical-align: super; /* 부모 위 첨자 기준 정렬 */
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle; 
/* vertical영역의 중간이 아닌 알파벳 소문자의 중간이 middle값이 된다.
   폰트 종류가 바뀌게 되면 middle값도 상대적으로 바뀌게 된다. */
vertical-align: top;
vertical-align: bottom;
```

- text-indent : 들여쓰기 공간 설정
- text-overflow : 부모 컨테이너를 넘어간 컨텐츠가 어떻게 보여질지 결정

```
text-overflow 속성은 그 자체만으로 넘친 컨텐츠를 만들어서 처리하지 않는다. 
컨테이너에 overflow:hidden, white-space:nowrap 속성이 같이 사용되어야 한다. <br>

-text-overflow:hidden 텍스트가 컨텐츠 넓이를 넘쳤을 때 넘치는 글씨 가려줌 <br>

- white-space : nowrap 컨텐츠 넓이보다 글씨가 넘치면 자동으로 줄바꿈이 되는걸 막아줌 <br>

→ 줄바꿈을 white-space로 막아주고 text-overflow:ellipsis로 처리
```

## 📚 position

- position : static (기본값)
- position : relative (기준 = 내 원래 위치를 기준으로 이동)
- position : absolute (기준 = 내 부모 (가장 가까운 부모의 박스 내를 기준으로 position: relative 를 가지고 있는 부모 기준))
- position : fixed (기준 = 현재 브라우저 화면(viewport) 기준, 스크롤을 움직여도 고정되는 요소가 필요할 때 사용)
- position : sticky (조상에 스크롤이 있다면 가장 가까운 부모 요소의 컨텐츠 영역에 달라붙음)

 
## 📚 z-index

- 덮어쓰기 순서 (값이 클 수록 맨 앞으로)
- position 속성을 준 박스가 여러 개일 경우, 어떤 요소가 맨 앞에 올지 결정할 때 사용
- static을 제외한 position 속성값이 적용된 요소의 Z축 순서를 결정할 수 있음


## 📚 float 

- 그림을 따라 흐르는 텍스트 레이아웃을 웹에서 구현하기 위한 속성
- ```float:left``` 왼쪽으로 붕 떠서 정렬
- ```float:right``` 오른쪽으로 븡 떠서 정렬
  
![image](https://user-images.githubusercontent.com/112460430/190188224-a3501352-7bfb-402e-83b2-4425bfa33657.png)  
