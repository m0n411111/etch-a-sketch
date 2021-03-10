const container = document.querySelector('#container');
const userInput = document.getElementById('quantity');
const clearButton = document.querySelector('button');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
};

function changeSize() {
  container.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns", `repeat(${userInput.value}, 1fr)`
  );
  container.setProperty(
    "grid-template-columns", `repeat(${userInput.value}, 1fr)`
  );

  for (let i = 0; i < userInput.value * userInput.value; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      container.appendChild(div);
  }
}

const square = document.querySelector("div");
square.addEventListener("mouseover", (e) => {
  e.target.classList.replace("square", "color");
});

userInput.addEventListener("change", changeSize);

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  userInput.value = "";
  container.setProperty("grid-template-columns", `repeat(16,1fr)`);
  container.setProperty("grid-template-rows", `repeat(16,1fr)`);
  createGrid();
});

createGrid();