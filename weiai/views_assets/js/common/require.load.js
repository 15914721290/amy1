var loadConf = {
    'jquery':{name:'jquery',type:'js',path:'js/common/',filename:'jquery_v1.11.0'},
    'html5shiv':{name:'html5shiv',type:'js',path:'js/common/',filename:'html5shiv'},
    'respond':{name:'respond',type:'js',path:'js/common/',filename:'respond.min'},
    'lazyload':{name:'lazyload',type:'js',path:'js/jqplugin/',filename:'jquery.lazyload_v1.9.3'},
    'cookie':{name:'cookie',type:'js',path:'js/jqplugin/',filename:'jquery.cookie'},
    'cmapp':{name:'cmapp',type:'js',path:'js/common/',filename:'cmapp'},
    'common':{name:'common',type:'js',path:'common/',filename:'common'}
    
};
if(loadAction!=undefined){
    if(loadAction.length>0){
        for(v in loadAction){
            loadConf[loadAction[v].name]=loadAction[v];
        }
    }
}
var loadVer = '2017112300012';//版本控制
var loadObj = rConcat(loadConf,loadVer);
require.config({
    baseUrl:'',
　　paths: loadObj[0]
});
// console.log(JSON.stringify(loadObj));
console.log('loading..start');
require(['jquery'], function (jQuery){
    window.jQuery=jQuery;
    window.$=jQuery;
    require(loadObj[1], function (){
　　　　require(loadObj[2], function (){
    　　　　require(loadObj[3], function (){
        　　　　require(loadObj[4], function (){
            　　　　console.log('loading..end');
            　　});
        　　});
    　　});
　　});
});