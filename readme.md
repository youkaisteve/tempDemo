# Outline

## 开发所需环境及组件说明
nodejs v6
- 官网：https://nodejs.org/
- 安装：https://nodejs.org/download/release/latest-v6.x/
根据操作系统选择对应的安装包
- 参考文档：https://nodejs.org/docs/latest-v6.x/api/index.html

npm - 包管理工具，安装好nodejs后就有npm
- 官网：https://www.npmjs.com/
- 参考文档：https://docs.npmjs.com/

express4 - 基于nodejs的web开发框架
- 官网：http://expressjs.com/
- 安装：npm install express --save
- 参考文档：https://expressjs.com/en/4x/api.html

postman - api请求模拟工具（测试稍复杂一些的service时用）
- 官网：https://www.getpostman.com/
- 安装：https://www.getpostman.com/apps 根据操作系统选择对应的安装包
- 参考文档：https://www.getpostman.com/docs/v6/

## Nodejs开发环境搭建

### 安装Nodejs

通过安装包安装nodejs后，可通过以下命令查看版本，判断是否正确安装
```bash
node --version
npm --version
```

### 使用npm初始化package.json

首先打开命令行，定位到项目所在目录（随意创建一个），当前例子中创建了一个名demo的文件夹

输入以下命令：
```bash
npm init

# 屏幕出现以下提示，一直按回车键即可
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (demo)
version: (1.0.0)
description:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/youkai/workspace/demo/package.json:

{
  "name": "demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {},
  "description": ""
}


Is this ok? (yes)
```
此时demo目录下就已生成package.json （[什么是package.json](https://docs.npmjs.com/files/package.json)），内容如上所示


**引入expressjs开发框架**

npm官方源由于不可避免的原因比较慢，而淘宝对npm做了镜像，可以使用这个镜像来替换官方源,执行以下命令：
```bash
npm config set registry https://registry.npm.taobao.org
```

在demo目录下，使用npm install 命令安装expressjs
```bash
npm install express --save
```

安装成功后，在package.json文件中可以看到多了一些内容``dependencies``,其下面的``"express": "^4.16.3"``，指定了包名和版本号，同样在demo目录下生成了``node_modules``目录，该目录下即是项目所依赖的第三方包
```json
{
  "name": "demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3"
  },
  "devDependencies": {},
  "description": ""
}
```

接下来Hello World就要出场了......

在demo目录下新建``index.js``, 并输入如下内容：
```js
// index.js

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
```

然后再命令行中输入
```bash
node index
```

看到命令行中打印以下内容，说明server启动成功
```bash
server is listening on 3000
```

**测试**


在浏览器中输入``http://locahost:3000/``即可看到返回内容``Hello World``


上面已经定义了最简单的service，即根目录，也可以定义自己的路由，请参考官方路由的[routing](http://expressjs.com/en/guide/routing.html)说明，讲得很详细
