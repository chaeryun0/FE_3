// 사용자가 입력한 값을 화면에 하나하나 보여주는 클래스 파일
class ViewManager {
  // 첫번째 인자로 textManager 클래스(사용자가 입력한 값을 관리)를 전달받음
  // 두번째 인자로 options 에는 값을 가져와야하는 요소와 값을 뿌려줘야 하는 요소 2가지가 들어감
    constructor(textManager, options) {

      // 예외 처리 해주기
        if (textManager.constructor !== TextManager) {
            // textManager 클래스의 인스턴스가 맞는지 확인
            // throw Error : 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료
            throw Error('textManager 객체를 전달해야 합니다!');
        }
        
        // 두번째 인자 예외 처리(텍스트 뿌려줄 요소, 어떤걸 눌러야 뿌려줄지 아니까(버튼 요소), 텍스트를 받아올 요소)
        if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
          // 셋 중에 하나라도 false면 경고 메시지
            throw Error('필요한 요소중에 빈값이 존재합니다.');
        }

        // 각각의 값들을 할당
        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        // 버튼을 클릭하면 changeValue()함수를 실행
        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    // textManager가 관리하는 값을 변경헤줌
    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    // 사용자가 보여주는 화면을 변경시켜줌
    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }

}