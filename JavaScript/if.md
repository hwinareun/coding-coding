### if문, if~else문
```jsx
if(조건){
  조건 만족 시 시행할 일
}

if(조건1){
  조건1 만족 시 시행할 일
} else (조건2){
  조건2 만족 시 시행할 일
} else {
  조건1, 조건2 모두 불만족 시 시행할 일
}
```
---

### switch~case문
: 수행하려는 정보의 값을 입력하면 해당 정보 값이 case 문으로 이동하여 수행.
```jsx
switch(변수){ 
  case 1:
    수행1
    break;
  case 2:
    수행2
    break;
  case 3:
    수행3
    break;
  default:
    해당하는 케이스가 없으면 실행될 수행문.
    break;
}

```
---

### for문
```jsx
for(초기문; 조건문; 증감문){
  반복문장
}

for(i=0; i<4; i++){
  console.log(i)
}
```

### while문
```jsx
while(조건){
  반복문장
}

while(true){
  ...
  if(count > 100){
    break; // 조건 만족 시 반복문에서 빠져나옴.
  }
  ...
  if(count % 2 === 0){
    continue; 
    // 조건 만족 시 continue문 이하의 수행은 무시하고,
    // while문으로 돌아가 반복문 시행.
  }
}
```