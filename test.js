const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  container.appendChild(newDiv);
}
