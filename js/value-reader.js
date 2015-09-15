var temp = 25;
var currentTemp;

setInterval (function() {
    if (currentTemp !== temp) {
        document.querySelector('.temp-value').innerHTML = temp + '&deg;C';
        currentTemp = temp;
        if (temp < 14) {
            document.querySelector('.temp-color').className = 'icon-temperatire temp-color temp-blue';
        } else if (temp >= 14 && temp <= 25) {
            document.querySelector('.temp-color').className = 'icon-temperatire temp-color temp-yellow';
        } else {
            document.querySelector('.temp-color').className = 'icon-temperatire temp-color temp-red';
        }
    }
}, 500);