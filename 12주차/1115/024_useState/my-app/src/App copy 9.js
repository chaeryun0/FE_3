function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const numComponentsArray = num.map(v => <p key={v.toString()}>안녕,{name} {v}호</p>)

  // key를 인덱스로 잡는 것은 비권장, 문제가 발생할 수 있음
  // const numComponentsArray = num.map((v, i) => <p key={i}>안녕,{name} {v}호</p>)

  console.log(numComponentsArray)

  return(
    <div>
{/* 콤마를 없애고 요소를 밖으로 꺼내줌 이것을 리스트로 렌더링 한다고 함 */}
{/* {['hello', 'world', 3, 4, 5]} */} 
{/* { // helloworld345 */} 
{/* 리스트로 렌더링 될 때는 고유한 key 값을 넣어주어야 함, 어떤 요소에 변동이 있을 때 그 요소만 새로 그려주기 위함 */}

      {numComponentsArray}
      {/* 드물지만 이런 경우가 생길 수 있으므로 비권장 */}
      {/* {numComponentsArray.concat(numComponentsArray)} */}

      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}
    </div>
  )
}

export default App;