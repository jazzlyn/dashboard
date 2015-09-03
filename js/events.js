define('events', [], function() {
    console.log("events loaded");
    $('#login').on('submit', function(event) {
        event.preventDefault();
        $('.login-element').hide();
        $('.dashboard-container').show();
    });
});