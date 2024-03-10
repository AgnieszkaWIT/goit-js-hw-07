const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientRoot = document.querySelector("#ingredients");

const ingredientItems = ingredients.map(ingredient => {
  var ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

ingredientRoot.append(...ingredientItems);
