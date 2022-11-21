import { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

	console.log("렌더링이 됩니다..?")
  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t); // setToday로 지금의 현재 시간을 업데이트해줌
    }, 1000);
    return () => {
      clearInterval(time); // useEffect에서 여러 함수가 파생되면, 다음 렌더링에서 그 전에 있던 렌더링을 모두 청소해주는 역할 
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;