define('elements/login', ['element-loader'], function(load) {
    var node = document.querySelector('.login-container');
    load('elements/login.html', node, function(ajax) {
        $('#login').on('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                $('.login-container').hide();
                $('.dashboard-container').show();
            }
        });
        /* handle events for inputs in login */
        $.material.input("#login input");
        $.material.attachInputEventHandlers();
        function validateForm() {
            var username = node.querySelector("[name=username]").value;
            var password = node.querySelector("[name=password]").value;
            if (('jasmin' === username) && ('12345' === password)) {
                return true;
            } else {
                alert ("Login failed, wrong username or password!");
                return false;
            }
        }
     });
});