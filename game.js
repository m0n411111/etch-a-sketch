const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear')

window.addEventListener("load", setDefaultGrid);
clearButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    setGridSize(16);
    createGrid(16);
  }
  
  function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
  
  function createGrid(size) {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add('grid-element');
      container.appendChild(div);
    }
  }
  
  function changeSize() {
    let newSize = prompt("Enter new size");
  
    if (newSize !== null) {
      newSize = parseInt(newSize);
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range");
        changeSize();
      } else {
        clearGrid();
        setGridSize(newSize);
        createGrid(newSize);
      }
    }
  }
  
  function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
  }