# 데브코스 1주차: Git
---
<br>
<br>

**Project (프로젝트)**
=======================
: 일정 기간 안에 목적을 위한 **업무의 묶음** <br>
⇒ 프로그램을 만들기 위한 **일련의 프로세스**
(코드, 기획, 설계, 테스트, 배포 …)
<br><br>

## **Read Me (리드미)**
: 프로그램의 **설명서** / 구현 중인 프로젝트의 현황<br>
: ***Readme.md*** ⇒ 단순히 확장자가 *.**m**(ark)**d**(own)*일 뿐인 하나의 파일.

### *Markdown?*
: 텍스트를 웹 기술로 **읽고 쓰기 쉽게** 만들어 바꿔주는 하나의 도구
<br>
: *GitHub, Discord, Notion* 등이 해당 문법을 변형 및 적용하여 사용.
<br><br>

## Vesion Control (버전 관리)

***Version***<br>
: 유의미한 수정<br>
: (필요성) 백업 용도 / 업무의 안정성 부여

### ***VCS(Version Control System, 버전 관리 시스템)?***<br>
: 버전 관리 / 백업 복구 / 협업

- 로컬 VCS: 내 컴퓨터 안에서만(협업 X)
- 중앙집중식 VCS: 중앙 컴퓨터가 백업 관리, <br>필요한 파일만 가져와 작업 가능. (*SVN, CVS…*)
- **분산 VCS**: 버전 전체를 가져와 작업 가능.   
훨씬 <u>안정적</u>이기 때문에 대형 프로젝트에도 적합.<br>
(*Git, Mecurial, Bazaar*)
---
<br><br>


**Git**
========
: **분산식** VCS.
<br> GitHub는 원격에서 백업 담당, 내 컴퓨터와 별도로 버전 관리.

<br>

### ***CLI(Command Line Interface, 명령줄인터페이스)?***
: 프로그램 창에서 글자를 입력해서 컴퓨터에게 명령을 내림.

### ***GUI(Graphical User Interface)?***
: 그래픽으로 컴퓨터에게 명령을 내릴 수 있도록, 사용자에게 화면을 제공.

<br>

### **CLI: 자주 쓰는 명령어**

- `ls`*(list segmentation)*: 리스트 목록 보여주기
- `mkdir` *(make directory)* : 디렉토리(폴더) 만들기
- `cd 폴더명`*(change directory)*: 디렉토리(폴더) 이동
    - `cd ..` : 상위 디렉토리(폴더) 이동

<br>

- `git status` : git 저장소 상태 확인.
- `git init`*(initialize)* : git 저장소 생성. 초기화.
- `git add 파일명` : git에게 파일 트래킹을 하도록 함. 대기열 상태.
- `git commit` : 지금까지의 파일들을 버전으로 만들어 저장.

<br>

- `cc` , `i` , `a` : 입력 모드 상태. 커밋 메시지 적을 수 있음.
- `:wq` : 편집하던 문서를 저장(write) 후 종료(quit).
- `git log` : 커밋 된 버전들의 기록 확인.

<br>

### GUI로 init, add, commit
1. ***init***: 소스 제어(Source Control) > repository 초기화
2. ***add***: (변경 내용 stage Changes)
3. ***commit***

### Git History
- vs code > 확장(Extension) > [Git History] 설치 ⇒ GUI로 git log 확인 가능

### git remote - v
: 지역 저장소와 깃허브(원격 저장소)를 연동시키는 명령어

<br>

### ***GitHub?***
: 원격으로 접속해서 백업할 수 있는 저장소. **오픈소스**의 발판.

### 처음으로 깃허브에 내 로컬 프로젝트 업로드
- `git remote add 원격저장소(깃허브 레포지토리)별칭 원격저장소URL`: 깃허브와 연결.
- `git push origin main` : 소스 코드 업로드.


### 토큰 생성
: 깃허브 인증 시 암호 대신 토큰 입력으로 사용 가능함.<br>
Settings > Developer settings > Personal access tokens <br>> tokens(classic) > Generate new token(classic) > > > Generate token

### CLI clone
- `git clone 원격저장소URL`: 깃허브와 연결 & 소스 코드 받아오기.

<br>

## **커밋 업로드하기 : git push**

: `git push origin(원격저장소별칭) main(지역저장소브랜치이름)`
⇒ GUI로 push 가능.

## **커밋 내려받기 : git pull**

: `git pull origin(원격저장소별칭) main(지역저장소브랜치이름)`

## Branch(브랜치)
: 나뭇가지처럼 여러 갈래로 퍼지는 데이터 흐름.

- `git branch`: Branch 목록 확인.
- `git branch 브랜치명`: Branch 생성.
- `git checkout 브랜치명`: Branch 이동.
    - `git checkout -`: 이전 Branch로 이동.
- `git branch -d 브랜치명`: 브랜치 삭제.

<br>

- main 브랜치: 제일 기본이 되는 브랜치 ←- master 브랜치가 이름만 변경된 것 뿐.

- `git branch -r`*(remote)*: 원격저장소 브랜치 확인.
- `git push 깃허브저장소별칭 깃브랜치`: git에 만들어둔 branch를 Github로 복제.<br>
    *(* 반대의 경우, 깃브랜치명과 깃허브브랜치명을 바꿔서 작성하면 됨.)*

## Git Flow(깃 브랜치 전략)
(크게 2가지로 분류)

1. **fast foward 전략**
    : A branch에서 B branch 생성 이후에,<br>
      A branch에는 아무런 추가 구현이 없고 B branch를 합치려면<br> 
      그냥 A branch에 B branch를 붙이면 끝.
    ![fast-forward](https://github.com/hwinareun/coding-coding/assets/165121326/7bdaf03a-b01a-41df-8786-abbae31d031c)
    
2. **3-way 전략** ⇒ 가장 많이 사용.
    : A branch에서 B branch 생성 이후에,<br>
    A branch도 추가 구현을 하고, B branch도 추가 구현을 하고
    둘을 합치려면 <br>
    ⇒ A branch와 B branch가 
    서로 비교하여 바뀐 것을 정리하여 합침.
    ![3-wqy](https://github.com/hwinareun/coding-coding/assets/165121326/e5ff886c-983c-48a2-ad32-9bb82a0a0798)


**Merge(병합)?**
===
: Branch를 생성한다는 것은 “협업”을 위함 ⇒ 주로 Branch 병합을 GitHub에서 이루어짐.

1. main branch protection
2. <u>**Pull Request**</u> : 추가 branch→ main branch 병합 요청<br>
    : 협업 저장소에 commit을 올리고 리뷰를 위한 메시지(**PR메시지)**를 남기는 것
3. GitHub가 자동으로 충돌 확인.
4. <u>**Merge**</u>
5. 빈 추가 branch 삭제.

### merge된 깃허브 → 깃에 동기화
1. `git fetch -p` : 깃허브 브랜치 목록 동기화. <br>
2. git checkout main > git pull origin main(동기화) 
3. git branch -d feature/login(브랜치 삭제)

❓ *`git pull`은 원격 저장소의 최신 커밋을 가져옴(변경 내용을 로컬 복사본과 자동으로 병합).*
*`git fetch`는 원격 저장소의 커밋을 가져오기만 하고 병합은 안함(변경 내용만 다운로드).*
*⇒ `git pull` 은 `git fetch` 명령과 `git merge origin/main` 명령을 합친 것과 같은 기능을 함.*

- `git checkout -t 원격저장소브랜치명`:  원격 브랜치를 추적하는 새로운 브랜치 생성.<br>
*↳(tracking)*

#### 충돌 해결
- 병합할 수 없어도 pull request는 할 수 있음.
- 충돌 해결하기 > 겹치는 부분 확인 후 필요한 부분만 남기기
