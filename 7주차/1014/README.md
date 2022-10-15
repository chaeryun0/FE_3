# 📚 DOM (Document Object Model)

﹅ HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할  <br>

﹅ 브라우저는 서버에서 받은 문서인 HTML, CSS를 파싱하고, 그 결과물인 `DOM 트리`와 `CSSOM 트리`를 융합해 사용자 장치에서 볼 수 있도록 변환한다. <br>
﹅ **DOM 트리는 HTML을, CSSOM 트리는 CSS 를 조작하는 API(Application Programming Interface)**  <br>

- 노드(node) : 각각의 요소와 속성, 콘텐츠를 표현하는 단위  <br>
- Parsing(파싱) : 일련의 문자열을 의미있는 token으로 분해하고 이들로 이루어진 parse tree를 만드는 과정

## 👀 DOM 트리에 접근하기

> document 객체를 통해 HTML 문서에 접근이 가능 <br>
> document는 브라우저가 불러온 웹페이지를 나타내며, DOM 트리의 진입점 역할을 수행

```
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName(); 

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName(); 

// css 선택자로 단일 요소에 접근하기 (가장 첫번째에 있는 요소만)
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");
```

## 🔧 DOM 제어 명령어

**1. 이벤트 삽입 : target.addEventListener( type, listener )**
```
<button>버튼</button>
// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지함
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있음

const myBtn = document.querySelector("button");

myBtn.addEventListener('click', function(){
  console.log("hello world");
})
```
**2. 클래스 제어 : DOM api를 통해 요소의 class 속성을 제어**
```
const myBtn = document.querySelector("button");
myBtn.addEventListener('click', function(){

myBtn.classList.add("blue"); // blue 라는 클래스의 속성 값을 지정 // 버튼을 클릭하면 html 태그에 class가 추가됨
})

// myBtn.classList.remove(“blue”);   클래스를 제거
// myBtn.classList.toggle(“blue”);   클래스를 토글에 없으면 속성을 넣어주고, 있으면 제거
// myBtn.classList.contains(“blue”); 해당하는 클래스가 있는지 확인, T/F 반환
```
**3. 요소 제어 : DOM api를 이용하면 요소를 새롭게 생성하고, 위치하고, 제거 가능**
```
document.createElement(target); target 요소를 생성
document.createTextNode(target); target 텍스트를 생성

element.appendChild(target); // target 요소를 element의 자식으로 위치 (항상 부모의 마지막 자식으로 배치됨)
element.removeChild(target); // element의 target 자식 요소를 제거(부모가 있어야함)

parentElement.insertBefore(target, location); 
// target요소를 부모 요소(parentElement)의 자식인 location 위치 앞으로 이동함
```
**4. JavaScript 문자열을 사용해 element, text 노드를 생성하거나 추가하기**
> DOM api를 이용하면 요소 안의 값에 접근하여 값을 가져오거나, 변경할 수 있음
```
<p></p>
<input type="text">
<button>Write Something!</button>
```
```
const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener('click', function(){
  myP.textContent = myInput.value; 
});

// textContent는 <p> 안에 있는 텍스트 노드를 의미
// 특정 값을 넣으면 <p> 안에 있는 텍스트 노드 값을 변경할 수 있음

-- 위 아래 코드는 이벤트 타입의 차이 ('click'/'input')--

// input 요소에 'input' 이벤트를 연결하여 사용자 입력을 통해 실시간으로 값을 반영시킬 수 있음
// 이벤트를 연결할 대상이 input이어야 연결이 가능 (버튼 X)

myInput.addEventListener('input', ()=>{
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>"; // <p>안에 자식 요소로 <strong>이 내용과 함께 추가됨

myP.outerHTML = "<div></div>";
```

##  🧐 innerText 와 textContent의 차이

﹅ ```innerText``` : 요소의 **렌더링된** 텍스트 콘텐츠를 나타냄 <br>
﹅ ```textContent``` : 노드의 **텍스트 콘텐츠만**을 표현
```
• innerText는 "사람이 읽을 수 있는" 요소만 처리
• 문자열 안에 처리해야할 속성들을 모두 처리해서 보여줌
• 문자열로 html 문법을 작성해서 보내주면 html 코드로 만들어서 보여주는 것

→ 예를 들어 <style> 태그가 작성되어 있으면 사라져서 보이게 됨, 결과 출력시 태그가 적용이 안됨 
→ 반면에 innerText는 태그를 모두 인식해서 문자열을 보여줌
```
> **자바스크립트를 좀 더 빠르게 동작하게 하기 위해, 최적화에 있어서는 ! 요소 안에 있는 텍스트를 처리할 때 ```textContent``` 속성을 사용하는 것이 좋다.**


