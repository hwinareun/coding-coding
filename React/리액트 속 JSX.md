`React.createElement`는 가상 DOM 객체를 만들어 주는 함수이나,<br>
HTML 요소가 부모/자식 관계로 구성되면 코드가 지나치게 복잡해질 수 있음.
<br>
위 복잡성을 해결하고자 자바스크립트 언어에 없는 JSX 기능을 언어 확장 형태로 추가.
<br>

***📌 import React from 'react'*** <br>
: 리액트 17 이후 버전부터는 설계를 개선하여 JSX 문이 있더라도 위 임포트 문을 생략할 수 있게 됨.

## JSX(JavaScript XML)
- `React.createElement`호출 코드를 간결하게 하려고 고안한 것으로, 자바스크립트 언어를 확장하는 방식으로 구현됨.

- XML 규약을 준수하지 않으면 오류 발생.
- XML 구조에 중괄호 {}를 사용하여 자바스크립트 코드를 감싸는 형태의 문법을 제공.
    - `<p>{hello}</p>`
    - 중괄호 안 자바스크립트 코드는 반드시 return 키워드 없이 값만을 반환해야 함 => **표현식**

***📌 표현식 expression*** <br>
: return 키워드 없이 어떤 값을 반환하는 코드
<br>
: 1, true, 'hello world!'... 값이 될 수 있는 모든 것.

***📌 실행문 excution statement*** <br>
: return 키워드 없이 어떤 값을 반환하는 코드
<br>
: 1, true, 'hello world!'... 값이 될 수 있는 모든 것.


- JSX 문에서 자식 컴포넌트가 여러개일 때(e.g., 배열)는 반드시 XML 작성 원칙을 준수해야 함. <br>
=> XML 요소는 부모 없이 존재하지 못함.

- XML 관점에서 속성은 모두 string 타입. but, number 타입을 문자열이 아니므로 중괄호로 감싸야 함.
    - `<Person name = 'John' age = {20} />`