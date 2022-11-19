// 리액트가 렌더링되는 원리, 리액트는 경량화된 오브젝트
// array를 직접 만들어서 넣어줬을 때 test 가 어떤 역할인지 확인해보기 

function App() {
  // const Test = <h1>hello Test</h1>
  // console.log(Test) // object
  function Test(props){
  	  console.log(props)
      return <h1>hello Test</h1>
  }
  return (
      <div>
        {/* test가 이렇게 됐을 때는 props에 들어온게 아무것도 없음 {} 상태 */}
          <Test/>
          <Test/>
          {/* 리액트의 경량화된 object로 들어감 */}
          {[
              <h1 key='1'>hello 1</h1>,
              <h1 key='2'>hello 2</h1>,
              <h1 key='3'>hello 3</h1>,
              <h1 key='4'>hello 4</h1>,
              <h1 key='5'>hello 5</h1>,
              <Test key='6'a='10' b='20' c='30'>
                {/* children으로 아래 3개가 출력 */}
                  {[
                      <h1 key='1'>hello 1</h1>,
                      <h1 key='2'>hello 2</h1>,
                      <h1 key='3'>hello 3</h1>
                  ]}
              </Test>
          ]}
      </div>
  );
}

export default App;