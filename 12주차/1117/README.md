# 프로젝트에 라우터 적용

- 프로젝트에 리액트 라우터를 적용할 때는 파일에서 react-router-dom에 내장되어 있는 ```BrowserRouter```라는 컴포넌트를 사용하여 감싸면 된다. 
- ```BrowserRouter``` 를 적용하면 자식에서 라우팅 기능을 사용할 수 있다.
- 이 컴포넌트는 페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해준다.
- Routes는 URL 주소의 바구니이고 Route는 URL 

```
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸준다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One />}/>
      </Routes>
    </BrowserRouter>
  );
}
```

# Component props 전달하기

- 사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줄 수 있는데, 여기서 Route 라는 컴포넌트를 사용한다.
- ```Route: 특정 주소에 컴포넌트 연결하기```

```
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸준다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
      </Routes>
    </BrowserRouter>
  );
}
```

# Link - 다른 페이지로 이동하는 링크 보여주기

- 리액트 라우터를 사용하는 프로젝트에서 a 태그를 바로 사용하면 안된다. 
- a 태그를 클릭하여 페이지를 이동할 때 브라우저에서 페이지를 새로 불러오게 되기 때문 → 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링하게 됨
- Link 컴포넌트 역시 a 태그를 사용하긴 하지만, HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않는다.


## Link 작성하는 방법
- to 속성에는 접근할 경로가 들어간다. 
- 문자열이나 객체의 형태로 경로를 넣어줄 수 있다.

```
// 문자열
<Link to="/about">home</Link> // 파라미터
<Link to="/courses?sort=name&sorting=asc" /> // 쿼리 스트링

// 객체
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name&sorting=asc",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```

# 파라미터 설정
> **페이지 주소를 정의할 때 유동적인 값을 사용해야 할 때**

  1. 파라미터
     - 특정 id 나 이름을 가지고 조회를 할 때 사용
  3. 쿼리 스트링(Querystring)
     - 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 & 로 구분을 하는 형태 
     - 쿼리스트링은 URL의 한 부분이며 요청하고자 하는 URL에 부가적인 정보를 포함하고 싶을 때 사용
     - 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션 전달 시

```
/about/detail
<Route path="/profile/detail" component={Profile} /> // 여기서 detail은 경로
<Route path="/profile/:username" component={Profile} /> // 파라미터, 상대경로로 지정
```
```
// link를 추가
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      
      {/* 라우트를 감싸준다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}
```

## 파라미터만 잘라내주는 훅 사용

```
// 파라미터 사용 예1
const location = useLocation();
const path = location.pathname.split('/')[2]

// 파라미터 사용 예2
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
const { id } = useParams()
```

# props 사용

> **props : 컴포넌트의 속성값, 부모컴포넌트로부터 전달받은 데이터를 지니고 있는 객체**

### 1. useLocation
- pathname 가져와 styled-components와 결합 - useLocation Hook을 사용하여 pathname을 받아올 수 있다.
- useLocation( ) 훅을 사용하면 location 객체를 얻을 수 있다.
- location 객체에는 현재 사용자가 보고 있는 페이지의 정보를 담고 있다.

### 2. useParams 
- :id path 이용하기, useParams Hook을 이용하여 :id 값을 받아올 수 있다.
- Route의 path 규칙에 '/profile/:username' 이라고 넣어주면 이동하는 컴포넌트의 인자로 전달되는 객체에서 username 값을 가져올 수 있다.
- useParams Hook을 사용하면 url을 통해 쉽게 username을 가져올 수 있다.

<br>

# 중첩된 Router

### 방법 1. element로 전달되는 컴포넌트에는 리액트 라우터에서 제공하는 <Outlet/> 컴포넌트를 return 해주기

- 중첩된 라우트와 Outlet 은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때 유용하게 사용할 수 있다.
- 각 페이지 컴포넌트가 보여져야 하는 부분에 ```Outlet``` 컴포넌트를 사용

```
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import Resume from "./Components/Resume";


const ResumeId = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="resume/*" element={<ResumeId />}>
          <Route
            path=""
            element={
              <Resume
                hello="Hello"
                name="개리"
                hobby="게임"
              />
            }
          ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
```

### 방법 2. 직접 기재 - Outlet 없이 곧바로 Routes , Route로 기재할 수 있다.

```
const ResumePage = () => {
  return (
    <div>
      <Routes>
        <Route path=":id" element={<ResumeId />}></Route>
        <Route
          path="/"
          element={
            <Resume
              hello="Hello"
              name="개리"
              hobby="게임"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

const ResumeId = () => {
  const a = useParams();
  return (
    <>
      <div>{a.id}</div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Link to="" style={{ margin: "0 5px" }}>
        홈
      </Link>
      <Link to="/time" style={{ margin: "0 5px" }}>
        현재시간
      </Link>
      <Link to="/hello" style={{ margin: "0 5px" }}>
        안녕
      </Link>
      <Link to="/Resume" style={{ margin: "0 5px" }}>
        소개
      </Link>

     const ResumeId = () => {
  const a = useParams();
  return (
    <>
      <div>{a.id}</div>
    </>
  );
};
    </BrowserRouter>
  );
}
```

