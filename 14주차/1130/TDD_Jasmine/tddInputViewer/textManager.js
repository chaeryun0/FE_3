// 내가 사용자가 입력한 값을 관리하는 클래스 파일

class TextManager {
    // 데이터 초기화
    constructor() {
        this.value = { data: "Hello Lions!" };
    }

    getValue() {
        return this.value.data;
    }

    // 안에 있는 값을 바꿔줌
    setValue(newValue) {
        this.value = newValue;
    }
}