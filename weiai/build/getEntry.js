//获得所有单独打包的js
var app = require('express');
var path = require('path');
var glob = require('glob');
global.actionsDir = path.join(__dirname, 'views_actions');
var aa = (globPath)=>{
    var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    // 正确输出js路径
    pathname = tmp.splice(0, 1) + '/' + basename; 
    entries[pathname] = entry;
    //index-->index,index.js-->./index-->./index/index.js
    console.log(basename+'--1>'+tmp+'--2>'+pathname+'--3>'+entry);
    //{ './index': './index/index.js' }
    console.log(entries);
    
  });

  return entries;
}

aa('../views_actions/single/*.js');