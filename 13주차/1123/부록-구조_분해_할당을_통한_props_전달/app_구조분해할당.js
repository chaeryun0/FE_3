function Test({one}){
  return <div>{one}</div>
}

function App() {
  return (
    <div>
      <Test {...{one:'hello'}} />
      {/* 처음부터 {} 안에 넣어 구조분해할당 */}
    </div>
  );
}
export default App;