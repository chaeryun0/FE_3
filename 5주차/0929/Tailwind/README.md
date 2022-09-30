# 📚 Tailwind CSS

> **CSS를 사용하지 않고 HTML 문서 내에서 빠르게 웹을 구축하게 해주는 프레임 워크** <br>
> 부트스트랩 처럼 m-2, flex와 같이 미리 세팅된 클래스를 활용하는 방식으로 HTML 코드 내에서 스타일링을 할 수 있음 <br>
> 빠르고 편리한 스타일링과 커스텀이 가능한 장점이 있는 반면 부트스트랩 처럼 클래스명이 길어지는 단점이 있음 <br>

```
 <!-- cdn script를 HTML 문서 내에 붙여 넣어서 사용 -->
<script src="https://cdn.tailwindcss.com"></script>
```
```
<div class="space-y-8">    // space-y-8: 자식요소들을 Y축으로 8*0.25em 씩 간격을 설정
  <div class="w-96 h-10"> // w-96 : 너비 96*0.25em, h-10 : 높이 10*0.25em 만큼 설정
    content
  </div>
</div>
```
```
<div class="flex border-4 border-red-300 m-3">               // flex: display flex로 지정, m-3 : 마진 상하좌우 3*0.25em
  <div class="p-2 border-4 border-blue-500">1 hello</div>   // p-2 : padding 2*0.25em 지정
  <div class="p-2 border-4 border-blue-500">1 hello</div>  // border-4 : 4px만큼 테두리 굵기 지정
  <div class="p-2 border-4 border-blue-500">1 hello</div> // border-blue:테두리색 지정
  <div class="p-2 border-4 border-blue-500">1 hello</div>
</div>
```
```
class="flex-col"           // flex-direction을 column 방향으로 지정
class="flex-wrap"         //  flex item 들이 container의 넓이를 초과할 시 줄바꿈
class="gap-숫자"          // 자식요소에 gap부여 단위는 0.25em
class="w-3/4"           // 현재 아이템 요소의 넓이를 부모요소의 3/4로 지정
class="justify-center" // justify-content: center 를 축약해서 적용
class="items-center"  // items-items : center 를 축약해서 적용

주어진 값 이외에 사용하고싶으면 arbitrary value[] 사용 (단위도 같이) 

class="md:" // 해상도에 따라 sm: ,md: ,lg: ,xl: ,2xl: 옵션 
<img class="w-16 md:w-32 lg:w-48" src="..."> // 768px 보다 작으면 w-32 적용
```


## 🔍 Bootstrap vs Tailwind

> **둘 다 CSS 없이 HTML 문서내에서 간편하게 스타일을 줄수 있는 프레임워크**

- Tailwind의 장점은 유연성이며, HTML 문서에 클래스를 정의하는 것으로 디자인을 구성할 수 있어 커스텀이 자유로움
- Bootstrap 은 미리 정해진 디자인의 component들이 있고, 그 컴포넌트들을 가져다 사용하는 방식으로 정해진 구성요소에 구속되어 있음
