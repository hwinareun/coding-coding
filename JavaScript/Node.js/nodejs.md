---
title: JavaScript와 Node.js
date: 2024-04-29 00:50:00 +09:00
categories: [Studying, Back-end, Node.js]
tags: 
  [backend, javascript, js, nodejs]
---

JavaScript
======================================================
: 정적인 엡 페이지를 동적으로 만들기 위해 만들어진 프로그래밍 언어.
<br>

### ECMAScript: 표준화된 자바스크립트.
: ES6이 완성되면서 추가된 표준 문법들이 기존 자바스크립트의 잠재적 문제들을 <br> 깔끔하게 해결하고 가독성 및 유지 보수성의 문법들도 상당수 개선되었음.

<br><br><br>

node.js
======================================================
: 브라우저에서만 동장하던 자바스크립트를 브라우저 이외 환경에서도 동작시킬 수 있는 자바스크립트 런타임 환경.<br>
: 이벤트 기반, 논블로킹 I/O 모델을 사용해 가볍고 효율적.

- `node -v`: node.js 버전 확인.<br>
- `node`: node 실행. 자바스크립트 코드를 입력하여 <br> 코드를 수행할 수 있는 환경(REFL(Read Eval Print Loop))이 됨.
  ```
  node test.js // node로 test.js 코드 실행.
  ```

### npm(node package manager)
: node.js 기반에서 개발된 오픈 소스를 모듈로 올려놓은 일종의 앱스토어 같은 저장소.

**모듈(module)?**
: 프로그램 내부를 기능별 단위로 분할한 부분.<br>
e.g., express 같은 모듈을 사용하고 싶다면 아래 명령어로 다운로드하여 사용할 수 있음.
```
npm install express
```