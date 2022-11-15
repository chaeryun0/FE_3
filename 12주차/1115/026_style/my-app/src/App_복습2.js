import styled from 'styled-components'

// css로 작성할 수 있는데 컴포넌트인 One은 태그로 쓸 수 있음, 그래서 styled-components라고 부르는 것
const One = styled.div`
    color: red;
`
const Two = styled.div`
    color: green;
    font-size: ${(props) => props.size + 'px'};
`
// styled의 div가 메서드이기 때문에 props로 값을 전달할 수 있음
// const Two = styled.div`
//     color: green;
//     font-size: ${(size) => size + 'px'}; 구조분해항당 가능
// `

const Three = styled.div`
    color: ${(옵션) => 옵션.option === '하나' ? 'red' : 'pink'};
`

function App(){
    return (
        <>
            <One>hello</One>
            <Two size={32}>world</Two> 
            <Three option={'하'}>hello</Three>
        </>
    )
}
// props의 size 값으로 32가 들어가고 문자열로 반환

export default App;