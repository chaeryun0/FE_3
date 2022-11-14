# 1. Component 만들기

```
return (
	<div>
		<Licat />{/* 라이켓 모음 */}
		<Time />{/* 시간보여주기 */}
	</div>
)

// 이렇게 묶은 것을 컴포넌트라고 함, 각 기능 또는 목적에 따라 분리하여 사용하면 매우 편리
```

# 2. Props 파라미터

> props는 컴포넌트를 만들 때 넣어줄 수 있는 속성의 집합 <br>
> 컴포넌트는 props라는 임의의 입력을 받아 리액트 엘리먼트들을 화면에 어떻게 표시할지 기술할 수 있다. <br>
> 컴포넌트는 재사용성을 극대화한다.

```
function Hello(props) {
  const someStyle = {backgroundColor:"black", color:"white"}
  return(
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>{/* 이렇게하면 나옴 */}
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"/> {/* class대신 className=""로 진행! */}
    </div>
  )
}
```

# 3. 컴포넌트 파일 분리

> 파일을 분리할 땐 가장 윗줄에 import React from 'react'를 입력 <br>
>  명시적으로 'react를 사용하겠다'고 선언한 것

```
// src/Components/Hello.js

import React from 'react';
import '../App.css'; // 파일의 위치가 달라졌으니 css의 주소도 바꿔주기

function Hello(props) {
  const someStyle = {backgroundColor:"black", color:"white"};
  return(
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"/>
    </div>
  )
}

export default Hello; // 밖에서 사용할 수 있도록 해줌
```
```
// 수정된 App.js // 각 컴포넌트들을 가지고 옴

import Hello from './Components/Hello';
import Time from './Components/Time';

function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
    </div>
  );
}

export default App;
```

