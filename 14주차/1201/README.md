# Form Validation

> **폼에 작성된 데이터를 서버로 전송하기 전에 전송할 데이터들이 올바른 포맷으로 잘 입력 되었는지 확인하는 과정**

### 유효성 검사
- 데이터를 입력하면 브라우저 및/또는 웹 서버는 데이터가 올바른 형식이고 응용 프로그램에서 설정한 제약 조건 내에 있는지 확인한다.
- 클라이언트 측 유효성 검사 : 브라우저에서 수행되는 유효성 검사
- 서버 측 유효성 검사 : 서버에서 수행되는 유효성 검사

```
/* 해당속성을 required가 없는 input과 시각적인 구분을 가능하게 한다. */
input:required {
  border: 5px solid green;
}

/* 올바르지 않은 입력이 이루어진 input을 선택 */
input:invalid {
  border: 5px solid red;
}

/* 올바른 입력이 이루어졌을 때 input을 선택 */
input:valid {
  border: 5px solid blue;
}

input:required:invalid {
  border: 5px solid teal;
}
```

# HTML 속성: pattern

- 양식 컨트롤의 값이 일치해야 하는 정규식을 지정
- 값이 아닌 값이 값 `null`에 의해 설정된 제약 조건을 준수하지 않으면 개체의 읽기 전용 속성이 true가 된다.

```
<!-- []은 선택할 수 있는 문자의 종류를 지정할 수 있다. -->
<input type="text" pattern="[사과배][123]" />

<label for="">한글만 입력이 가능해야합니다.</label>
<!-- [-]은 선택할 수 있는 문자의 범위 지정할 수 있다. -->
<input type="text" pattern="[ㄱ-ㅎ가-힣]" />

<label for=""
  >한글과 숫자만 글자 수 제한없이 입력이 가능해야합니다.</label
>
<!-- *은 글자의 수를 제한하지 않는다. -->
<input type="text" pattern="[ㄱ-ㅎ ㅏ-ㅣ 가-힣 0-9]*" />

<label for="">한글 세글자만 가능합니다.</label>
<!-- {}은 글자의 수를 제한할 수 있다. -->
<input type="text" pattern="[ㄱ-ㅎㅏ-ㅣ가-힣]{3}" />

<!-- 주민등록번호를 입력하세요 -->
<label for="">주민등록번호를 입력하세요.</label>
<!-- {}은 글자의 수를 제한할 수 있다. -->
<input type="text" pattern="[0-9]{6}[\-][0-9]{7}" />

<label for="">이메일을 입력하세요.</label>
<!-- {}은 글자의 수를 제한할 수 있다. -->
<input type="email" pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]*\.[a-zA-Z]*" />

<label for="">전화번호를 입력하세요.</label>
<!-- {}은 글자의 수를 제한할 수 있다. -->
<input type="tel" pattern="(010|016|011)-[0-9]{3,4}-[0-9]{4}" />
```

# Constraint Validation 

> **입력 제약 조건의 유효성을 검사**

- <input>요소에 대한 새로운 의미 유형과 **제약 조건 유효성 검사** 를 추가 하여 클라이언트 측에서 양식 콘텐츠를 쉽게 확인 가능
- 새 속성을 설정하여 JavaScript 없이도 기본적이고 일반적인 제약 조건을 확인할 수 있음
- Constraint Validation API를 사용하여 더 복잡한 제약 조건을 테스트할 수 있음

```
<form action="">
  <label for="txt">숫자 입력 : </label>
  <input type="text" id="txt" required pattern="[0-9]" />
  <button>제출</button>
</form>

<script>
  const inp = document.querySelector("input");
  inp.addEventListener("input", () => {
    console.log(inp.validity);
  });
</script>

// validity 속성으로 접근하면 ValidityState를 확인할 수 있음
// patternMismatch : 패턴 일치 여부
// rangeOverflow & rangeUnderflow : min, max 속성과 관련한 프로퍼티
// 값이 min 보다 큰지 & 값이 min 보다 작은지
// tooLong & tooShort : max length, min length 글자수 제한
// typeMismatch : 타입 일치 여부
// valid : 모든 유효성 검사를 통과했는지 
// valueMissing : 값의 존재 여부
// 이러한 정보들을 자바스크립트 API로 제공받는 것이 constraint validation
```

