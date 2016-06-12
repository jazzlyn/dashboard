define('elements/push', ['element-loader'], function(load) {
    "use strict";
    var node = document.querySelector('.push-container');
    load('elements/push.html', node, function(ajax) {
        var alertNode = node.getElementsByClassName('alert')[0];
        var alertWrapper = alertNode.parentNode;
        alertWrapper.removeChild(alertNode);
        var Alert = {
            _alert: function(className, message) {
                var node = alertNode.cloneNode(true);
                node.className = node.className + ' ' + className;
                node.getElementsByClassName('alert-body')[0].textContent = message;
                alertWrapper.appendChild(node);
            },
            warn: function(message) {
                var className = 'alert-warning';
                this._alert(className, message);
            },
            error: function(message) {
                var className = 'alert-danger';
                this._alert(className, message);
            },
            info: function(message) {
                var className = 'alert-info';
                this._alert(className, message);
            },
            success: function(message) {
                var className = 'alert-success';
                this._alert(className, message);
            }
        };
        Alert.error('test error');
        Alert.warn('test warn');
        Alert.info('test info');
        Alert.success('test success');
    });
});