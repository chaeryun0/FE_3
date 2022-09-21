# 🦁 Code Lion 🦁 일단 만드는 JavaScript

## 1. 로또 번호 추첨기

<image src="https://user-images.githubusercontent.com/112460430/191523307-76d28e7e-8274-4cae-b421-03fa03e0b44f.png" width="50%">


> **1번 ~ 45번 까지의 공 중에서 6개 뽑기** <br>
> 조건 : 1부터 45까지의 수 중 랜덤, 중복되지 않은 수
  
<br>
  
 ```
Math.random() : 0이상 ~ 1미만 임의의 실수 (float)
parseInt() : 소수점은 버리고 정수로 변환 
  
parseInt(Math.random() * 45 +1) : 1부터 45까지의 수 중에서만 뽑기 위해 *45 +1 을 해주고, parseInt를 활용하여 random 수를 정수로 변환
  
.indexOf(값) : 함수를 호출한 배열에서 parameter 값이 있는 경우 해당 index를 반환하고, 없는 경우 -1을 반환 
               중복되지 않는 6개의 수를 배열에 저장해야하므로 해당 함수를 활용해 -1이 반환되는 경우에만 배열에 수를 입력

for문 : 특정 횟수만큼 어떤 동작을 반복할 때
while문 : 특정 횟수 + 특정 조건만큼 반복할 때
  
.length : 배열의 길이 (배열 안에 몇개의 값이 있는지 확인 가능)

.sotr() : 배열 값을 사전순으로 정렬 (맨 앞의 숫자를 기준으로 1, 11, 2, 22, 3, 33)
  
.sort((a, b) => a - b) : 오름차순 정렬
.sort((a, b) => b - a) : 내림차순 정렬
 
  ```
  
  
 ## 2. 자소서 글자수 계산기
  
  ![ezgif com-gif-maker](https://user-images.githubusercontent.com/112460430/191529221-3c20b429-2247-4f09-bf75-37a17028e979.gif)

  > **textarea에 입력되는 글자수를 계산** <br>
  > 조건 : 키보드가 눌리면 글자수 세기, 최대 글자수 제한 (200자)

  ```
  - 이벤트 핸들링 : 이벤트가 발생할때 - 해라 onkeydown='함수명()'
    <textarea class="form-control" rows="3" id="jasoseol" onkeydown="counter();"> 
    -> counter() 함수를 지정해 키보드가 눌릴 때마다 글자수 세기를 반영 
  
  - content.substring(0, 200)
    최대 글자수를 제한하기 위해 substring() 함수를 활용, content의 length가 200이 넘으면 입력한 텍스트를 사라지게 한다.
  ```
  
  ## 3. 미니 스타크래프트
      
 <img src="https://user-images.githubusercontent.com/112460430/191532509-44c0fed9-0f32-4b84-9824-a3b22cb1b238.gif" width="35%">

 > **드론 이미지를 클릭하면 벙커에 공격을 하게되고, 벙커의 HP가 1씩 줄어든다.** <br>
 > 조건 : 드론 클릭 시에만 공격, 공격 후 벙커의 HP 줄어들게 하기, 벙커의 hp가 0이 되었을 때 공격 이미지가 사라지도록 하기
 <br>     
      
```   
익명 함수 : 함수를 정의하는 과정 없이 바로 함수 호출 가능

$('#drone').click(function(){
  console.log('공격')
}
👉🏻 id가 drone인 요소를 클릭하면 동작, click() 함수 내부에 익명 함수를 선언하여 드론이 클릭되었을 때의 동작을 제어
```
```      
$('#drone').click(function(){
  $('#spit').fadeIn();
  $('#spit').animate({left: '+=250'});
});  
👉🏻 css요소인 left를 250씩 늘려 공격 이미지를 오른쪽으로 이동하는 것처럼 보이도록 구현
```
```
if(hp == 0) {
  $('#bunker').fadeOut();
}
👉🏻 조건문을 사용해 hp가 0일때 벙커를 fadeOut
```
      
## 4. 기념일 계산기
      

> **만난 일수 구하기, 기념일까지 몇일 남았는지 구하기, 사귄 날로부터 천일이 되는날 구하기, 오늘부터 천일까지 얼마나 남았는지 구하기**

```
 1. Date 객체 생성
var now = new Date();

2. 연도를 가져오는 메서드 .getFullYear()
console.log(now.getFullYear());

3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
console.log(now.getMonth());

4. 일 정보를 가져오는 메서드 .getDate()
console.log(now.getDate());

5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
console.log(now.getTime());

6. 특정 일의 Date 객체 생성
var christmas = new Date('2020-12-25');
console.log(christmas);

7. 특정 ms의 Date 객체 생성
var ms = new Date(1000);
console.log(ms);     
```
   
