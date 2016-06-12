define('app', ['elements/header', 'elements/push', 'elements/login', 'elements/dashboard'], function() {
    "use strict";
    document.querySelector('.push-container').style.display = 'none';
    document.querySelector('.dashboard-container').style.display = 'none';
});