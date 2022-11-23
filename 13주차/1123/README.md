# npm

> Node Package Manager의 줄임말로 **Node.js 기반 패키지(모듈)들을 모아둔 저장소** <br>
 **moudule: 애플리케이션을 이루는 기본 조각, 쉽게 말해 어떤 물건을 만들기 위해 쓰는 부품*

- Node.js에서 제공하는 내장 모듈도 있으며, 사용자들이 직접 만든 유저모듈도 있다. 
- npm은 이런 모듈(패키지)의 관리를 원활하게 도와준다.
- npm은 웹사이트, CLI, 레지스토리 3가지 요소로 구성되어 있음


```
// 초기설정 명령, 모듈을 다운로드할 수 있음
npm init -y

// 시간을 쉽게 사용할 수 있게 해주는 모듈
npm install moment 
```
```
{
  "name": "프로젝트 이름",
  "version": "프로젝트 버전",
  "description": "프로젝트 설명",
  "main": "app.js(진입점)",
  "scripts": {
    // 프로젝트에서 자주사용하는 명령어(npm run test, npm run start, npm start)
    "hello": "echo hello world!",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [프로젝트참조키워드],
  "author": "제작자 이름",
  "license": "패키지 라이센스",
  "dependencies": {
    // 프로젝트에서 사용하는 모듈
    "express": "^4.17.1",
    "express-validator": "^6.13.0"
  },
    // 프로젝트에서 개발 시에만 의존하는 모듈
  "devDependencies": {
    "nodemon": "^2.0.14"
  }
} 
```
<br> 

# axios 

> 자바스크립트의 fetch 처럼 Promise를 활용하는 **HTTP 비동기 통신 라이브러리**


- HTTP 메서드 지원
    - axios.get(url, conf)
    - axios.delete(url, conf)
    - axios.post(url, data, conf)
    - axios.put(url, data, conf)
    - axios.patch(url, data, conf)

<br>

- 장점
    - 네트워크 상태 체크하여 상황에 따라 연결 여부 결정
    - 인증 지원
    - 보안 토큰 지원
    - 직관적

<br>

## **fetch VS Axios**

1. fetch와 Axios의 가장 큰 차이로, **Axios는 응답을 JSON 형태로 자동 변경해준다.**
2.  **URL에 있는 data를 받아올 때 axios는 data에 값들이 저장되어 있어 바로 접근이 가능**하다. 반면, fetch의 경우 json으로 변환해야 값들을 확인할 수 있다.
3. fetch는 추가 모듈 설치가 필요 없다. Axios는 설치 필요
4. Axios는 요청을 취소할 수 있다.

```
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Product() {
    useEffect(()=>{ 
// axios로 데이터를 가져오면 json 파일로 변경시켜줄 필요가 없음, 바로 데이터 확인 가능
        axios.get('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('axios')
                console.log(res)
                console.log(res.data)
            })
// fetch로 데이터를 가져오면 json 파일로 변환해야 데이터 확인이 가능
        fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending 된다.
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    },[])
    return (
        <div>Product</div>
    )
} 
```
<br>

# React 컴포넌트 만들기 - 구조 분해 할당을 통한 props 전달

``` 
// 기존 

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
``` 
```
function App() {
  return (
    <div>
      <Test {...{one:'hello'}} />
      {/* 처음부터 {} 안에 넣어 구조분해할당 */}
    </div>
  );
}
``` 
``` 
const Parent = () => {
    const [ v, setV ] = useState({
        a: 101,
        b: 'hello',
        c: 'world'
    })

    return (
        <div>
            <Child {...v} />
            {/* 전개구문을 통해 받음 */}
        </div>
    )
}

// a,b,c 변수를 Child에서 구조분해할당으로 받음
const Child = ({a, b, c}) => { 
    return (
        <div>
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
        </div>
    )
}
``` 
