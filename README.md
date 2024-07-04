## 백엔드 초기 세팅

-> 데이터베이스 세팅(1.유저 정보 ,2. 채팅 메세지 정보 ), 웹 소켓 세팅 
-> npm init -y , npm install
-> npm i express, mongoose, cors dotenv http
-> npm i socket.io
-> npm install nodemon (node의 실행을 도움 자동 리로딩)

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

-> 프론트 엔드에서 prompt로 이름 입력창을 띄우고 
-> 프론트 엔드 채널에서 socket을 통한 emit기능을 이용하여 backend 채널로 이름 전송 

## 메세지 주고 받는 기능 