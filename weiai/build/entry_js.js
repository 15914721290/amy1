require('./entry_common.js');

//全局jquery
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

require('../views_assets/js/common/html5shiv.js');

require('../views_assets/js/jqplugin/jquery.lazyload_v1.9.3.js');

//全局cmapp.js  里面方法不用修改
var cmapp= require('../views_assets/js/common/cmapp_webpack.js');
window.cm= cmapp();

//公共js方法
require('../views_actions/common/common.js');