# memo

- Memo는 memoization 기법을 사용 - 어떤 부하가 생기는 함수를 반복해서 작업할 때 기억해두었다가 사용하는 기법
- 렌더링이 될 때 이전에 작업해두었던 결과값을 가지고 있다가 반영해주는 것
- 메모이제이션 기법을 사용하는 대표적인 예 : 재귀함수의 피보나치 순열

```
let 컴포넌트명 = memo( function(){})

// 메모로 감싸주면 자식 컴포넌트로 보내는 props가 변하는 경우, 재렌더링이 일어난다.
```

# useMemo

- 컴포넌트 내부 연산을 최적화 (컴포넌트를 로드시 1회만 실행하고 싶은 함수가 있을 때)
- 최적화할 함수와 함수가 의존하게 될 값을 `useMemo`에게 전달
- `useMemo`는 렌더링 중에 실행되어서 의존하는 값이 변경되었는지를 체크하고, 의존성 값이 변경되었을 때에만 값을 다시 계산한다.

```
const 저장할변수 = useMemo(()=> {
  return 계산하는_무거운함수()
}, [감시하고_있는_변수])
```
```
const n = useMemo(() => getNum(userInfo), [userInfo]);

// useMemo를 사용할 때는 앞에 useMemo를 쓰고 그 안에 화살표 함수로 최적화할 함수를 넣어준다.
// 두번째 인자로는 최적화할 함수가 의존하는 값을 배열 형태로 넣어준다.
// useInfo 값에 의존하는 getNum()함수가 useInfo의 값이 바뀔 때만 실행된다.
```

# useMemo vs useEffect 차이점

> `useMemo(실행될 것, [값])` : 렌더링 전에 실행되어 메모이제이션한 것을 반환 해줌, 값이 바뀌었는지 확인하고 **렌더링 전**에 저장된 것을 보내줌<br>
> `useEffect` : **렌더링 후**에 일어나므로, 렌더링 후에 **상태가 업데이트 되었을 때를 감지**하여 동작함<br>

- 렌더링 전 : `useMemo` / 렌더링 후 : `useEffect`
- 상태 변화를 감지하여 effcet를 동작하게 하고싶다면 `useEffect`
- 값을 저장하여 불필요한 동작 또는 렌더링을 막아 최적화하고 싶다면 `useMemo`

<br>

# props와 context

<img src="https://user-images.githubusercontent.com/112460430/203116356-1cc9188b-d02c-4085-b4d9-9837bbebabd0.png" width="60%">

- 작은 프로젝트에서 props 전달은 문제가 없지만, 프로젝트가 커져서 부모가 n번째 자손에게 넘겨줘야 한다면, 계속해서 불필요한 props를 사용하게 되고 의미 없는 값들이 컴포넌트들을 스쳐가게 된다.
- 이때 사용하는 것이 바로 **`context` (props에 대한 전역 데이터 저장소)**
- `context`는 props를 사용하지 않고 **n번째 자손에게 직접 데이터를 건내준다.**


# contextAPI - createContext로 context를 생성

- 값을 전달해줄 컴포넌트에 `Context.Consumer` 형식으로 감싸주고 UserInfo 안에 있는 `Consumer`라는 컴포넌트를 통해 value 값을 가져온다.

```
// props로 자손에게 데이터 전달

import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo/>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
```

## Context.Provider로 값 변경하기

- HelloLicat에 `UserInfoContext.Provider`로 감싸서 값을 전달하면 consumer로 전달되는 value 값이 바뀐다.
- `Provider`로 값을 전달하지 않으면 에러가 발생하니 꼭 `value`를 넣어야 한다.

```
const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};
```

# Hook - useContext

- `useContext`는 함수형 컴포넌트에서만 사용 가능
- `Context`는 props가 아닌 `전역으로 전달`하기 때문에 부모에서 자식으로(부모 → 자식) 흐름의 전달 없이도 편하게 값을 전달할 수 있다.
- Context를 사용하는 이유는 프로젝트의 컴포넌트 구조가 복잡해지면서 props로 전달하는데 한계가 있기 때문
- 하지만 props로의 전달로 충분히 가능하다면 Context를 사용하여 전역으로 전달할 필요가 없다.

```
// Context API에서 Context.consumer로 전달하던 방식을 Hooks의 useContext를 사용해서 더 편하게 값을 전달할 수도 있다.

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

```

# useState - Lazy initialize

- 초기값 계산에 많은 비용(연산 시간, 메모리 등)이 소요될 때 비효율적인 부분을 최적화하는데 사용할 수 있음

```
import React, { useEffect, useState } from "react";

function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "개리";
}

// 컴포넌트가 매번 렌더링될 때마다 getName() 함수를 실행 → 매우 비효율적
function App() {
  const [name, setName] = useState(getName());
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}

export default App;
```

- 이를 최적화하려면 함수 자체를 값으로 넘기고 리액트가 그 함수를 실행하도록 만들어야 함
- 함수를 실행한 결과를 값으로 넘기지 않고 `getName`함수 자체를 값으로 넘기는 방식으로 바꿔야 한다.

```
const [name, setName] = useState(getName);
```
1. `useState()`에 인수로 `getName` 함수를 값으로 넘겨준다.
2. `useState(getName)`이 진행되면 최초 초기화 진행 과정에서 `getName`을 실행하게 된다.
3. 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기 때문에 `getName`을 실행하는 부분이 생략된다.

<br>

# 함수형 컴포넌트의 라이프사이클

<img src="https://user-images.githubusercontent.com/112460430/203117621-d7367422-17e3-46e9-8d57-72743e92d165.png" width="50%">

> 함수형 컴포넌트는 간편한 컴포넌트 선언 및 프로그래밍 가능하며 React Hook을 사용한다. <br>
> state와 생명주기(Life Cycle) 메소드를 별도로 구현해야 함 **(useState, useEffect 사용)**

- 마운트(Mount) : DOM이 생성되고 웹 브라우저 상에서 나타나는 것
- 업데이트(Update) : 변경이 아닌 교체 되었을 때
- 언마운트(Unmount) : DOM에서 제거되는 것

