//index模块路由
var express = require('express');
var router = express.Router();
var path = require('path');

//频道路由单独一个js
var pd = require('./channel.js');
router=pd(router);
//频道路由单独一个js

router.get('/search', (req, res, next)=>{
	res.redirect(301,'/search/k=两性');
});
router.get('/search/k=:id', (req, res, next)=>{
	var site = {title:req.params.id+'_唯爱健康网',keywords:'',description:'',path:global.path,haveCss:0};
	res.render('index/search', { site:site});
});
router.get('/sitemap.html', (req, res, next)=>{
	var site = {title:'网站地图_唯爱健康网',keywords:'',description:'',path:global.path,haveCss:0};
	res.render('index/sitemap', { site:site});
});
router.get('/index.html', (req, res, next)=>{
	res.redirect(301,'/');
});
router.get('/', (req, res, next)=>{
	//res.render第二个参数{}必须包含site。path:global.path以对应静态资源引用path而使用绝对地址
	//haveCss默认为0，必填。非为0时即填真实views_asssets下css文件夹中对应的css文件
	
// var http2 = require('./http2');
// http2(sv+'/cmapi/mine/log',{},'GET',function(response,data){
// 	res.json(data);
// },function(err){
// 	res.json({title:'error',msg:'Request error'});
// });

    

	var site = {title:'唯爱健康网_中国两性生活健康门户网站',keywords:'两性网,两性健康网,两性生活,两性健康,两性技巧,两性关系,两性情感,两性心理,两性保健,两性话题,两性图片',description:'唯爱健康网是国内专业的两性网站，分享两性健康知识和两性图片，交流性教育、两性关 系、两性技巧、夫妻生活、两性情感、两性心 理、两性保健等话题。',path:global.path,haveCss:0};
	var list2 = [{name:'哈哈哈哈哈哈哈哈哈哈哈哈1'},{name:'这是关键词设置哈哈2'},{name:'哈这是关键词设置这是关键词设置哈3'},{name:'哈哈这是关键词设置4'},{name:'哈哈5'},{name:'哈这是关键词设置哈6'},{name:'哈哈7'},{name:'哈哈8'}];
	var assignObj = { site:site,list2:list2};
	res.render('index/index', assignObj);
});
module.exports = router;
