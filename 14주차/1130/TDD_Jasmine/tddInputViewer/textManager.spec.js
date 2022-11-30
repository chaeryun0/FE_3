// 5가지를 테스트 해봐야함

describe('텍스트 매니저 테스트입니다.', () => {
  // textManager 인스턴스를 생성
  const textManager = new TextManager();
  
  // it 함수 : 함수의 테스트 유닉, 사용자 텍스트 값을 전달
  it('텍스트 값을 전달합니다.', () => {
      const initValue = textManager.getValue(); 
      expect(textManager.getValue()).toBe(initValue);
  }) // expect() 안에는 실행 함수의 리턴값이 들어간다. 이 값이 initValue 값과 같아야함
    // expect : 기대식, 실행할 함수의 결과값을 인자로 전달함
    // toBe 함수 : 매쳐 함수, 내가 기대한 결과가 일치하는지 판단하는 함수

  // 텍스트 값을 수정
  it('텍스트 값을 수정합니다.', () => {
      const testValue = { data: "Hello Zebras!" };
      textManager.setValue(testValue); // 아직 값이 없으므로 값을 넣어줘야함
      // textManager 값이 제대로 바꼈는지 확인하려면? 기대식이 필요

      expect(textManager.getValue()).toBe(testValue.data); // data는 "Hello Zebras!"
  })
})