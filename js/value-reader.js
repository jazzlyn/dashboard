"use strict";
var temp = 25;
var currentTemp;
// interval for temperature color change depend on temperature
setInterval (function() {
    if (currentTemp !== temp) {
        var tempValue = document.querySelector('.temp-value');
        if (!tempValue) {
            return;
        }
        tempValue.innerHTML = temp + '&deg;C';
        currentTemp = temp;
        var tempColor = document.querySelector('.temp-color');
        if (temp < 14) {
            tempColor.className = 'icon-temperatire temp-color temp-blue';
        } else if (temp >= 14 && temp <= 25) {
            tempColor.className = 'icon-temperatire temp-color temp-yellow';
        } else {
            tempColor.className = 'icon-temperatire temp-color temp-red';
            document.querySelector('.push-container').style.display = 'block';
            document.querySelector('.alert-text').innerHTML = 'In Raum xy hat es im Moment ' + temp + '&deg;C!';
        }
    }
}, 500);

// if temp > 25, warning on push-element