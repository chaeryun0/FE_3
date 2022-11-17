# React Event

> React 엘리먼트에서 이벤트 처리하는 방식은 DOM엘리먼트에서의 이벤트 처리하는 방식과 비슷하지만 다른점도 있다.

- React의 이벤트는 카멜케이스를 사용 / DOM의 이벤트는 소문자를 사용
- JSX를 사용하여 함수로 이벤트 핸들러를 전달 / DOM은 문자열로 이벤트를 전달
- 핸들러 함수는 앞에 접두사 handle 을 붙여준다. (관습, 회사 컨벤션 마다 다를 수 있음) 

## 리액트에서 지원하는 이벤트 종류

- `onClick`
- `onChange`
- `onInput`
- `onFocus`
- `onMouse`
- `onLeave`
- 기타 참고 (https://ko.reactjs.org/docs/events.html#other-events)

 

# React - 컴포넌트 리스트 만들기

## 개발 환경 설정 시, 새 프로젝트 생성
```
npx create-react-app .
```
- my-app 파일명을 안적고 ```.```을 찍으면 현재 폴더로 들어가게 된다.
- my-app 파일 생성하지 않고 바로 npm start 된다.

## React key 속성

- 자식들이 key를 가지고 있다면, React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인한다.<br>
- `key`를 추가하여 트리의 변환 작업이 효율적으로 수행되도록 수정할 수 있다.

```
function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const numComponentsArray = num.map(v => <p key={v.toString()}>안녕,{name} {v}호</p>)

  // key를 인덱스로 잡는 것은 비권장
  // const numComponentsArray = num.map((v, i) => <p key={i}>안녕,{name} {v}호</p>)

  console.log(numComponentsArray)

  return(
    <div>
    {/* 콤마를 없애고 요소를 밖으로 꺼내줌 이것을 리스트로 렌더링 한다고 함 */}
    {/* {['hello', 'world', 3, 4, 5]} */} 
    {/* { helloworld345 */} 
    {/* 리스트로 렌더링 될 때는 고유한 key 값을 넣어주어야 함, 어떤 요소에 변동이 있을 때 그 요소만 새로 그려주기 위함 */}

     {numComponentsArray}
     {/* 드물지만 이런 경우가 생길 수 있으므로 비권장 */}
     {/* {numComponentsArray.concat(numComponentsArray)} */}
    </div>
  )
}
```
```
💡 컴포넌트 안에서 리스트를 렌더링할 때는 꼭 key 값을 넣어줘야 한다. 💡

- 키값을 넣어주는 이유는 리엑트에서 랜더링 작업을 진행했을 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함
- key가 없다면 하나의 요소가 변경이 되어도 array에 담긴 요소를 모두 다시 그려줌
- key 값은 동일한 컴포넌트 리스트에서만 ‘유일값’이면 되기 때문에 일반적으로 배열의 id 값을 넣어줌
- 다중 Array 라도 중복된 key 값을 가지고 있으면 안된다.
```
 <br>
 
# styled-components 

> CSS in JS 관련하여 가장 인기 있는 리엑트 라이브러리

## styled-components 설치하기
``` 
// with npm
npm install styled-components

// with yarn
yarn add styled-components

// react와 한 번에 설치(리눅스에서만 작동, window는 하나씩 타이핑 해야 함)
npx create-react-app my-app && cd my-app && npm install styled-components
```
```
import styled from 'styled-components'

const ContnetsDivOne = styled.div`
  color: red;
`

const ContnetsDivTwo = styled.div`
  color: green;
`

const ContnetsDivThree = styled.div`
  color: blue;
`

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`
```
- 태그는 내가 설정, div 대신 다른 것도 가능 (h2 등)
- ContnetsDivThree 대신 다른 이름 사용 가능 (sectionTitle 등)
- 컴포넌트 안에서만 스타일링이 되므로 독립적임
- 클래스명을 유추하기 어렵기 때문에 정보를 빼가기 힘듬

# module.css

> module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 한다. <br>
- module.css를 사용할 때 주의할 점은 적용하고자 하는 **컴포넌트 이름**과 **반드시 일치**시켜줘야한다.<br>
- 예를들어 **Detail.jsx 파일에만 적용**해주고 싶은 module.css의 파일명은 **Detail.module.css**여야 한다.



