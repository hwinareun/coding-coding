// 자바스크립트의 함수.

/* 일급객체인 자바스크립트 함수의 특징 */
// 1. 함수는 함수의 실제 매개변수가 될 수 있음. 
function subject(a){ 
    a(); 
};
function math(){ 
    console.log('math!')
};
subject(math); // 'math!'

// 2. 함수는 함수의 반환값이 될 수 있음. 
function subject(a){ 
    return a; 
};
function math(){ 
    console.log('math!') 
};
subject(math); // math()
subject(math)(); // 'math!'

// 3. 함수는 할당명령문, 동일비교의 대상이 될 수 있음.
const subject = function(a){ 
    return a; 
};
subject('math'); // 'math'


/* 함수의 매개변수 */
// 1. dafault function parameter
function num(n = 1){ 
    console.log(n); 
};
num(); // 1

// 2. Rest parameter
function num(n, ...numbers){ 
    console.log(numbers); 
};
num(1, 2, 3); // [2,3]

// 3. arguments 객체
function num(n, ...numbers){ 
    console.log(arguments); 
};
num(1, 2, 3);

/* 함수 생성 방법 */
// 1. 함수 선언문
function sum(a,b){
    console.log(a+b)
};
sum(1,2);

// 2. 함수 표현식
const sum = function (a,b){
    console.log(a+b)
};
sum(1,2);

// 3. Function 생성자 함수
const foo = new Fuction(
    "console.log('1')"
);
foo();

// 4. 화살표 함수 표현식
const sum = (a,b) => {
    console.log(a+b)
};
sum(1,2);

/* 함수 사용 패턴 */
// 1. IIFE(즉시 실행 함수)
(function num(){
    console.log('number');
})() // number

// 2. 재귀함수
function num(n){
    if(n === 3) return;
    console.log(n);
    num(n + 1);
} 
num(1);
// 1
// 2

// 3. 중첩함수
function num1(n){
    function num2(){
        console.log(n);
    }
    num2();
}
num1(1); // 1


// 4. 콜백함수
function num1(n){
    n();
};
let num2 = () => {
    console.log(1);
};
num1(num2); // 1