function Hello({name}){
  if(name) { // name의 값이 있다면
    return (
      <div>{name}</div>
    )
  }
  // name이 없다면
  return <div>이름이 입력되지 않았습니다!</div>
}

function App() {
  return (
    <Hello name='hojun'/>
  );
}

export default App;