const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((item) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = item;

  return listEl;
});

ingredientsList.append(...list);
