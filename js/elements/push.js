define('elements/push', ['element-loader'], function(load) {
    var node = document.querySelector('.push-container');
    load('elements/push.html', node, function(ajax) {
    });
});