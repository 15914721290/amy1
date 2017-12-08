//中转后台接口列表
//创建者：womendi@qq.com
//日期：2017-11-28
var express = require('express');
var router = express.Router();

var sv = require('./config');




//集中模块接口
//用户模块接口
var user = require('./user');
router=user(router);

//单独接口
//收藏接口 /api/mine/collect
router.get('/mine/collect',(req,res,next)=>{
    res.json({'msg':'收藏成功'});
});

module.exports=router;