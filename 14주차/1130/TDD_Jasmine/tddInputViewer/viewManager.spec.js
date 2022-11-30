// 예외처리 확인중
// describe 함수 : 테스트할 유닛들의 모음
describe("클릭 이벤트 및 뷰를 담당하는 클래스입니다.", () => {
  // it 함수 : 함수의 테스트 유닛, 첫번째 인자로 함수의 설명, 두 번째 인자로 테스트할 함수를 전달
  // 현재 초기화를 it 함수 안에서 진행하고 있는중
  it("viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.", () => {
    const textManager = null; // 일부러 실패를 시킴, 에러를 확인하기 위해서
    const btnEl = document.createElement("button");
    const viewerEl = document.createElement("h2");
    const inpTxt = document.createElement("input");

    // 현재 testManager에 null을 넣은 상태에서 전달하고 있기 때문에 에러를 반환해야함
    // ViewManager 생성자 함수가 실행될 때 testManager의 인스턴스 값이 안들어갔다고 봐야함
    const actual = () =>
      new ViewManager(testManager, { btnEl, viewerEl, inpTxt });
    
    // expect : 기대식.. 실행할 함수의 결과값을 인자로 전달
    // toBe 함수 : 매치 함수입니다. 내가 기대한 결과가 일치하는지 판단하는 함수
    expect(actual).toThrowError; // actual을 던졌을 때 에러를 발생하는지 체크
  });


  it("viewManager의 인자로 HTML 요소들이 잘 전달되는지 확인합니다.", () => {
    const textManager = new TextManager(); // null을 넣으면 안됨, 인스턴스 생성해서 넣어줘야함
    // ViewManager에서 전달받은 2가지 인자 중에 options가 제대로 들어갔는지 확인해야하기 때문에 
    // textManager애 값이 들어가 있어야 한다.
    // 이번엔 textManager가 아닌 나머지에 null을 넣어줌
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

    expect(actual).toThrowError();
  });

  const textManager = new TextManager(),
    btnEl = document.createElement("button"),
    viewerEl = document.createElement("h2"),
    inpTxt = document.createElement("input"),
    viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
  
    it("click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인합니다.", () => {
    
    // spyOn: 특정 객체의 메서드를 감시
    spyOn(viewManager, "changeValue");
    btnEl.click();

    // toHaveBeenCalled: 함수가 과거에 호출된 적이 있는지 확인
    expect(viewManager, changeValue).toHaveBeenCalled();
  });

  it('changeValue 함수를 통해 updateView 함수가 호출되는지 확인합니다.', () => {
    // spyOn: 특정 객체의 메서드를 감시
    spyOn(viewManager, 'updateView'); // viewManager 함수에 있는 updateView를 감시
    viewManager.changeValue(); 
    expect(viewManager.updateView).toHaveBeenCalled();
  }) // toHaveBeenCalled: 함수가 과거에 호출된 적이 있는지 확인

});