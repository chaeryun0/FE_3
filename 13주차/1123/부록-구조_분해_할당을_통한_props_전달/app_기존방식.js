function Test({one}){
  return <div>{one}</div>
}

function App() {
  const test = {one:'hello'}
  return (
    <div>
      <Test test={test} />
      <Test {...test} />
      {/* 둘다 동일함 */}
    </div>
  );
}
export default App;