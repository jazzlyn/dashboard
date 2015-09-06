define('elements/dashboard', ['element-loader'], function(load) {
    var node = document.querySelector('.dashboard-container');
    load('elements/dashboard.html', node, function(ajax) {
        require(['elements/dashboard/sidebar']);
    });
});