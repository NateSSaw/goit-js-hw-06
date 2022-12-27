function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const divToAdd = document.createElement("div");
    divToAdd.style.height = `${30 + 10 * i}px`;
    divToAdd.style.width = `${30 + 10 * i}px`;
    divToAdd.style.background = getRandomHexColor();
    elementsToAdd.push(divToAdd);
  }
  return elementsToAdd;
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});
console.log(inputNum.value);
btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
