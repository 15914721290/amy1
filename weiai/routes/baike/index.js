//百科模块路由
var express = require('express');
var router = express.Router();
var path = require('path');


//详情
router.get('/lx:id.html', (req, res, next)=>{
	var site = {title:'{百科文章标题}_唯爱百科',keywords:'{百科文章标题}',description:'正文第一段内容',path:global.path,haveCss:0};
	var assignObj = {site:site};
	res.render('baike/info', assignObj);
});
router.get('/lx:id', (req, res, next)=>{
	res.redirect(301,'/b/lx'+req.params.id+'.html');
});
//详情

//栏目
router.get('/:id', (req, res, next)=>{
	var site = {title:'【{栏目名}】{百科副标题}_唯爱百科',keywords:'{栏目名},{百科副标题}',description:'唯爱两性百科频道道提供{栏目名}相关知识，包 括{百科副标题}',path:global.path,haveCss:0};
	var assignObj = {site:site};
	res.render('baike/column', assignObj);
});
//栏目

//频道
router.get('/', (req, res, next)=>{
	var site = {title:'两性百科_性生活常识_性爱技巧_ 性姿势_性心理_唯爱百科',keywords:'两性百科,性生活常识,性爱技巧,性姿 势,性心理',description:'唯爱两性百科频道提供实用的两性生活常识、 性爱技巧、性姿势、性心理等，您身边的两性 生活必备指南',path:global.path,haveCss:0};
	var assignObj = {site:site};
	res.render('baike/index', assignObj);
});
//频道

module.exports = router;
