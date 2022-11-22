# Redux

> **데이터를 엄격하게, 통합해서 관리함으로 예측 가능하게 데이터를 관리하기 위함** <br>
> React의 useState, useEffect 처럼 데이터들의 값이 바뀌었을 때 그 값들을 컴포넌트들에게 전달해주고 그 값들을 다시 화면에 보여준다.

- with Redux
    - 새로운 컴포넌트가 생성될 때 코드가 컴포넌트의 개수만큼 기하급수적으로 늘어남
    - 새로운 컴포넌트를 만들었을 때 이전 컴포넌트도 모두 수정해야 함
    
- without Redux
    - 새로운 컴포넌트가 생성될 때 코드가 늘어나지 않음
    - 새로운 컴포넌트 안에서만 코딩하면 된다.

## Redux의 특징

- 리듀서는 여러개일 수 있음 (대부분의 리듀서는 파일 분기를 통해 관리함)
- 상태를 저장하는 스토어는 하나만 사용
    - 상태가 한 개 이상이라면 관리해야 하는 모든 상태는 하나의 스토어 안에서 객체 구조로 저장해서 사용한다.
- state는 읽기 전용
    - 리덕스는 값을 읽기만 하며 기존의 객체나 배열은 건드리지 않고 새로운 값으로 생성해주어야 한다.
    - 배열이나 객체는 값은 바뀌어도 주소값은 동일한 성질을 가지고 있기 때문에 React에서도 spread 문법을 사용하여 새 배열이나 객체를 만들어줌
    - state값을 바꿔줄 때 기존 state를 수정하지 않고 읽어오기만 해야 한다.
- 데이터에 따라 선택적 갱신이 가능
    - Context는 가지고 있는 state가 하나만 변경되어도 Context의 값을 가지고 있는 모든 컴포넌트가 렌더링이 된다.
- reducer 함수는 반드시 순수 함수로 작성되어야 함, 리듀서 함수는 이전 상태(state)와 액션 객체 파라미터에 대해서만 의존해야 한다.
    - 순수 함수란 동일한 아규먼트라면 언제나 동일한 return 값을 주어야 한다는 것을 말함

<br>

# Redux 플로우

<img src="https://user-images.githubusercontent.com/112460430/203349578-eeb912e1-7d7c-4507-af1e-483db2d4f6e9.png" width="60%">

1. 하나의 중앙 데이터 store를 갖는다. (데이터는 state(상태)를 말함)
2. 상태값을 바뀔 때마다 데이터들의 state 값을 수정해줄 reducer 함수를 만든다. 
3. dispatch를 사용하여 reducer에게 state 값을 수정하라고(action 값을 전달) 요청한다.
4. reducer가 state값을 수정하면, subscribe를 사용하여 수정된 부분을 UI에 업로드한다.

<br>

## Vanilla JS에서 Redux 사용하기

**1. redux와 함께 redux dev tools(크롬 툴)를 사용, createStore함수를 사용하여 상태 저장**
``` 
var store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() // redux dev tools를 사용하기 위한 코드, 위 코드가 없으면 redux dev tools 사용 불가
); 
```
**2. 상태값을 바뀔 때마다 데이터들의 state 값을 수정해줄 reducer 함수 만들기**
```
function reducer(state, action) { 
// state는 현재 상태, action은 주문 받은 것
}
```
**3. dispatch가 reducer에게 state 값을 수정하라고(action 값을 전달) 요청**
  - input button을 클릭하면 {}에 있는 상태 변화 값을 dispatch를 사용해 reducer에게 객체로 전달
  - 액션 객체는 type 필드를 반드시 가지고 있어야 함, reducer 함수가 이 type 필드값과 이전 state 값을 참고해서 새로운 state를 만들기 때문
```
<input type="button" value="fire" onclick="
    store.dispatch({type:'CHANGE_COLOR', color:'red'}); 
">
```
**4. reducer가 전달 받은 state 값을 처리**
```
  function reducer(state, action) { // reducer의 첫번째 매개변수인 state는 처음 호출될 때, undefined가 되므로 초기값을 지정해줘야함
    if (state === undefined) {      // 최초 state 값을 초기화   
      return { color: "yellow" };   // 3번 과정에서 아직 클릭 하지 않았을 때도 값이 설정됨
    }

    var newState;
    if (action.type === "CHANGE_COLOR") { // 3번 과정에서 클릭하면 true

    // 내가 원하는 값만 변경하기 위해 기존 state 값, 새로 변경되는 값을 객체로 저장
      newState = { ...state, color: action.color }; // 기존 key에 value만 변경
    } // 새로운 state 값을 리턴
```
**5. 변경된 값이 적용되는 함수, 실제 화면에 뿌려주는 render 역할**
  - .getState()으로 변경된 newState 값을 가져와 사용
  - 새로운 데이터가 생성될 때마다 화면을 갱신, subscribe 함수는 액션에 의해 상태가 업데이트 될 때마다 실행
```
  function red() {
    var state = store.getState(); // state 값을 전달받음
  }

  store.subscribe(red); // state 변경 시 red 함수를 호출
  red();               // 해당 함수를 state 변경 전 한 번 실행
```

- state는 reducer를 통해서만 값을 처리
- reducer 함수는 요청 받은 내용을 처리해주는 역할
    - reducer는 전달된 액션(action)과 이전 state값을 가지고 어떻게 값을 처리해줘야 할지 결정한다.
    - 실제 값의 변경이 일어나서 reducer가 호출되면 액션(action)에 따라서 값이 바뀌게 되고 새로운 state값을 반환한다.
- 변경된 값을 적용시키는 함수는 새로운 state 값만 요청하고 적용시킨다.
- reducer 함수는 한 프로젝트에 하나만 존재하기 때문에 처리 내용이 많아지면 그만큼 함수 내부 코드 길이가 길어진다.

<br>

## React에서 Redux 사용하기

1. 설치 & 기본 환경 세팅
```
npm i redux react-redux
```

2. 폴더 세팅 : src 폴더 안에 아래 2개의 폴더 만들어주기
- components : 컴포넌트를 넣을 폴더
- modules : reducer를 만들고 통합된 reducer를 내보냄

3. modules 만들기
```
// 액션 생성함수
export const addNumber = () => {
    return { type: "ADD" } // 타입 생성
};

export const substractNumber = () => {
    return { type: "SUBSTRACT" }
};

// 초기 값 설정
const initialState = {
    stock: 100,
    goods: 1
};

// 리듀서 함수 설정 및 초기화, JS에서 사용한 것과 같이 조건문으로도 초기화할 수 있다.
const goodsReducer = (state = initialState, action) => {
}
``` 

4. 컴포넌트 연결하기
``` 
// useSelector : store의 상태 조회 Hook
// 상태 값 변경 시 상태값을 다시 가져와 컴포넌트를 렌더링 (JS에서 subscribe 역할)
    const {stock, goods} = useSelector(state => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods,
    }))
    console.log(stock, goods)

// useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
// JS에서는 store.dispatch({type:'CHANGE_TEXT', text:value});"처럼 dispatch 함수에 action을 객체로 직접 전달했지만
// React에서는 reducer 컴포넌트 내부에 action을 생성하는 함수가 정의되어 있어 addNumber, substractNumber를 반환 받아 action을 전달함
    const dispatch = useDispatch()
```
