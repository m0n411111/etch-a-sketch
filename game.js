const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear')

createGrid(16);

function createGrid(size) {
    let gridSize = size * size;
    for (let i = 1; 1 < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener("mouseover", changeColor);
        container.setAttribute('style', `gridTemplateColumns: repeat(${size}, 1fr); gridTemplateRows: repeat(${size}, 1fr)`);
        container.insertAdjacentElement('beforeend', div);
    }
}

function clear() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    createGrid(size);
  }

  function changeColor(e) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }

  function changeSize() {
    let newSize = prompt("Enter new size");
  
    if (newSize !== null) {
      newSize = parseInt(newSize);
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range");
        changeSize();
      } else {
        clear();
        createGrid(size);
      }
    }
  }
  
  clearButton.addEventListener('click', clear);