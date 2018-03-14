/**
 * index.js
 */

// 引入express
var express = require('express')

var app = express();


// 设置路由根节点 / 
// 输出Hello World
app.get('/',function (req,res,next){
    res.send('Hello World')
})

var server = app.listen(3000,function(){
    console.log('server is listening on ' + server.address().port)
})