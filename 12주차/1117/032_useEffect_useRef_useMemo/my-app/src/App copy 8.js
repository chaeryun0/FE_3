import React, { useState, useEffect } from 'react';

function Time(props) {
  // 초깃값을 실행시킨 시간의 Date을 불러와서 그때의 시,분,초를 담아두고, 변경시킬 수 있는 함수를 옆에 담아둠
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")// 렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주어야 함

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t); // 실행시키면 다시 렌더링 된다. 그런데 아래 함수가 아직 진행중인 상태이므로 코드가 이어서 실행됨
      setHour(t.getHours()); // 실행시키면 다시 렌더링이 된다.
      setMin(t.getMinutes()); // 실행시키면 다시 렌더링
      setSec(t.getSeconds()); // 실행시키면 다시 렌더링
    }, 1000); // 4번씩 더 렌더링되는 것이므로 매우 비효율적, 성능 이슈 발생 
    return () => { // 그렇기 때문에 더이상 렌더링 되지 않게 하기 위해 cleanup 을 사용해 주어야 한다.
			// 컴포넌트가 사라지기 전에 setinterval을 clearinterval 해준다.
      clearInterval(time);
    };
  }, [today]); // 감시할 변수 [today]

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time/>
    </div>
  );
}

export default App;