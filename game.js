const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear')

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
  }
  
  function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
  
  function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      gridElement.addEventListener("mouseover", changeColor);
      container.appendChild(gridElement);
    }
  }
  