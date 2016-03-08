require('../less/app.less');

console.log('something');

var $ = require('jquery');
$(document).ready(function() {
	$('h1').html('new content');
});
