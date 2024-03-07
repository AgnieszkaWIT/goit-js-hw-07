function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const firstBoxSize = 30;
let lastBoxSize = 0;

document.querySelector("[data-create]").addEventListener("click", () => {
  amount = document.querySelector("input").value;
  createBoxes(amount);
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxesRoot = document.getElementById("boxes");

  for (let i=0; i<amount; i++){
    const boxItem = document.createElement("div");
    boxItem.style.width = "30px";
    boxItem.style.height = `${lastBoxSize > firstBoxSize ? lastBoxSize : firstBoxSize}px`;
    boxItem.style.backgroundColor =  getRandomHexColor();
    boxItem.classList.add("box-item");
    boxesRoot.appendChild(boxItem);
    lastBoxSize = (lastBoxSize > firstBoxSize ? lastBoxSize : firstBoxSize) + 10;
  }

}

function destroyBoxes() {
  
}