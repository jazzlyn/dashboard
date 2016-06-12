define('element-loader', [], function() {
    "use strict";
    return function(url, node, onComplete) {
        if (!node) {
            console.error('no node for url:' + url);
            return;
        }
        // new ajax request
        var ajax = new XMLHttpRequest();
        // when ajax is needed
        ajax.onload = function(event) {
            // new empty div element is created
            var wrapper = document.createElement('div');
            // response text from ajax request is put in that wrapper
            wrapper.innerHTML = event.target.responseText;
            // loop for every new node in the wrapper
            for (var i = 0; i < wrapper.childNodes.length; i++) {
                node.appendChild(wrapper.childNodes[i]);
            }
            // when ready, mark complete
            if (onComplete) {
                onComplete(event.target);
            }
        };
        // send request back
        ajax.open('GET', url, true); ajax.send();
    };
});