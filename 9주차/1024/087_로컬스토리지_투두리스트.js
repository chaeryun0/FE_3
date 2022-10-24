// 재료 만들기
const main = document.querySelector(".artcl_main");
const userTask = main.querySelector('header input');
const addBtn = main.querySelector('header button');
const listTodo = main.querySelector('.list_todo');

// 할일 추가 이벤트 // 버튼을 누르면 등록
addBtn.addEventListener('click', createListItem); // createListItem 함수의 이름을 적어주면 클릭시 해당 함수가 실행

// 경고 메세지 생성 
const message = document.createElement('strong');
message.style.display = 'none';       // 기본적으로 경고창이 보여지지 않도록
message.classList.add('txt_invalid'); // color: red
main.appendChild(message);            // message 추가 // <article> 요소의 가장 마지막 자식 요소에 <strong> 추가
userTask.addEventListener('input', () => { 
    message.style.display = 'none';   // 메시지 초기화
})

// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');
downloadBtn.textContent = '리스트 다운로드';
main.appendChild(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);

// 투두를 저장할 배열 // 로컬스토리지에 있는 데이터를 가져옴
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];      // or 연산자가 반환하는 값 = 첫번째 true값
// 로컬스토리지에 'tasklist'가 있다면 첫번째 데이터를 가져오고 아니라면 []빈 배열을 반환 // 초기화 해주는 조건식


// 초기 화면에서 저장되어있는 데이터를 가지고 목록을 생성
if (tasks.length > 0) {
    tasks.forEach((task) => {
        genItem(task.val, task.checked);
    });
    showDownload();
}

function createListItem() {
    const inpVal = userTask.value;

    if (inpVal) {
        // 할일을 저장하는 객체를 생성 // 객체화
        const tempTask = {
            val: inpVal,    // 입력받은 인풋 값
            checked: false // 체크를 했는지 안했는지 상태를 checked 프로퍼티에 저장 
        };

        // 할일 목록에 새로운 할일을 저장
        tasks.push(tempTask);

        // 목록 요소를 생성 (리스트를 작성하고 등록하면 리스트에 떠야함)
        genItem(inpVal, false);

        // 할일 데이터를 localStorage 에 저장
        saveTasks();

        // 다운로드 버튼 노출 함수 (목록이 없으면 리스트 다운로드 버튼이 나타나지 않음)
        showDownload();


    } else {
        errorMsg('내용을 작성해주세요');
    }
}

    // 목록 요소를 생성
    function genItem(val, complete) {
    const li = document.createElement('li'); // li에서 요소 생성, 목록에 들어감
    li.textContent = val;                   // li안에 들어가는 텍스트는 인풋에서 전달받은 val 
    listTodo.appendChild(li); 

    // 인풋 입력값 초기화
    userTask.value = '';

    // 만약 수행한 일이라면
    if (complete) {
        li.classList.add('done');
    }

    li.addEventListener('click', () => {
        li.classList.toggle('done');

        // 할일 데이터의 업데이트 함수
        buildTasks();
    })

    // 삭제 버튼 만들기
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(btn);

    btn.addEventListener('click', () => {
        li.remove();

        // 할일 데이터의 업데이트 함수
        buildTasks();

        // 다운로드 버튼 노출 함수
        showDownload();
    })
}

// localStorage 에 할일 목록을 저장하는 함수
function saveTasks() {
    localStorage.setItem('tasklist', JSON.stringify(tasks));
}

// 할일 정보를 업데이트 하는 함수 (할일을 클릭했을 때, 혹은 할일을 제거했을 때)
function buildTasks() {
    tasks.length = 0; // 업데이트 하기 전에 기존 데이터를 초기화
    const curList = listTodo.querySelectorAll('li');

    // 할일 정보 목록을 재생성
    curList.forEach((el) => {
        const tempTask = {
            val: el.textContent,
            checked: false
        };

        if (el.classList.contains('done')) {
            tempTask.checked = true;
        }

        tasks.push(tempTask);
    })

    saveTasks();

}


// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
    const curList = listTodo.querySelectorAll('li');

    if (curList.length > 0) {
        downloadBtn.style.display = 'block';
    } else {
        downloadBtn.style.display = 'none';
    }
}



// 경고 메세지 활성화 함수 // 아무것도 입력하지 않았는데 등록 버튼을 누른 경우
function errorMsg(msg) {
    message.style.display = 'block';
    message.textContent = msg; 
    userTask.focus(); // 인풋으로 포커싱
}


function downloadFile() {
    let temp = '<나의 할일 목록>\n\n';

    const curList = listTodo.querySelectorAll('li');

    curList.forEach((el) => {
        if (el.classList.contains('done')) {
            temp += '완료 - ';
        }
        temp += `${el.textContent}\n`;
    })

    let element = document.createElement('a');

    element.setAttribute('href', `data:text/plain;charset=utf-8,${temp}`);

    element.setAttribute('download', 'todoList.hwp');

    // 클릭 가능한 요소라면 클릭을 시뮬레이션
    element.click();

    // 메모리상에서 a 태그 제거
    element = null;
}