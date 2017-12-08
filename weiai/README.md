<h1>express-multipage 多页面应用</h1>
<h2>express+nodejs+less+html5+css3+requirejs+jquery+lazyload</h2>
<h2>1、克隆项目代码:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ git clone https://github.com/womendi/express-multipage.git</h4>
<h2>2、cd到项目根目录:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ cd express-multipage</h4>
<h2>3、安装依赖:（序号3及以下操作建议使用Xshell）</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ npm install</h4>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;#建议使用淘宝npm.taobao.org中cnpm代替默认的 npm:</h3>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;$ npm install -g cnpm --registry=https://registry.npm.taobao.org</h4>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;$ cnpm install</h4>
<h2>4、less生成css,webpack打包css,js(需要兼容ie8时使用requirejs加载，不用webpack打包的js):</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ npm run build</h4>
<h2>5、启动应用:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ npm start</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;看到 Listening on port http://localhost:3002 ，打开应用:http://localhost:3002</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;#建议服务器部署时修改端口3002为其他,修改位置./build/www</h4>
<h2>6、兼容性:</h2>supervisor
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容ie8:测试了win10中的ie11浏览器选用文档模式为IE8正常、win7中IE8浏览器正常;IETester0.5.4(按钮新建IE各版本)测试只有ie10与默认版本正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容百度浏览器:测试了win10中的百度浏览器版本8.7正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容QQ浏览器:测试了win10中的QQ浏览器版本9.7正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容firefox:测试了win10中的firefox浏览器版本号57.0正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容chrome:测试了win10中的chrome浏览器版本号62正常</h4>