<h1>웹 디파인더</h1>

<h4>개발시</h4>

<h5>백엔드<h5>
cd backend
yarn d

<h5>프론트엔드</h5>
cd frontend
yarn d

<h5>데이터베이스</h5>
mongod --dbpath ~/db --fork --syslog

<h4>배포 시</h4>

<h5>백엔드(프론트엔드 서브) 서버 시작</h5>

cd build/backend
node index.js

<h5>pm2 사용 시 </h5>
pm2 start index.js -i 0

<h5>데이터베이스</h5>

mkdir /(dbpath)/
mongod --dbpath /(dbpath)
