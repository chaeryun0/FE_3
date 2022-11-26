import React, { useState } from 'react';

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


function App() {
    return (
        <div>
            <Parent/>
        </div>
    );
}

export default App;