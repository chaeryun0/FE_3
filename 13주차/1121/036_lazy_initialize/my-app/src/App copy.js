import {useEffect, useState} from 'react'

function getName(){
  console.log('오래기다리는 작업')
  return '개리'
}

// 클릭할 때마다 getName 이 렌더링 되지 않게 해야함 -> 해결 방법 : lazy initialize
// 함수 자체를 값으로 넘기고 리액트가 그 함수를 실행하도록 만드는 방식
// getName 함수 자체를 값으로 넘기는 방식을 사용해야 해결할 수 있다.
function App() {
  // const [name, setName] = useState(getName())
  const [name, setName] = useState(getName) // 값이 올라가지만 오래 기다리는 작업은 1번만 출력됨
  const [num, setNum] = useState(0)

  return (
    <>
      <div>안녕하세요 {name}! 현재 숫자는 {num} 입니다!</div>
      <button onClick={()=>setNum((p)=>p+1)}>{num}</button>
    </>
  );
}
export default App;