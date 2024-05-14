# # 데브코스 2주차(04/15 ~ 04/19)
<br>
<br>



**Web**
==========
: 정보를 *hypertext*로 표현. 다양한 정보/문서들을 연결 및 제공.
<br>
: 웹 페이지들을 엮어 만든 게 웹 사이트.

*hypertext?* 글자 그 이상의 기능을 가진 텍스트. 주로 링크, 참조 역할을 함.

***Web Browser***
: 웹 페이지 또는 웹 상의 데이터을 찾거나 읽을 때 사용하는 것.

---
### ***Client* vs *Server***

: (*C*) 서비스를 이용(요청) / (*S*) 서비스를 제공
- 클라이언트와 서버 간의 약속, <U>프로토콜(*Protocol*)</U>
<br>: 컴퓨터 내부, 또는 컴퓨터 사이 데이터 교환 방식을 정의하는 규칙 체계
    
- 클라이언트와 서버는 웹 프로토콜 ***HTTP(HyperText Transfer Protocol)*** 을 사용하여 데이터를 주고 받음.

<br>

---
<br>

**Front-end**
===
: 웹서비스에서 사용자 측면의 GUI로,
사용자와 상호작용(입력, 출력…)을 담당.
<br>
: 웹은 **HTML+ CSS + Jacascript**로 이루어져 있음.

---
<br><br>

**HTML(Hyper Text Markup Language)**
================================
: 웹 페이지를 연결하는 기능을 가진 텍스트이자 구조를 명시하는 언어

- <> 태그 사용. 웹 페이지의 구성 요소 하나하나로 역할.
    - 태그 한쌍(<태그>텍스트</태그>) 또는 하나<태그 />을 element라고 부르기도 함.

- **기본 틀**
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>탭 제목</title>
        </head>
        <body> 
    	    사용자가 보는 화면에 출력되는 내용
        </body>
    </html>
    ```
    ---
<br>

### 자주 쓰는 태그

- **`<h1>`~`<h6>`**: 제목 크기  
    ```html
    <h1>숫자 작아질 수록 글자 크기 커짐</h1>
    <h6>숫자 커질 수록 글자 크기 작아짐</h6>
    ```

- **`<a>`***(anchor)*: 하이퍼링크(*hyperlink*)를 정의 할 때 사용.
    ```html
    <a href="https://https://hwinareun.github.io/">hwi</a>
    <!--href(hypertext-reference): URL 지정-->
    ```
- **`<br>`***(break)*: 줄 바꿈.
    ```html
    <h5>hwinareun</h5>
    <br>
    <h1>blog</h1>
    ```
<br>

- `<div>` *(division)* 레이아웃 나누기. `</div>`
- `<p>`  *(paragraph)* 하나의 문단 생성. `</p>`
- 이미지 삽입:
    ```html
    <img src="이미지의 경로" width="이미지 가로 크기" height="이미지 세로 크기">
    <img src="./img/hwi.png" width="350" height="150">
    ```
    
- 표 생성:
    ```html
    <table> 
    	<!-- 열 제목 -->
    	<th>no.</th>
    	<th>name</th>
    	<th>price/th>
    	
    	<tr> <!-- 첫번째 행 -->
    		<td>1</td>
    		<td>book1</td>
    		<td>price1</td>
    	</tr>
    	
    	<tr> <!-- 두번째 행 -->
    		<td>1</td>
    		<td>book1</td>
    		<td>price1</td>
    	</tr>
    </table>
    ```
---
<br>
<br>

**CSS(Cascading Style Sheets)**
===========================
: HTML 태그를 하나씩 꾸며주는 언어.

- **인라인**(*inline*): HTML 태그 안에 작성.
    
    ```html
    <h1 style="text-align: right;">Login</h1>
    ```
    ---
    <br>

- **내부 스타일 시트**(*internal style sheet*): HTML 문서 안에 작성.
    
    ```html
    ...
    <head>
        <style>
            /* 태그명 */
            h1 { text-align: right; }
            /* .클래스명 */
            .input { font-size: 25px; }
            /* #id명 */
            #btn { width:30px; height: 30px;}
        </style>
    </head>
    ...
    ```
    ---
    <br>

- **외부 스타일 시트**(*external style sheet*): HTML 문서 밖에 작성 후 연결.
    
    ```html
    <!-- hwi.html -->
    <head>
        <link rel="stylesheet" href="login.css"/>
    	<!-- relation -->
    </head>
    ```
    ```css
    /* hwi.css */
     table {
       margin-left: auto; margin-right: auto;
    }
    ```
    ---
<br>
<br>

**Javascript**
===========

: 특정 HTML 요소를 선택하여 제어할 수 있는 <u>스크립트 언어</u>.
<br>
<br>

### 함수(function)

: 특정 기능을 수행하는 코드.

```jsx
function hwiFunction(){
    alert('welcome to my github!');
}
```

### 변수
```jsx
let count; // 초기화 필요.

count = 0; // 초기화
count = 10; // 초기화 해도 언제든지 값 변경 가능.

const name = hwi;
// name = hwihwi; // const 변수는 초기화 이후 값 변경 불가.

console.log(`count: ${count}`) // count: 10
console.log('count: ' + count) // count: 10
```

<br>
<br>

- **인라인**(*inline*): 상호작용에만 사용.
    ```html
    <input type="button" onclick="alert('click!')">
    ```
    ---


- **내부 스크립트**(*internal script*)
    
    ```html
    <input type="button" onclick="hwiFunction()">
    <script>
        function hwiFunction(){
            alert('hello! welcome to my blog!');
        }
    </script>
    ```
    ---

- **외부 스크립트**(*external script*)

    ```html
    <!-- hwi.html -->
    <script type="text/javascript" src="login.js"></script>
                          <!-- source-code -->
    ```
    ```jsx
    // hwi.js
    function popId(){
        let userId = document.getElementById('input_id').value;

        if(!userId){
            alert('아이디를 입력해주세요')
        } else {
            alert(userId)
        }
    }
    ```
    ---

<br><br>

**Back-end**
===
: 서버 측에서 전달받은 데이터와 요청을 내부 데이터와 연산 활용 및 처리하고 결과를 전달.

### 백엔드의 구조
- Web Server : 정적 페이지 담당. 동적 페이지에 대한 처리는 WAS에게 전달.
- Web Application Server(WAS): 동적 페이지 담당. 필요 데이터 연산을 위해 DB와 데이터 조회/수정/삭제에 대한 처리 요청.
- Database(DB): 데이터를 통합해 효율적 관리를 위한 데이터 집합체.
<br>

***(정적 페이지 vs 동적 페이지)***
- (정적): 화면의 내용/데이터 등의 변동이 없음.
- (동적): 데이터 처리/연산을 통해 화면의 내용 및 데이터 변동.

---
<br><br>

**Node.js**
===

: JavaScript를 스크립트 언어 이상으로 백엔드 구현까지 할 수 있도록 지원하는 플랫폼. 

*모듈(Module)?* : 프로그램 내부를 기능별 단위로 분할한 부분.

---

### **http 모듈 기반의 웹 서버 만들기**

```jsx
let http = require('http');
// 다른 모듈의 기능을 불러올 때는 require를 통해 모듈을 불러옴.
// 'http'모듈은 Node.js가 이미 기본으로 가지고 있는 모듈.

										// 요청, 응답
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('hola! main page.');
    response.end();
}

http.createServer(onRequest).listen(8888);
// localhost:8888/으로 페이지 열 수 있음.
```
---

### **HTTP 프로토콜 템플릿**
- Head: 통신 상태가 어떤지, 응답이 어떤 형태인지 적고 알려줌<br>
	   e.g., HTTP status code: 200(정상), 404(요청한 URL 찾을 수 없음.)
- BODY: 웹 페이지 화면에 뿌려질 내용을 담음.

<br>

**모듈화**
: 직접 만든 .js 파일도 모듈처럼 다른 .js 파일에서 사용할 수 있음.

```jsx
// server.js
function start(route, handle){ 
		function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
    }
	http.createServer(onRequest).listen(8888); //localhost:8888
}

exports.start = start; // module.exports=프로퍼티 또는 exports.프로퍼티 => 모듈 내보내기.
```

```jsx
// index.js
let server = require('./server'); // 모듈 소환
...
server.start(router.route, requestHandler.handle); // 모듈 기동
```

**URL(Uniform Resource Locator)** <br>
: 인터넷 상에서 웹 페이지의 위치를 알려주는 주소.<br>
: Local host: 내 컴퓨터 주소

---

### router 만들기
: 클라이언트로부터 요청이 왔을 때 서버에서 어떤 응답을 보내주어야 할지 결정해줌.

```jsx
// router.js
function route(pathname, handle, response){
    console.log('pathname: ' + pathname);
    
    // **TypeError: handle[pathname] is not a function 에러 방지.**
    if(typeof handle[pathname] == 'function'){
        handle[pathname](response);
    } else { // 응답하지 않는 페이지일 경우.
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('not found');
        response.end();
    }
}
// 경로에 따른 일만.
exports.route = route;
```

**각 루트에서 할일 만들기.**

```jsx
function main(response){
    console.log('main');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('main page: lee hanhwi');
    response.end();
}

function login(response){
   ...
}

let handle = {} // key:value
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;
```
---

<br><br>

**데이터베이스(database,DB)**
===
: 데이터를 통합, 효율적 관리 위한 데이터 집합체.<br>
: 데이터를 구조화해 관리, 데이터 중복 방지, 효율적이고 빠른 데이터 연산 가능.

**DBMS(Database Management System)** <br>
: 데이터 베이스를 운영하고 관리하기 위한 시스템. (mySQL, MariaDB … )

**SQL(Structured Query Language)**<br>
: 데이터베이스에 연산을 요청하기 위해 사용 되는 언어<br>
: 데이터 삽입(INSERT), 조회(SELECT), 수정(UPDATE), 삭제(DELETE), 생성(CREATE) 등과 같은 기능 수행.

### Docker
: 리눅스의 응용 프로그램들을 프로세스 격리 기술들을 사용해 컨테이너로 실행하고 관리하는 오픈 소스 프로젝트<br>
: download: https://www.docker.com/products/docker-desktop/

**MariaDB 설치**
1. `docker pull mariadb`
2. `docker run —-name mariadb -d -p 3306:3306 -—restart=always -e MYSQL_ROOT_PASSWORD=root mariadb` 
    1. mariadb가 있는 컨테이너 접속 : `docker exec -it mariadb /bin/bash`
    2. mariadb 실행 : `mysql -u root -p` 

---

🤔❓🤔❓🤔❓

(맥북을 구매하기 전 나의 오류를 해결하기 위한 여러가지 짓.. )<div><div>강사님은 macOS로 진행하시는데, 내가 사용하는 운영체제는 windows여서 계속 오류가 나서 진행이 되지 않았다. 

[오류 상황]

1. Docker desktop 설치는 했는데 `pull mariadb` 명령어를 치려고 하니까 `Using default tag: latest`, `error during connect: this error may indicate that the docker daemon is not running ...` 이라고 오류가 떴다. `docker -v`라고 쳐보면 버전이 나오는 걸 봐선 설치는 되긴 한 것 같은데..
도커를 켜보면 이번엔 다른 오류가 또 뜬다. `Docker Desktop - Windows Hypervisor is not present` 이건 또 무슨 오류람. <div>
=> (1차 시도) 윈도우 검색창에 '윈도우 기능 켜기/끄기'를 검색해서 들어가서 'Hyper-V','Linux용 Windows 하위 시스템', '가상 머신 플랫폼', '컨테이너' 4개를 켰다. 이거 켜도 안된다.<div>
=> (2차 시도, 결과) 컴퓨터를 다시시작하면서 'BIOS 메뉴'에 들어간다. 내 경우엔 msi 였고, 검색해서 맞는 걸 찾아서 따라했다. 세팅 중 oc를 들어가서 SVM mode를 on으로 바꿔주고 (그냥 esc를 누르고 나오면 안된다.) 꼭 저장을 하고 빠져나와야 한다. 이후에 컴퓨터 작업관리자를 켜보면 가상화가 사용안함에서 사용으로 변경된 걸 볼수 있다. 이후에 터미널을 켜서 명령어를 다시 치면 진행이 된다.

2. 바로 다음 단계에서 막히는 윈도우의 대단함이란 하하하하하하 <div> `docker run —-name mariadb -d -p 3306:3306 —-restart=always -e MYSQL_ROOT_PASSWORD=root mariadb` 를 하려고 하니 또 오류로 진행이 되지 않았다.  `docker: invalid reference format.`은 또 무슨 오류인고..<div>
=> (1차시도, 오류발생) `docker run —-name mariadb -p 3306:3306 —restart=always -e MYSQL_ROOT_PASSWORD=root -d mariadb`으로 -d의 위치를 변경하면 진행이 됐다. 근데 또 오류 생김. `docker: Error response from daemon: Ports are not available: ...`<div>
=> (2차시도, 결과) 무슨 문제인가 했더니 이거는 내가 데브코스 수강 전에 혼자서 mySQL을 다운받아서 sql을 공부하다 보니까 mySQL에서 쓰고 있는 포트넘버가 3306이다 보니 충돌이 일어난 것이었다.<div> mySQL삭제 또는 mySQL 프로세스 종료라는 방법도 있지만 난 간단하게 포트번호를 바꿔서 진행했다. `docker run —-name mariadb -p 3307:3307 —restart=always -e MYSQL_ROOT_PASSWORD=root -d mariadb` 이런식으로 바꾸면 mariadb가 사용하는 포트번호와 mySQL이 사용하는 포트번호가 달라 오류가 생기지 않았다.

<div>

<div>

<div>

이후에 계속 진행을 됐었는데, node.js랑 연동하려고 하니까 또 오류 발생.. 피로감 생겨서 다음 날 결국 맥북 질러버린 나.. 나중에 시간 남으면 윈도우로 다시 시도해 보자.. 맥북으로 하니까 강의 제대로 따라가기만 해도 충분히 진행되더라.. 슬퍼...

---
**Docker로 MariaDB 실행하기**

1. Docker decktop 프로그램 실행
2. cmd(윈도우) 또는 터미널(맥) 실행
3. mariadb가 있는 컨테이너 접속: `docker exec -it mariadb /bin/bash`
4. mariadb 실행: `mysql -u root -p`

---

## SQL 명령어

- 데이터베이스 확인: `SHOW DATABASES`;
- 데이터베이스 생성: `CREATE DATABASE 데이터베이스명`;
- 데이터베이스 들어가기: `USE 데이터베이스명`;

- **테이블 생성** : `CREATE TABLE 테이블명(컬럼명 데이터형식, …)`
    ```sql
    CREATE TABLE member
    (
    	id VARCHAR(30),
    	name VARCHAR(30),
    	pwd VARCHAR(30),
    )
    ```
- **테이블 데이터 조회**: `SELECT 컬럼명 FROM 테이블명;`
    ```sql
    SELECT id FROM member;
    SELECT * FROM member; -- 별(*) 표시는 전체를 뜻함.
    ```
- **특정 데이터 조회**: `SELECT 컬럼명 FROM 테이블명 WHERE 조건;`
    ```sql
    SELECT * FROM member WHERE id = 'hwinareun';
    ```
- **테이블 데이터 삽입**<br>
    : `INSERT 컬럼명1, 컬럼명2, ... INTO 테이블명 VALUES(컬럼1 데이터, 컬럼2 데이터, ...);`
    ```sql
    INSERT INTO member VALUES ('hwinareun','alice','aaaaa');
    ```
- **테이블 데이터 수정**: `UPDATE 테이블명 SET 컬럼명 = 수정할 값 WHERE 조건;`
    ```sql
    UPDATE member SET name = 'snowwhite' WHERE id = 'hwinareun';
    ```
- **테이블 데이터 삭제**: `DELETE** FROM 테이블명 WHERE 조건;`
    ```sql
    DELETE FROM member WHERE name = 'snowwhite'; 
    -- where 절을 제외하면 테이블 데이터 전체 삭제 가능.
    ```
    ---
<br>    

- mysql 모듈 설치: `npm install mysql —save`
