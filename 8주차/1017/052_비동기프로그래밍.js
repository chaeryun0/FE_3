// 동기 - 순차적
// 비동기 - 비순차적

const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 1000);
console.log(three);

// 아래 코드는?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 0);
console.log(three);

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원

// 우리가 이런 비동기 프로그래밍을 왜 알아야 하고, JavaScript의 실행 구조는 왜 알아야 하는가?

one() // 페이지 로드하고
two() // 서버에서 이미지와 상세 데이터를 받아오고(예 - http://test.api.weniv.co.kr/mall) - 1분
three() // 읽어온 데이터를 뿌려준다
four() // 페이지에 정적 데이터 로드