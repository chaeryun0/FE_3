import React, { useRef, useState, useMemo } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([]) // 유저 정보를 담음, 배열로 초기화
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  const n = useMemo(() => getNum(userInfo), [userInfo]);
  // useMemo를 사용할 때는 앞에 useMemo를 쓰고 그 안에 화살표 함수로 최적화할 함수를 넣어준다.
  // 두번째 인자로는 최적화할 함수가 의존하는 값을 배열 형태로 넣어준다.
  // useInfo 값에 의존하는 getNum()함수가 useInfo의 값이 바뀔 때만 실행된다.

  function handleInputName(e){
    console.log(e)
    setName(e.target.value) // 값이 변경되면 이벤트가 실행됨, 입력할 때 마다 값이 갱신됨
    console.log('렌더링 - 1')
  }

  function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
  }

  function handleSubmit(e){
    e.preventDefault()
    // userInfo.push({});
    const newInfo = [...userInfo, {name, id}] // [...userInfo, {name: name, id: id}] 와 동일
    
    inputName.current.value = '' // 빈문자열로 만들어줌
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo) // 유저 정보가 계속해서 누적시켜주기 위해 변경 함수인 setUserInfo에 담아줌
    console.log('렌더링 - 3')
  }

  // 모든 렌더링에 함께 렌더링되는 이슈가 있다.
  function getNum(li){ // userInfo의 갯수를 세어줌
    console.log('렌더링!')
    return li.length
  }

  return (
    <>
      <form>
        <input 
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInputId} // 변화가 있을 때마다 안에 있는 핸들러 함수를 실행
          ref={inputId} // 어떤 요소의 값을 가져올 때
        />
        <button type='submit' onClick={handleSubmit}>회원 명부 작성</button>
      </form>
      <ul>
        { // userInfo 들이 map을 통해 <h3>, <strong>으로 출력되는 구조
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{n}</span> 
      {/* useMemo 사용하여 변경된 부분만 렌더링 */}
    </>
  )
}