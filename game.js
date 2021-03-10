const container = document.querySelector('.container')
const clearButton = document.querySelector('#clear')

let squareNum = 16

function createGrid(squareNum);

function creadeDiv(num) {
    for (let i = 0; i < num * num; i++) {

    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}
}
