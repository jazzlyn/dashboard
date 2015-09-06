define('element-loader', [], function() {
    return function(url, node, onComplete) {
        var ajax = new XMLHttpRequest();
        ajax.onload = function(event) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = event.target.responseText;
            for (var i = 0; i < wrapper.childNodes.length; i++) {
                node.appendChild(wrapper.childNodes[i]);
            }
            if (onComplete) {
                onComplete(event.target);
            }
        }; ajax.open('GET', url, true); ajax.send();
    };
});