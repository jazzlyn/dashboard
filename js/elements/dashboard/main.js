define('elements/dashboard/main', ['element-loader'], function(load) {
    "use strict";
    var node = document.querySelector('.main-container');
    load('elements/dashboard/main.html', node, function(ajax) {
    });
});