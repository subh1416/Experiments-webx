document.addEventListener('DOMContentLoaded', function () {
    var messageElement = document.getElementById('message');
    var changeColor = document.getElementById('colorButton');
    if (messageElement && changeColor) {
        changeColor.addEventListener('click', function () {
            var randomColor = getColor();
            messageElement.style.color = randomColor;
        });
    }
});
function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
