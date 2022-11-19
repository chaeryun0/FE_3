# Weniv 쇼핑몰 페이지 컴포넌트화

<img src="https://user-images.githubusercontent.com/112460430/202856346-114f115d-4682-4c79-a351-bf41599be7fd.png" width="40%">
<br>

# 리액트의 정체

- 리액트는 경량화된 오브젝트 <br>
- Virtual DOM (바뀌는 부분만 업데이트) <br>
- Virtual DOM - React Elements (Object 형태로 가벼움) <br>
- 실제로 빠르지는 않음, 때에 따라서는 DOM이 더 빠를 수도 있음

<br>

# 합성 컴포넌트

> 반적인 컴포넌트를 하나 만들고 그 안에 세부 기능을 가지는 컴포넌트를 합성해서 사용 가능 → 컴포넌트를 합성해서 컴포넌트의 재사용성을 높임 <br>
> styled-components를 사용하면 ```npm install styled-components``` 설치 <br>

## 두 개의 모달창 만들기
1. 기존 코드
2. 합성 컴포넌트 - 재사용되는 부분 확인하기
  - 감싸는 태그가 비슷한 경우 공통된 부분을 새로운 컴포넌트로 만들고 이 컴포넌트가 필요한 컴포넌트로 가져와서 사용하는 것 
  - 겹치는 부분을 컴포넌트로 만들어 재사용
3. 합성컴포넌트 - 재사용해보기

<br>

# React Router

```
npx create-react-app my-app --template basic-react
cd my-app
npm install react-router-dom 
// 라우트 설정을 위해 react-router-dom을 설치해주어야함
```

