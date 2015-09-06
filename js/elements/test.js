define('elements/test', ['element-loader'], function(loadTemplate) {
    loadTemplate('elements/test.html', document.getElementById('test'), function(ajax) {
        console.log(ajax);
        var testNode = document.getElementById('test');
        console.log(testNode.querySelector('button'));
        testNode.querySelector('button').addEventListener('click', function () {
            console.log('click');
        });
    });
});