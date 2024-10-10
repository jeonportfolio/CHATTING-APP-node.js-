# 채팅앱 (백엔드 node.js) <br/>

## 백엔드 초기 세팅<br/>

-> 데이터베이스 세팅(1.유저 정보 ,2. 채팅 메세지 정보 ), 웹 소켓 세팅 <br/>
-> `npm init -y , npm install`<br/>
-> `npm i express, mongoose, cors dotenv http` express = 서버, mongoose = 데이터베이스, cors = 프론트 백엔드 연결 <br/>
-> `npm i socket.io`<br/>
-> `npm install nodemon` (node의 실행을 도움 자동 리로딩)<br/>

## 몽고 DB 설치 <br/>
->`https://www.mongodb.com/try/download/community-kubernetes-operator`<br/>
-> 환경변수 설정 (path 추가)<br/>
-> 데이터 베이스 주소는 .env 파일을 활용 <br/>


## 데이터 <br/>
-> Model에서 채팅과 유저정보를 저장 <br/>

## 웹소켓 세팅<br/>
 -> index.js에서 초기 http통신 초기세팅 -> app과 server(웹소켓)<br/>
 -> cors를 통해 localhost에서 제어 <br/>
 -> utils 폴더에 io관련 함수정리 <br/>

## 프론트엔드 세팅 <br/>

 -> 웹소켓 세팅 <br/>

## 백엔드 프론트엔드 연결 테스팅 <br/>

-> 백엔드에서는 nodemon사용 ( 자동 로딩 기능 )<br/>

## 유저 로그인 기능 <br/>

-> 프론트엔드에서 보낸 userName과 콜백 함수를 io.js를 통해 받음 <br/>

## 유저 정보 저장 <br/>
-> `Controllers` 폴더에 저장 <br/>
-> 재방문 유저, 새로운 유저를 구분하여 저장한다. (유저이름과 토큰값으로 결정) -> findOne함수<br/>
-> `io.js`에서 userController.saveUser를 import하여 저장하고 try catch문을 통해 오류를 잡아낸다 <br/>
-> `checkUser`로 유저정보 확인 <br/>
-> welcomeMessage 함수로 userid를 null로 하고 시스템 메세지로 설정 <br/>


## 메세지 주고 받는 기능 <br/>
 -> socket.id로 유저를 찾고(`userController`) 그에맞는 메세지를 저장한다(`chatController`).<br/>
 -> 메세지 저장 후 `emit`기능을 통해 메세지를 유저들에게 알려준다.(try-catch문을 통해 에러잡기)<br/>

## 채팅룸 만들기 <br/>
 -> Models에 `room.js`에서 채팅방 데이터베이스 생성 -> user.js, chat.js에 모두 추가한다. <br/>
 