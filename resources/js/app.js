require('../less/app.less');

require('bootstrap');

console.log('something');

var $ = require('jquery');
$(document).ready(function() {
	$('h1').html('new content');
});
