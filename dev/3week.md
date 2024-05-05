# # 데브코스 3주차(04/22 ~ 04/26)
<br>
<br>

# 콜백함수 
: 함수의 매개변수로 변수 또는 값을 전달하는 것이 아니라, 함수를 전달함.
```jsx
function hwi(){ console.log("hwihwi") }
setTimeout(hwi, 2000) // 콜백함수
```
---
<br> <br> 

자바스크립트 함수 4가지 종류
===

```jsx
function sum1(a,b){return a + b}

//모듈화된 함수
let sum2 = function(a,b){return a + b}

// 화살표 함수1 (arrow function)
let sum3 = (a,b) => {return a + b}

// 화살표 함수2
let sum4 = (a,b) => a + b
```
---
<br>
<br>


자바스크립트 객체, 배열 비구조화(구조분해)
===

: 객체의 프로퍼티 수, 배열의 요소 수가 많아지면 코드 가독성이 떨어지고 유지보수 힘들어짐.<br>
=> 비구조화 할당은 배열이나 JS객체의 프로퍼티를 해체하여 그 값을 개별 변수에 담을 수 있게 해주는 자바스크립트 표현식.
```jsx
// JS객체(JSON)의 비구조화
...
// https://.../watch?v=hwihwi&t=328s
const {v,t} = req.query
res.json({
    video: v, //hwihwi
    timeline: t //328s
})
```
```jsx
// 배열 비구조화
const array = [1,2,3,4]
const [num2, ,num3] = array

console.log(num2) // 1
console.log(num3) // 3
```

---
<br>
<br>

**API(application programming Interface)**
===
: 응용 프로그램 사이의 소통 방법. <br>
: **(Interface)** 서로 다른 두 가지 사이에 소통을 할 수 있게 해주는 접점. 

---

**REST(REpresentational State Transfer) API**
===
: (REST) 요청된 주소만 보고 어떤 내용에 관한 요청인지 예상할 수 있게 하는 형식.

### REST API 규칙

- 대문자 금지, 소문자 O
- 언더바(_) X, 하이픈(-) O
- 마지막에 / 포함 X
- **행위를 포함하지 않음** ⇒ 목적을 포함하지 않음.
- 파일 확장자 포함 X
- 복수형 사용.

e.g., /select_all_products -전체 상품 “조회” ⇒ “GET” /products


## HTTP

: 인터넷 상에서 공유 • 전달 하고 싶은 모든 것들은 다 http에 넣어서 보내야 함.

### **http 프로토콜 템플릿**

- HEAD: 통신 상태가 어떤지, 응답이 어떤 형태인지
- BODY: 웹 페이지 화면에 뿌려질 내용
    - 전달해줄 데이터 / 화면 ...
    - 이 데이터 좀 줄래? + “목적” <br>
        e.g.,  전체 상품 보고 싶어 = 전체 상품 리스트 + “조회”<br> 이 상품 등록 해줘 = ___ + “등록”

### HTTP method
: http = 규약 = 정해둔 용어가 있다.<br>
- 생성(등록): POST 
- 조회: GET
- 수정: PUT(덮어쓰기), PATCH 
- 삭제: DELETE 
- HEAD, OPTIONS, CONNECT, TRACE …

cf. patch: 부분 수정 ex. 마이 페이지: 연락처, 이메일, 집주소

---

## URL(Uniform Resources Locator)
: 인터넷 상에서 웹 페이지가 어디있는지 위치를 알려주는 것 뿐 아니라, <br> 데이터 연산 해달라고 서버에 요청을 보내는 방법.  ⇒ 웹 페이지 주소.

<br><br>

**Node.js**
===
- 싱글 스레드: 요리사가 한명! 주문이 계속 밀려와도, 한명이 어떻게든 해야 함. 
- 이벤트 기반: 주문이 들어와야만 일을 함.
- 논블로킹 I/O: 요리를 순차적x, 중간중간 비는 시간이 있으면, 다른 요리를 함.

*cf. 스프링도 기본적으로 싱글 스레드 구조.*
<br>

### 프레임워크
: 내가 만들고 싶은 서비스를 구현하는 데 필요한 모든 일을 틀 안에서 하는 것.<br>(필요해보이는 라이브러리(모듈)를 미리 다 틀 안에 넣어둠)

### NPM(Node Package Manager)
- `npm install 모듈명`, `npm i 모듈명`:  외부 모듈을 사용할 수 있도록 자동으로 설치.
- `npm uninstall 모듈명`: 모듈 삭제.
- `npm i 모듈명 -g`(global): 내 컴퓨터에 있는 모든 프로젝트에 해당 모듈을 설치 => 추천X!

<br>

## **Express**
: express 모듈 설치: `npm i express`<br>
: http보다 간결한 코드로 서버 만들 수 있음.
```jsx
const express = require('express')
const app = express()

 // GET 메서드로 '/hwi'이 날아오면 매개변수로
 // 매개변수로 전달받은 콜백 함수를 호출하여 서버에 셋팅.
 app.get('/hwi', function(req,res){
    res.send('hwi!')
})

app.listen(1234) //서버 셋팅: 포트 넘버
```
---

<br>

## **JSON(javascript object notation)**
: 자바스크립트 객체 표기법으로 데이터를 쉽게 교환, 저장을 위한 텍스트 기반의 데이터 교환 표준.

***객체 ?*** 키(key)와 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합.
```jsx
app.get('/juice/mango', function(req,res){
    res.json({
        name: "mango juice",
        price: 5600,
    })
})
```
```jsx
let nodejsbook = {
    title: "node.js book",
    price: 18500,
    description: "node.js"
}

app.get('/books/1', function(req,res){
    res.json(nodejsbook)
})
```

<br>

```jsx
// parameters
app.get('/books/:n', function(req,res){
    res.json({
        num: req.params.n
    })
})
```
---

<br>
<br>

## **Map(String)**
```jsx
let db = new Map()

// db.set(key, value) 
// 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(1, "macBook")
db.set(2, "ipad")

console.log(db) // Map(2) {size: 3, 1 => macBook, 2 => ipad}
console.log(db.get(1)) // macBook
```
### parseInt: 문자열을 숫자로 바꾸는 방법
```jsx
let num = parseInt("10") 
console.log(num) // 10
```
---
<br><br>

## **Map(object)**
: string(문자열)만 담던 map에 object(객체) 담기.
```jsx
let db = new Map()
let macBook = {
    productName: "macBook",
    price: 3000000
}
db.set(1, macBook)

...

console.log(db.get(1)) 
// {productName: 'macBook', price: 3000000}
```
---
<br><br>

## **express + 객체**
```jsx
app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    if(db.get(id) == undefined){
        res.json({
            massage: "not found"
        })
    } else {
        product = db.get(id)

        // 객체에 값 추가하는 방법 1.
        // product.id = id

        // 객체에 값 추가하는 방법 2.
        product["id"] = id

        res.json(product)
    }
})
```
---
<br><br>

**Express**
===
: 웹 서비스를 만드는 데 필요한 모든 라이브러리들을 틀 안에 넣어두는 하나의 프레임워크. <br>
: express 관련 사이트: https://expressjs.com/ko/

### <u>express-generator</u>
: 프레임워크에 필요한 package.json과 기본 구조를 만들어줌.
1. `npm install express-generator -g`: express 전역 설치. => 오류 생김. 
=>  `sudo npm install express-generator -g`
2. `express`: express 관련파일들 생성.<br>
  : bin/www : 서버를 실행하는 스크립트.<br>
  : app.js : 서버 역할. 미들웨어 관리. <br>
  : routes : 라우팅 관리.
  <br> ...
3. index.js 파일 실행.
   => `Error: Cannot find module 'express'`
    : express를 전역(-g)이 아닌 프로젝트 단위로 설치를 해서,<br>
    express는 없고 express를 활용해서 할 수 있는 <br> 프로젝트 껍데기(express-generator)만 있는 상태임.

4. `npm install express`: express만 다운받아서 오류 생김. <br>
  `npm install`: package.json dependencies에 있는 것들 전체 다운로드. 

5. `npm start`: app.js 파일 실행.
---






