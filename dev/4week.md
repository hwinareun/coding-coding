# # 데브코스 4주차(04/29 ~ 05/03)
<br>
<br>

# 비교 연산자: 동등연산자(==) vs 일치연산자(===)
```jsx
// 자료형과 상관없이 값을 비교 // true
if( 1 == "1"){
    console.log("true")
} else {
    console.log("false")
}

// 자료형까지 포함해 값을 비교 // false
if( 1 === "1"){
    console.log("true")
} else {
    console.log("false")
} 
```

# 배열 순회문
## foreach()
: 배열을 순회해서 처리하는 데 사용되는 메서드.
```jsx
arr.forEach(function(currentValue[, index[, array]]){
}[, thisArg])
```

- (배열 활용)

    ```jsx
    const arr = [1,4,3]

			// 콜백함수: 객체(또는 배열)에서 값을 하나 꺼낸 다음 
			//      매개변수로 그 요소를 전달하여 호출되는 함수.
    arr.forEach(function(a,b,c){
				// (data, index, array)
				// (value, key, object)
	    console.log(`a: ${a}, b: ${b}, c: ${c}`)
				    // a: 1, b: 0, c: 1,4,3
					// a: 4, b: 1, c: 1,4,3
					// a: 3, b: 2, c: 1,4,3
    })
    ```
- (Map 객체 활용)
    ```jsx
    let map = new Map()

    map.set(2, "two")
    map.set(5, "five")
    map.set(3, "three")

    map.forEach(function(a,b,c){
	    console.log(`a: ${a}, b: ${b}, c: ${c}`)
				// a: two, b: 2, c: [object Map]
				// a: five, b: 5, c: [object Map]
				// a: three, b: 3, c: [object Map]
    })
    ```

## map()
: 배열을 순회해서 처리한 새로운 배열을 반환하기 위한 메서드.
```jsx
arr.map(function(currentValue[, index[, array]]){
}[, thisArg]);
```
```jsx
const arr = [1,4,3]

const forEach_Arr = arr.forEach(function(a,b,c){ 
    return (a*2)
})

const map_Arr = arr.map(function(a,b,c){ 
    return (a*2)
})

console.log(`forEach: ${forEach_Arr}, map: ${map_Arr}`)
// forEach: undefined, map: 2,8,6
// map은 새로운 arr를 반환.
```
---
<br><br>

# *리팩토링(refactoring)?*
: 이해하기 쉽게, 성능을 높이기 위해, 안정성을 위해 
⇒ 결과의 변경없이 코드 내부(구조)를 변경하는 것.<br>
- 에러(문제점)이 n회 발견되었을 때, 리팩토링을 해야 함.
- 리팩토링을 하면서, 에러를 발견할 수 있음.
- 기능을 추가하기 전
- 코드 리뷰할 때
- but, 배포 및 운영 직전에는 절대로 코드 수정이 일어나선 안됨!
---

# HTTP 상태 코드
: HTTP(인터넷 상에서 통신할 때 사용하는 규약) 안에 작성되어서 들어가는 “상태”
- 2**: 성공
    - 조회/수정/삭제 성공: 200
    - 등록 성공: 201
- 4**: 클라이언트 잘못
    - 요청한 연산(처리)을 할 때 필요한 데이터(req)가 덜 왔을 때: 400
    - 찾는 페이지 없음(url에 맞는 api없음): 404
- 5**: 서버 잘못
    - 서버가 죽었을 때(크리티컬한 오류를 맞았을 때): 500

---
<br><br>

# **postman**

: 개발한 API를 테스트하고, 테스트 결과를 공유해 API 개발의 생산성을 높여주는 플랫폼

> download: https://www.postman.com/downloads/

: workspaces 선택.
⇒ 원하는 메서드(GET, POST...) 선택 후 VSC에서 파일 구동.

⇒ 메서드 옆에 링크 적은 후(e.g., localhost:1234/test) send.

![image](https://github.com/hwinareun/coding-coding/assets/165121326/9d412285-332c-40ce-8bd1-44c32f003b9e)

---
<br><br>

# HTTP Method: POST
: url 주소에 데이터가 노출되지 않음.<br>
: 중요한 데이터(e.g.,개인정보)를 서버로 전달할 때 사용.<br>
cf. ***get***; 요청 시 필요한 데이터를 url에 주소에 담아 전송.
```jsx
app.use(express.json())
// 미들웨어 이용.
// body에 숨겨져서 들어온 데이터를 화면에 나타냄.

app.post('/hwi', (req,res) => {
	res.json({
		msg: "post!!"
	})
})
```

# 실습: API 설계
## API설계(URL, Method)

### <u>POST</u>
- (생성:POST) (/youtubers)
    - req: body <= {channelTitle, sub = 0, videoNum: 0}
    - res: "name님, 가입을 환영합니다!"
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/eb349582-e709-4934-a8e2-de444c1f16bb)
    ---

### <u>GET</u>
- (개별 조회:GET)(/youtubers/:id): :id로 map에서 객체를 찾아서정보를 뿌림.
    - req: params.id <= map에 저장된 key값을 전달.
    - res: map에서 id로 객체를 조회해서 전달
- (전체 조회:GET)(/youtubers)
    - req: X
    - res: map을 전체 조회
    ```jsx
    app.get('/youtubers', (req,res)=>{
	    let youtubers = {}
	    db.forEach((youtuber)=>{
		    youtubers[youtuber.channeltitle] = youtuber
	    })
        res.json(youtubers)
    })
    ```
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/4c308e31-3824-479b-a244-105e6a083288)
    ---

### <u>DELETE</u>
- (삭제:DELETE)(/youtubers/:id) ⇒ URL이 똑같아도 다른 HTTP 메소드라 다른 것으로 인정
    - req: params.id
    - res: "channeltitle님, 계정이 삭제되었습니다."
    ```jsx
    app.delete('/youtubers/:id', (req,res) => {
	    let {id} = req.params
	    id = parseInt(id)
	    let youtuber = db.get(id)
	
	    if(youtuber == undefined){ // 예외 처리
		    res.json({
			    msg: `${id}번의 채널 존재하지 않음`
		    })
	    } else {
			const channeltitle = youtuber.channeltitle
			db.delete(id)
			res.json({
				msg: `${channeltitle}님, 계정이 삭제되었습니다.`
			})
		}
    })
    ```
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/22a5923d-17c6-417e-adaa-d983195d7643)
    ---

- (전체 삭제:DELETE)(/youtubers)
    - req: X
    - res: "모든 계정이 삭제되었습니다."
    ```jsx
    app.delete('/youtubers', (req,res)=>{
        if(db.size >= 1){ // db에 값이 1개 이상일 경우
            db.clear()
            msg = "계정이 모두 삭제되었습니다."
        } else{ // db에 값이 없는 경우
            msg = "삭제할 계정이 없습니다."
        }
        res.json(msg)
    })
    ```
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/123ed982-d2d3-408e-8f63-b374c7422db3)
    ---

### <u>PUT</u>
- (개별 수정: PUT)(/youtubers/:id)
    - req: params.id, body <= channeltitle
    - res: "수정완료."
    ```jsx
    app.put('/youtubers/:id', (req,res) => {
        let {id} = req.params
        id = parseInt(id)

        let youtuber = db.get(id)
        let old_title = req.body.channeltitle
        if(youtuber == undefined){
            res.json({
                message: `${id}번의 채널은 존재하지 않음`
            })
        } else {
            let newTitle = req.body.channeltitle

            youtuber.channeltitle = newTitle
            db.set(id, youtuber)
            res.json({
                message: `채널명 수정 완료: ${old_title}에서 ${newTitle}로 변경`
            })
        }
    })
    ```
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/eaecb05a-1671-4fcb-99eb-85354fd0c90b)
    ---
<br><br>

# Handler(핸들러)
: HTTP request에 의해 자동으로 호출되는 메서드.<br>
: Node.js의 경우 콜백함수 ⇒  app.HTTPMethod(path,핸들러)

```jsx
// 콜백함수가 핸들러.
app.get("/", function(req,res){
	res.json("handler")
})
```
cf. 스프링에서는 컨트롤러라는 파일 안에서 사용.
---
<br><br>

# JSON array
: 여러 개의 JSON Object들이 모인 것이 JSON array로 대괄호([])로 둘러싸인 부분.<br>
: JSON을 key가 없는 배열 형태로 나타내 인덱스별로 나누어 저장하고 접근함.<br>
: 인덱스로 접근할 수 있기 때문에 순서 구분됨.

cf. [ ]로 감싸져 있으면 JSON Array, { }로 감싸져 있으면 JSON Object.<br>
(JSON object: key로 접근할 수 있어 순서 구분되지 않음.)
```jsx
const students = [
    {id: 1, name: "mark"},
    {id: 2, name: "harry"},
    {id: 3, name: "alice"},
    {id: 4, name: "jane"}
]

// 전체 조회
app.get('/students', (req,res)=>{
    res.json(students) 
    // json 모양으로 생긴 array 출력.
})

// 개별 조회
app.get('/students/:id', (req,res)=>{
    let id = req.params.id
    // id와 student의 id가 같게 만드는 방법(1)
    // let student = students[id-1]
	// (js는 알아서 자료형을 판단하여 계산해 가능한 방법)

    // id와 student의 id가 같게 만드는 방법(2) 
    // students.forEach((student) => {
    //     if(student.id == id){
    //         result = student
    //     }
    // })

    // id와 student의 id가 같게 만드는 방법(3)
    let result = students.find(element => element.id == id);
	// students 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체.

    if(result){
        res.json(result)
    } else{ 
    // '예외를 터트리다' => http status 성공까지 코드를 실패로 알려줄거라는 뜻.
        res.status(404).send("찾으시는 학생이 없습니다.")
        // http status code를 404로 임의로 입력하여 보냄.
    }
})
```

**http 상태 코드를 사용하는 이유**
: 클라이언트(사용자,화면)과 소통을 정확하게 하기 위함.

### find()
: 배열에서 특정 조건을 만족하는 요소를 찾아 첫 번째 요소를 반환하는 함수<br>
: 배열의 각 요소에 대해 콜백 함수를 사용하여 원하는 조건의 요소를 찾음.<br>
: 배열에서 특정 요소를 찾는 데 유용함.
```jsx
arr.find(callbackFn[, thisArg])
```

### 예외(exception 고도화)
- **if 긍정문** ⇒ 부정문이 나올 때보다 긍정문을 앞에 쓰는게 더 깔끔해보임!

    ```jsx
    if(person){ // person이 true라면
	    console.log("person")
    } else {
	    console.log("non-person")
    }
    ```

---

# 실습: 예외 고도화
- if문 긍정조건이 앞으로 오도록 변경.
- HTTP status code 설정.
- POST 예외 설정: 요청 값이 제대로 오지 않았을 경우
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/44409321-d17f-425b-b534-e91f6406e22a)

*cf. 
length : 배열의 길이 알려 할 때<br>
length() : 문자열의 길이를 알려 할 때<br>
size() : 자료구조의 크기를 알려 할 때<br>*

---

# 실습: 미니 프로젝트
## **(설계)**
| 회원 | 채널 |
| --- | --- |
| 로그인 | 채널 생성 |
| 회원 가입  | 채널 수정 |
| 회원 탈퇴 | 채널 삭제 |
| 회원 정보 조회 |  |
- 회원은 계정 1개당 채널 100개를 가질 수 있음.
- 로그인 페이지
    - 화면 완성을 위한 필요한 API X
    - 로그인 버튼 클릭 ⇒ id, pwd에 맞는 로그인을 시켜줄 API
- 회원 가입 페이지
    - 화면 완성을 위한 필요한 API X
    - 가입 버튼 클릭 ⇒ id, pwd, name에 맞는 가입을 시켜줄 API
- 마이 페이지
    - 화면 생성 시 회원 정보 조회 API
    - 탈퇴 버튼 클릭 ⇒ 계정 탈퇴를 시켜줄 API

## [실습: 회원 API]
회원
- 로그인 (POST ← body가 필요하기 때문)(/login)
    - req: body(id, pwd)
    - res: `${name}님, 환영합니다.` ⇒ 메인 페이지로 이동

    ```jsx
    function isExist(obj){
        if(Object.keys(obj).length){
            return true
        } else {
            return false
        }
    }
    app.post('/login', (req,res) => {
        let {Id, pwd} = req.body
        let loginUser = {}

        db.forEach((user, id)=>{
            if(user.Id === userId){
                loginUser = user
            }
        })

        if(isExist(loginUser)){
            if(loginUser.pwd === pwd){
                console.log('login 완료')
            } else{
                console.log('pwd 맞지 않음')
            }
        } else {
            console.log("틀리거나 없는 id입니다.")
        }
    })
    ```
- 회원 가입(POST)(/join)
    - req: body(id, pwd, name)
    - res: `${name}님, 환영합니다.` ⇒ 로그인 페이지로 이동
- 회원 개별 정보 조회(GET)(/users/:id)
    - req: URL(id)
    - res: id, name ⇒
- 회원 개별 탈퇴(DELETE)(/users/:id)
    - req: URL(id)
    - res: `${name}님의 계정이 삭제되었습니다.` or 메인 페이지로 이동
    ![image](https://github.com/hwinareun/coding-coding/assets/165121326/57b7fa12-ad0f-46fa-ae0b-f8426f7fb5f0)
---

<br>

## Object.keys()
### 빈 객체 확인하는 방법 
- 객체.keys()
- for in
- lodash: isEmpty
```jsx
const obj1 = {}
const obj2 = {name: "hwi"}
const str1 = "one"
const str2 = "" // 문자열은 객체.
const num = 1 // 객체 아님.

function isEmpty(obj){
    if(Object.keys(obj).length === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(obj1)) // true
console.log(isEmpty(obj2)) // false
console.log(isEmpty(str1)) // false
console.log(isEmpty(str2)) // true
```
---

<br><br>

## [실습: BLOG API]
- 생성(POST)(/blogs)
  - req: body(blogTitle)
  - res(201): `${blogTitle}에 접속.`
- 수정(PUT)(/blogs/:id)
  - req: URL(id), body(blogTitle)
  - res(200): `${}에서 ${}으로 수정.`
- 개별 삭제(DELETE)(/blogs/:id)
  - req: URL(id)
  - res(200): `삭제 완료`
- 전체 조회(GET)(/blogs)
  - req: X
  - res(200): 채널 전체 데이터
- 개별 조회(GET)(/blogs/:id)
  - req: URL(id)
  - res(200): 채널 개별 데이터
```jsx
...
let db = new Map()
var id = 1 

app
    .route("/blogs")
    // 전체 조회
    .get((req,res) =>{
        if(db.size){
            let blogs = []
            db.forEach((value,key) => {
                blogs.push(value)
            })
            res.status(200).json(blogs)
        } else {
            res.status(404).json({
                message: "조회할 데이터 없음."
            })
        }
    })
    // 개별 생성
    .post((req,res) =>{
        if(req.body.blogTitle){
            db.set(id++, req.body)

            res.status(201).json({
                message: `${db.get(id-1).blogTitle} 생성 완료.`
            })
        } else {
            res.status(400).json({
                message: "요청값 부족함."
            })
        }
    })

app
    .route("/blogs/:id")
    // 개별 조회
    .get((req,res) =>{
        let {id} = req.params
        id = parseInt(id)

        let blogId = db.get(id)
        if(blogId){
            res.status(200).json(blogId)
        } else{
            res.status(404).json({
                message: "요청한 정보 찾을 수 없음."
            })
        }
    })
    // 개별 수정
    .put((req,res) =>{
        let {id} = req.params
        id = parseInt(id)

        let blogId = db.get(id)
        let oldTitle = blogId.blogTitle
        if(blogId){
            let newTitle = req.body.blogTitle
            blogId.blogTitle = newTitle
            db.set(id, blogId)
            res.status(200).json({
                message: `${oldTitle} -> ${newTitle} 수정 완`
            })
        } else {
            res.status(404).json({
                message: "수정할 정보 없음."
            })
        }
    })
    // 개별 삭제
    .delete((req,res) =>{
        let {id} = req.params
        id = parseInt(id)

        let blogId = db.get(id)
        if(blogId){
            db.delete(id)
            res.status(200).json({
                message: `${blogId.blogTitle} 채널 삭제 완료`
            })
        } else {
            res.status(404).json({
                message: "삭제할 정보 없음."
            })
        }
    })    

```
---

<br><br>


## Router
: Request의 URL에 따라 route를 정해줌 => 어디로 갈지 길만 정해줌!

### 'node.js에서의' 라우팅(Routing)이란?
: Request(URL,method)가 날아왔을 떄, 원하는 경로에 따라 적절한 방향으로 경로(callback)를 안내해주는 것.

```jsx
//app.js
const express = require('express')
const app = express()
app.listen(8888)

const userRouter = require('./routes/users')
app.use("/", userRouter)
```
```jsx
// user.js
const express = require('express')
const router = express.Router()
router.use(express.json())
...
router.post(...)
```

<br><br>

## [실습: BLOG API]
- **생성(POST)(/blogs)**
  - req: body(blogTitle, **userId**)
  - res(201): `${blogTitle}에 접속.`
- 수정(PUT)(/blogs/:id)
  - req: URL(id), body(blogTitle)
  - res(200): `${}에서 ${}으로 수정.`
- 개별 삭제(DELETE)(/blogs/:id)
  - req: URL(id)
  - res(200): `삭제 완료`
- **전체 조회(GET)(/blogs)**
  - req: **body(userId)**
  - res(200): 채널 전체 데이터
- 개별 조회(GET)(/blogs/:id)
  - req: URL(id)
  - res(200): 채널 개별 데이터

```jsx
function notFound(){ // 예외 처리
    res.status(404).json({
        message: "요청한 정보 찾을 수 없음."
    })
}
...
router
    .route("/")
    .get((req,res) =>{
        let {userId} = req.body
        let blogs = []
        if(db.size && userId){
                db.forEach((value,key) => {
                    if(value.userId === userId){
                        blogs.push(value)
                    }
                })
                if(blogs.size){ 
                    res.status(200).json(blogs)
                } else {
                    notFound()
                }
        } else {
            notFound()
        }
    })
...
```

```jsx
...
// id값 대신 userId값으로 변경.
router.post('/join', (req,res) => {
    console.log(req.body)
    const {userId} = req.body

    if(userId){
        db.set(userId, req.body)

        res.status(201).json({
            message: `${db.get(userId).name}님, 환영합니다!`
        })
    } else {
        res.status(400).json({
            message: `입력 값을 다시 확인해주세요`
        })
    }
})
...
```

---
---
