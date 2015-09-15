define('elements/dashboard/sidebar', ['element-loader'], function(load) {
    var node = document.querySelector('.sidebar-container');
    load('elements/dashboard/sidebar.html', node, function(ajax) {
    });
});