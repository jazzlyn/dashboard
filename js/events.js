define('events', function(DashBoard) {
    $('#login').on('submit', function(event) {
        DashBoard.server(
            function () {
                $('.login-container').hide();
                $('.dashboard-container').show();
        }, function () {
            alert('Login FAILED!!!');
        });
    });
});