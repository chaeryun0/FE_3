import React, { useRef, useState } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  // 현재 값이 변하는 곳은 총 3군데 -> 모두 렌더링
  // 이름을 입력할 때
  function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')
  }

  // 아이디를 입력할 때
  function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
  }

  // 버튼을 눌렀을 때
  function handleSubmit(e){
    e.preventDefault()
    // userInfo.push({});
    const newInfo = [...userInfo, {name, id}] // 새로운 유저의 정보
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo) // 새로운 유저의 정보를 넣어줌
    console.log('렌더링 - 3')
  }

  // 현재 바뀌는 부분은 input 창, 바뀌는 부분만 렌더링을 해야하는데 코드 전체도 렌더링되고 있다.
  // 모든 렌더링에 함께 렌더링되는 이슈가 있다.
  function getNum(li){
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
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>회원 명부 작성</button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{getNum(userInfo)}</span>
    </>
  )
}