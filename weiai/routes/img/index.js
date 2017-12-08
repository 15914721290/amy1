//图片频道模块路由
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:type-:page', (req, res, next)=>{
	console.log(req.params);

	var site = {title:'图片频道',keywords:'这是关键词设置',description:'这是网站描述设置',path:global.path,haveCss:'/css/apps/img_index.css'};
	var assignObj = {site:site};
	res.render('img/column', assignObj);
});
router.get('/:id.html', (req, res, next)=>{
	var site = {title:'图片频道',keywords:'这是关键词设置',description:'这是网站描述设置',path:global.path,haveCss:0};
	var assignObj = {site:site};
	res.render('img/details', assignObj);
});
router.get('/', (req, res, next)=>{
	var site = {title:'美女图片,性爱图片,性交图片,男女做爱图片_唯爱图库',keywords:'美女图片,性爱图片,性交图片,男女做爱图片',description:'唯爱两性图片频道提供最新最热门的两性图片，高清美女图、性爱图、性交图、男女做爱图，旨在传达健康的性教育观念。',path:global.path,haveCss:'/css/apps/img_index.css'};
	var assignObj = {site:site};
	res.render('img/index', assignObj);
});

module.exports = router;
