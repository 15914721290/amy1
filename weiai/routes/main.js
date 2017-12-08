//路由设置
//创建者：womendi@qq.com
//日期：2017-11-28
module.exports=(app)=>{
	//views中html的js,css,img须加前缀<%=site.path%>,使用绝对地址
	//开发环境写localhost，生产环境写域名
	global.path = 'http://localhost:'+global.port;
	var routeArr = [
		{'name':'api','url':'/api','path':'./api/main'},//中转后台接口路由，固定
		{'name':'index','url':'/','path':'./index/index'},//首页路由,频道路由也在里面
		{'name':'b','url':'/b','path':'./baike/index'},//百科路由
		{'name':'img','url':'/pics','path':'./img/index'},//图库路由
	];
	var len = routeArr.length;
	for(var i=0;i<len;i++){
		app.use(routeArr[i].url,require(routeArr[i].path));
	}
	var err = require('./error');
    app.use(err);
}