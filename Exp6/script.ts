document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const changeColor = document.getElementById('colorButton');
    if (messageElement && changeColor) {
        changeColor.addEventListener('click',()=>{
            const randomColor = getColor();
            messageElement.style.color = randomColor
        })
    }
});

function getColor():string{
    const letters = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0 ; i < 6; i++){
        color+=letters[Math.floor(Math.random()*16)]
    }

    return color;
}