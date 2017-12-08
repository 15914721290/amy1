//频道路由
module.exports = (router)=>{
	//文章详情路由
		router.get('/a/:date_id', (req, res, next)=>{
			var site = {title:'【{栏目名}】{栏目副标题}_{频道名}频道',keywords:'{栏目名},{栏目副标题}',description:'唯爱健康网{频道名}频道提供{栏目名}相关知识，包括{栏目副标题}。',path:global.path,haveCss:0};
			var assignObj = { site:site};
			res.render('channel/info', assignObj);
		});

	  //两性保健频道路由
    router.get('/lxbj', (req, res, next)=>{
			var site = {title:'性爱技巧_两性技巧_男性女性保健 知识及生理常识_两性保健频道',keywords:'性爱技巧,两性技巧,男性保健,女性保健,女性生理周期',description:'唯爱健康网两性保健频道提供女性生理周期和男性保健知识，分享两性常识和性爱技巧，让两性话题不再神秘。',path:global.path,haveCss:0};
			var assignObj = { site:site};
			res.render('channel/index', assignObj);
		});
	  //两性保健频道-栏目路由
		router.get('/lxbj/:column_id', (req, res, next)=>{
			var site = {title:'【{栏目名}】{栏目副标题}_{频道名}频道',keywords:'{栏目名},{栏目副标题}',description:'唯爱健康网{频道名}频道提供{栏目名}相关知识，包括{栏目副标题}。',path:global.path,haveCss:0};
			var assignObj = { site:site};
			res.render('channel/column', assignObj);
		});

	  return router;
};