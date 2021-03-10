const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear')

let squareNum = 16;

function createDiv(num) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}
