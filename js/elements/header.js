define('elements/header', ['element-loader'], function(load) {
    "use strict";
    var node = document.querySelector('.header-container');
    load('elements/header.html', node, function(ajax) {
    });
});