***📌 문서 객체 모델(DOM)*** <br>
: 웹 브라우저는 HTML 형식의 문자열을 화면에 출력할 때 문자열을 분석(parsing)하여 어떠한 특별한 형식의 자바스크립트 객체 조합으로 변경. <br>
: 위 자바스크립트 객체는 모두 자신의 특징에 맞는 인터페이스를 구현, 이 인터페이스를 총칭하여 DOM 이라고 함.

- 인터페이스: 대부분의 프로그래밍 언어에서 객체가 제공해야 할 여러 기능을 구체적으로 정의한 규약.

- `document.createElement`: 웹 브라우저가 DOM의 다양한 인터페이스를 각각의 목적에 맞게 구현한 객체로 생성할 수 있도록 하는 메서드. => HTML DOM 요소를 생성해 주는 역할.
    ```jsx
    // let element = document.createElement(tagName[, options]);

    let newDiv = document.createElement("div")
    ```

- 렌더링(rendering): DOM 객체를 웹 브라우저 화면에 나타나게 하는 것.