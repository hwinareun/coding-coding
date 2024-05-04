express
========
: http보다 간결한 코드로 서버 열 수 있음.<br>

`npm install express`: express 다운로드.

```jsx
const express = require('express')
// express 라이브러리를 require 하여 express 객체를 생성.
const app = express()
// express 객체를 사용해 새로운 app 객체를 반환.

...

app.listen(8080, function(){
  console.log("포트 8080 으로 서버 대기 중...")
})
// listen(포트 번호, 실행할 코드(생략가능))
// 서버를 띄우고 클라이언트의 요청을 기다리는 함수.
```
---

### GET
: 원하는 항목에 대한 내용을 url로 요청(GET)하고 서버로부터 원하는 페이지를 보여줌.
```jsx
      //(요청 url, 요청을 처리하는 콜백함수)
 app.get('/', function(req,res){
  // '/' <== 루트 경로.
  // request(요청), reaponse(응답)
  // req: 웹 브라우저에서 요청 시 정보들이 모두 들어옴.
  // res: 서버가 다시 웹 브라우저로 데이터 전송 시 사용.
    res.send('hello!')
  //요청한 웹 브라우저로 문자열 형식의 메시지를 응답함.
})
```
---
<br>

***sendFile()***<br>
- send 함수를 사용하면 요청한 웹 브라우저로 문자열 메시지를 보내게 되는데, <br> 내용이 길어질수록 코드의 가독성이 매우 떨어짐.<br>
- sendFile 함수를 이용해서 함수의 전달인자로 경로 및 파일 이름을 전달하면 <br> 해당 파일의 내용이 요청한 웹 브라우저에 전달됨.

```jsx
// sendFile(보낼 파일 경로)
app.get('/', function(req,res){
  res.sendFile(__dirname + 'index.html');
})
```
