const express = require('express');
const http=require("http");
const bodyParser=require("body-parser");
const cors = require('cors');
const routerReq = require('../src/data/router/req_idea');

let app = express();

//告诉express去使用webpack-dev-middleware和webpack.config.js
// 配置一个基础文件
let server = http.createServer(app);
// Serve the files on port 3000.
server.listen(3000, function () {
  console.log('监听3000端口');
});
app.use( bodyParser.urlencoded({extended:false}) );
app.use( cors({
  origin:'*',
  // origin: ["http://localhost:8000","http://127.0.0.1:8000","http://localhost:8080","http://127.0.0.1:8080","http://localhost:8080","http://127.0.0.1:5500"],//可配置允许域名和端口["http://127.0.0.1","http://127.0.0.1:3000","http://127.0.0.1:8080","http://127.0.0.1:5500"]
  credentials: true
}) );
app.use('/req', routerReq);