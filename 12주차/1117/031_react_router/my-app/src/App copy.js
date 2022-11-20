// npx create-react-app my-app --template basic-react
// cd my-app
// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줌 */}
      <Routes>
        {/* / 로 들어왔을 때 {<Index />} 이 컴포넌트와 연결해줌 */}
        {/* url은 달라지지만 모두 한페이지에서 작동한다. */}
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name = 'licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  console.log(props)
  return <h1>{props.name} hello world1</h1>
}
// "/one" url로 들어가면 licat hello world1 출력

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;