const container = document.querySelector("#container");

function createGrid(gridSize = 16) {
  container.innerHTML = "";
  for (i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    container.appendChild(newDiv);
  }
}

createGrid();

function addHover() {
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.classList.add("hovered");
    });
  });
}

addHover();

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let newGridSize = parseInt(prompt("Enter a number"));
  document.documentElement.style.setProperty("--sides", newGridSize);
  createGrid(newGridSize);
  addHover();
});
