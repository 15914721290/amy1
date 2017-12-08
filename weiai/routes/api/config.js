//api接口配置文件
//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = ()=>{
    var svurl = [
        {'url':'http://tt.100cb.cn:3002','name':'测试环境'},
        {'url':'http://m.aiplat.com','name':'正式环境'}
    ];
    //0为测试环境，1为正式环境
    var sv = svurl[0];
    return sv;
}