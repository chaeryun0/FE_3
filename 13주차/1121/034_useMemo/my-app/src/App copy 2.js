// 특정 변수가 변할 때에만 부하를 발생시킬 수도 있다.
// 그렇지만 모든 결과를 다 저장하면 메모리 낭비가 되기 때문에 주의 필요
import { useState, useMemo } from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

// useMemo 사용하여 성능 최적화
function App() {
  const [count, setCount] = useState(0)
  const result = useMemo(()=>{
    return 부하()
  }, [])

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;