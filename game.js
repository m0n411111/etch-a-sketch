const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear')

let squareNum = 16;

function createDiv(num) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.setAttribute('style', `width: ${num}px; height: ${num}px`);
    container.appendChild(div);
}
