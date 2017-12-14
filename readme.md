<h1>웹 디파인더</h1>

<h4>개발시</h4>

<h5>백엔드<h5>
cd backend
npm run d

<h5>프론트엔드</h5>
cd frontend
npm run start

<h5>데이터베이스</h5>
mongod --dbpath db

<h4>출시 시</h4>

<h5>백엔드(프론트엔드 서브) 서버 시작</h5>

cd build/backend
node index.js

<h5>데이터베이스</h5>

mkdir /(dbpath)/
mongod --dbpath /(dbpath)
