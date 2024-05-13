# # 데브코스 5주차(05/06 ~ 05/10)
<br>
<br>

# DB
: 데이터의 집합.
: 데이터 중복을 막고, <u>효율적이고</u> 빠른 데이터 연산을 가능케 함.
<br><br>

## DBMS(DataBase Management System)
: 데이터베이스를 효율적으로 관리하고 운영하기 위한 시스템.<br>
: mariaDB, MySQL, ORACLE ... <= 주요 명령어는 동일(INSERT, SELECT, UPDATE, DELETE)

---

## RDBMS(Relational DBMS)
: 데이터 간 ***관계***
: 테이블이라는 최소 단위로 구성(열과 행으로 이루어져 있음).

---
<br><br>

## PK(Primary Key, 기본키)
: 해당 테이블의 각 row(행, 가로)을 유니크(유일)하게 구별할 수 있는 key값.
> 중복된 데이터가 입력되지 않도록 제한하여 특정 데이터를 구분할 수 있음.

## FK(Foreign Key, 외래키)
: A 테이블에서 B 테이블의 데이터를 찾아가고 싶을 때, 사용하는 key값.

---
<br><br>

## 실습
- 데이터베이스 "테이블 간 어떤 관계를 가지고 있는지" 
    => 연관간계는 1:1, 1:N, N:N
    ![image](https://github.com/hwinareun/hwi-coding/assets/165121326/f52f5dcc-c304-4d9e-8b80-e18e942d604c)

- 테이블을 분리(정규화)하고, 중복을 없애줌으로써 효율성을 가져옴.
- 각 테이블간의 연관관계가 생김.
  >(1:N) 한쪽 테이블에는 하나의 값만, 다른 쪽 테이블에는 여러 개의 값이 존재할 수 있는 관계. <br>
  => 기본키(PK) : 외래키(FK) 관계라고 부르기도 함.

---
<br><br>

---
<br><br>

# MySQL(mariaDB)
## 날짜 / 시간 타입

- DATE<br>
  : 날짜. YYYY-MM-DD
- DATETIME<br>
  : 날짜 + 시간. YYYY-MM-DD HH:MM:SS(24시간제)
- TIME<br>
  : 시간. HH:MM:SS
- TIMESTAMP<br>
  : 날짜 + 시간. YYYY-MM-DD HH:MM:SS(24시간제)<br>
  : 시스템 시간대 정보에 맞게 일시를 저장.<br>

> 해당 서버의 시간대를 반영하기 때문에<br>
DB에 저장될 때는 UTC(국제표준시: 한국 시간 -9) 시간대로 변환되어 저장됨.

> DATETIME vs TIMESTAMP
<br> TIMESTAMP 타입의 값은 현재 시각 <--> UTC 시각으로 변환되며 DATETIME은 변환되지 않음. 만약 글로벌 서비스에서 DATETIME을 사용하여 날짜를 표현할 경우, 한국에서 17:00시에 작성된 글이 미국에서도 그대로 17:00시에 저장된 것처럼 보일 수 있음. 

## Not Null vs Default
- Not Null<br>
: 직접 null 이라고 작성해도 값을 넣어도 안 됨.
- Default<br>
: 값이 안 들어올 때, 기본 값으로 세팅.<br>
: 직접 null 이라고 작성해서 넣으면, null 세팅.

---

## 실습: CLI(mariaDB)

1. "Test" schema(DATABASE) 생성
    ```sql
    CREATE DATABASE Test;
    USE Test;
    ```
2. 사용자 테이블 생성
    ```sql
    CREATE TABLE users(
      id INT NOT NULL AUTO_INCREMENT, 
      -- 빈 값이 아니어야 함, 자동으로 값이 올라가도록 함.
      name VARCHAR(20) NOT NULL,
      job VARCHAR(50),
      birth DATE, -- "YYYY-MM-DD"
      PRIMARY KEY(id)
    );
    ```
3. 사용자 데이터 삽입
    ```sql
    INSERT INTO users(name, job, birth) 
        VALUES("hwi","tester","010101");
    INSERT INTO users(name, job, birth) 
        VALUES("hwi2","tester2","1920-01-01");
    ```
4. 게시글 테이블 생성
    ```sql
    CREATE TABLE posts(
      id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(100) NOT NULL,
      content VARCHAR(2000),
      created_at TIMESTAMP DEFAULT NOW(), -- 생성일
      PRIMARY KEY(id)
    );
    ```
5. 게시글 데이터 삽입
    ```sql
    INSERT INTO posts(title, content) VALUES("title1","content1");
    ```

6. 게시글 테이블에 수정일자 추가
    ```sql
    ALTER TABLE posts
    ADD COLUMN updated_at DATETIME
    DEFAULT NOW()
    ON UPDATE NOW();
    ```
  ![updated_at](https://github.com/hwinareun/hwi-coding/assets/165121326/31362b0a-e0af-46e1-a00e-a02ddac52b69)

7. 게시글 테이블 값 수정
    ```sql
    UPDATE posts SET content = "updated!" WHERE id = 2;
    ```
8. 게시글 테이블에 작성자 컬럼 FK 추가
    ```sql
    ALTER TABLE posts
    ADD COLUMN user_id INT;

    ALTER TABLE posts
    ADD FOREIGN KEY (user_id)
    REFERENCES users(id);
    ```
  ![foreingn_key](https://github.com/hwinareun/hwi-coding/assets/165121326/c89219e1-fb6c-42ff-945f-a6baee18ff02)
---

<br><br>

## MySQL workbench
- MySQL 서버에 접속, 연결하기 위한 클라이언트 도구. 이곳에 SQL 문을 입력하고 실행할 수 있음.
- GUI로 쉽게 SQL 할 수 있음.
- download: https://dev.mysql.com/downloads/workbench/

- MySQL workbench 실행
![image](https://github.com/hwinareun/hwi-coding/assets/165121326/6c26caea-13ef-4b3b-a7f9-854d5a94b61e)
    - 테이블을 생성할 때, 버튼들이나 테이블명을 입력하는 게 보이지 않는 경우가 생김. <br> 위치를 유추해서 클릭하거나 입력하면 작동은 하는데 최신버전을 다운로드하면서 버그가 생겼나봄. <br>
    - (해결) workbench를 삭제하고 바로 이전버전으로 다운로드해서 다시 실행을 해보니 정삭 작동!

---

## 실습: users 테이블 생성
![image](https://github.com/hwinareun/hwi-coding/assets/165121326/2d80bf66-273b-46f2-90fe-c4949f4ee31f)
> 데이터 형식
<br> (정수형) TINYINT, SMALLINT, INT, BIGINT
<br> (실수형) FLOAT, DOUBLE
<br> (문자형) CHAR(고정형), VARCHAR(가변형)
<br> (대량의 데이터) TEXT, LONGTEXT, BLOG, LONGBLOB
<br> (날짜형) DATE, TIME, DATETIME, TIMESTAMP

---
<br><br>

## 실습: DB 연동
terminal > `npm install --save mysql2`

```jsx
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Youtube',
  password: 'root',
});

// A simple SELECT query
connection.query(
  'SELECT * FROM `users`',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
```

> 쿼리(query)?<br>
: DB에 사용자가 요정한 특정 데이터를 보여달라는 요청.<br>
: '쿼리문(질의문)을 작성한다' == DB에서 원하는 정보를 가져오는 코드를 작성한다

> query("요청할 SQL 쿼리문", 콜백 함수)<br>
: DB에 데이터 요청을 하는 함수.

---

### Table에 Column(열) 추가
![image](https://github.com/hwinareun/hwi-coding/assets/165121326/0524b6bc-bf20-4fe5-88dc-0ab4ee53e908)

---

### timezone 설정

```sql
SET GLOBAL time_zone = 'Asia/Seoul'
SET time_zone = 'Asia/Seoul'
```
![image](https://github.com/hwinareun/hwi-coding/assets/165121326/2e7887ed-4345-42b5-aa73-acc02d22eaaa)
![image](https://github.com/hwinareun/hwi-coding/assets/165121326/3209dcd8-8ddd-4eac-ae35-94e75a79d0d7)

```jsx
const connection = mysql.createConnection({
  ...
  dateStrings: true,
});
```
> dateStrings: true<br>
  DB로부터 Date 타입의 데이터를 String으로 변환하여 가져옴.<br>
  이 때, 시스템의 Local TimeZone이 반영됨.<br>
  따로 설정하지 않으면 false가 기본값으로, UTC 기준 시간대를 가져옴.

![image](https://github.com/hwinareun/hwi-coding/assets/165121326/f84e8880-d6dc-4b80-a6df-d2b66323e2ee)

---

# 실습
## DB 모듈화
```jsx
// mydb.js
...
const connection = mysql.createConnection({
  ...
});
module.exports = connection
```
```jsx
// users
...
const conn = require('../mydb')

conn.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
      ...
    }
);
...
```

---

## users db 연동
### (GET: 개별 조회)<u>(SQL: SELECT)</u>
  - req: body(userId) **--> body(email)**
  - res: userId, name **--> 회원 객체를 통으로 전달**

```jsx
...
    .get((req,res) => {
        let {email} = req.body

        conn.query(
            `SELECT * FROM users WHERE email = ?`, email,
            function (err, results, fields) {
              res.status(200).json(results) 
            }
        );  
    })
```

### (POST: 가입)<u>(SQL: INSERT)</u>
  - req: body(userId, pwd, name) **--> body(email, name, pwd, contact)**
  - res: `${name}님, 가입을 환영합니다!`

```jsx
router.post('/join', (req,res) => {
    if(req.body){
        const {email, name, password, contact} = req.body

        conn.query(
            `INSERT INTO users (email, name, password, contact)
            VALUES (?,?,?,?)`, [email, name, password, contact],
            function (err, results, fields) {
                    res.status(201).json(results)    
            }
        );  
    }
    ...
})
```

### (DELETE: 탈퇴)<u>(SQL: DELETE)</u>
  - req: body(userId) **--> body(email)**
  - res: `${name}님의 계정이 삭제되었습니다.`
```jsx
 .delete((req,res) => {
        let {email} = req.body

        conn.query(
            `DELETE FROM users WHERE email = ?`, email,
            function (err, results, fields) {
                    res.status(200).json(results)  
            }
        );  
    })
```

### (POST: 회원 로그인)(/login)<u>(SQL: SELECT)</u>
  - req: body(userId, pwd) **--> body(email, password)**
  - res: `${name}님, 로그인 되었습니다.`
```jsx
router.post('/login', (req,res) => {
    let {email, password} = req.body

    conn.query(
        `SELECT * FROM users WHERE email = ?`, email,
        function (err, results, fields) {
            let loginUser = results[0];
            
            if(loginUser && loginUser.password == password){
                res.status(200).json({
                    message: `${loginUser.name}님, 로그인 되었습니다.`
                })
            } else {
                ...
            }
        }
    );  
})
```
---
<br><br>

## channels db 연동
- (POST: 생성)(/channels)**(SQL: INSERT)**<br> 
    **⇒ INSERT 할 때 userId 값이 이상해서 실패해도 <br> 201이 나옴** ⇒ 유효성 검사 필요!! 
  - req: body(channelsTitle, userId) **--> body(name, userID)**
  - res(201): `${channelsTitle}에 접속.` **--> `${name}에 접속.`
- 전체 조회(GET)(/channels) **(SQL: SELECT)**
  - req: body(userId) 
  - res(200): 채널 전체 데이터
- 개별 조회(GET)(/channels/:id) **(SQL: SELECT)**
  - req: URL(id)
  - res(200): 채널 개별 데이터

<br>

---
