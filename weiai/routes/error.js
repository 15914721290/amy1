//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (req,res,err)=>{
    var err = new Error('Not Found');
    err.status = 404;
    var site = {title:'您访问的页面出错了_唯爱健康网',keywords:'',description:'',path:global.path,haveCss:0};
	res.render('common/error', { site:site,msg:'Not Found...'});
};