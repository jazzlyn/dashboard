define('events', [], function() {
    console.log("events loaded");
    $('#login').on('submit', function(event) {
        event.preventDefault();
        $('.login-container').hide();
        $('.dashboard-container').show();
    });
});