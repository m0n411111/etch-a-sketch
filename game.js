const container = document.querySelector(".container");
const clearButton = document.querySelectorAll(".clear");

let size = 16;

function createDiv(size) {

  for (let i = 0; i < size*size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(div);
  };
}

function changeColor(e) {

  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
  let userInput = prompt("Enter new size:");

  if (userInput < 1 || userInput > 64 || Number.isNaN(newSize)) {
    alert("Enter a number from 1-64 range");
    changeSize();
  } else {
    clearAll();
};
}

function clearAll() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(size);
}

