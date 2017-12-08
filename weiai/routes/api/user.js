//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (router)=>{
    //登陆接口 /api/user/log
    var prefix = '/user';
    var sv = require('./config');
    var http2 = require('../http2');
    router.get(prefix+'/log',(req,res,next)=>{
        http2(sv.url+'/cmapi/mine/log',{},'GET',(response,data)=>{
            res.json(data);
        },(err)=>{
            res.json({title:'登陆接口',msg:'Request error'});
        });
    });

    //注册接口 /api/user/reg
    router.get(prefix+'/reg',(req,res,next)=>{
        http2(sv.url+'/cmapi/mine/reg',{},'GET',(response,data)=>{
            res.json(data);
        },(err)=>{
            res.json({title:'注册接口',msg:'Request error'});
        });
    });

    return router;
}