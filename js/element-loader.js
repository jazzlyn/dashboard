define('template-loader', [], function() {
    return function(url, node, onComplete) {
        var ajax = new XMLHttpRequest();
        ajax.onload = function(event) {
            var div = document.createElement('div');
            div.innerHTML = event.target.responseText;
            for (var i = 0; i < div.childNodes.length; i++) {
                node.appendChild(div.childNodes[i]);
            }
            if (onComplete) {
                onComplete(event.target);
            }
        };
        ajax.open('GET', url, true); ajax.send();
    };
});