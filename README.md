## 백엔드 초기 세팅

-> 데이터베이스 세팅(1.유저 정보 ,2. 채팅 메세지 정보 ), 웹 소켓 세팅 
-> `npm init -y , npm install`
-> `npm i express, mongoose, cors dotenv http`
-> `npm i socket.io`
-> `npm install nodemon` (node의 실행을 도움 자동 리로딩)

## 몽고 DB 설치 
->https://www.mongodb.com/try/download/community-kubernetes-operator
-> 환경변수 설정 (path 추가)
-> 데이터 베이스 주소는 .env 파일을 활용 

## 웹소켓 세팅
 -> index.js에서 초기 http통신 초기세팅 
 -> utils 폴더에 io관련 함수정리 

## 프론트엔드 세팅 

 -> 웹소켓 세팅 

## 백엔드 프론트엔드 연결 테스팅 

-> 백엔드에서는 nodemon사용 ( 자동 로딩 기능 )

## 유저 로그인 기능 

-> 프론트엔드에서 보낸 userName과 콜백 함수를 io.js를 통해 받음 

## 유저 정보 저장 
-> `Controllers` 폴더에 저장 
-> 재방문 유저, 새로운 유저를 구분하여 저장한다. (유저이름과 토큰값으로 결정)
-> `io.js`에서 userController.saveUser를 import하여 저장하고 try catch문을 통해 오류를 잡아낸다 


## 메세지 주고 받는 기능 
 -> socket.id로 유저를 찾고(`userController`) 그에맞는 메세지를 저장한다(`chatController`).
 -> 메세지 저장 후 `emit`기능을 통해 메세지를 유저들에게 알려준다.(try-catch문을 통해 에러잡기)
