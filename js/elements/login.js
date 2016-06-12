define('elements/login', ['element-loader'], function(load) {
    "use strict";
    var node = document.querySelector('.login-container');
    load('elements/login.html', node, function(ajax) {
        // event listener for submit form on login screen
        var onSubmit = function(event) {
            event.preventDefault();
            if (validateForm()) {
                document.querySelector('.login-container').style.display = 'none';
                document.querySelector('.push-container').style.display = 'block';
                document.querySelector('.dashboard-container').style.display = 'block';
            }
        }
        document.querySelector('#login').addEventListener('submit', onSubmit);
    });
    // credentials validation
    var validateForm = function() {
        var username = node.querySelector('[name=username]').value;
        var password = node.querySelector('[name=password]').value;
        if (('jasmin' === username) && ('12345' === password)) {
            return true;
        } else {
            alert ("Login failed, wrong username or password!");
            return false;
        }
    }
});