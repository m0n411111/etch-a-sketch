const container = document.querySelector(".container");
const clearBtn = document.querySelector(".change");
const resetBtn = document.querySelector(".reset");

let num = 16;

function createGrid(num) {

  for (let i = 0; i < num * num; i++) {

    const div = document.createElement("div");
    div.classList.add("square");
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    div.addEventListener('mouseover', changeColor);
    container.appendChild(div);
  }
}

function reset() {

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  createGrid(num);
}

function changeSize() {
  var userInput = prompt("Enter a new grid size:");

  if (userInput >= 1 && userInput <= 100) {

    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    createGrid(userInput);
  } else {
    alert("Enter a number between 1 - 100:");
    changeSize();
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = 'rgb(90, 90, 90)';
}

resetBtn.addEventListener('click', reset);
clearBtn.addEventListener('click', changeSize);
window.onload = createGrid(num);
