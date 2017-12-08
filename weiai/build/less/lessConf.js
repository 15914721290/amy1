//配置需要生成css的less
//创建者：womendi@qq.com
//日期：2017-11-30
module.exports = ()=>{
    //fromPath为less文件路径
    //toPath为生成css后的css文件路径
    //对应根目录为views_assets
    var cssArr=[
        {fromPath:'/css/less/cmstyle.less',toPath:'/css/apps/cmstyle.css',isCompress:false},
        {fromPath:'/css/less/common.less',toPath:'/css/apps/common.css',isCompress:false}
    ];
    return cssArr;
}