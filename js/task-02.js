const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const tableWithIngredientLi = ingredients.map(ingredient => {
  let ingredientAsListElement = document.createElement("li")
  ingredientAsListElement.textContent = ingredient
  ingredientAsListElement.classList.add('item')
  return ingredientAsListElement
})
document.querySelector("ul#ingredients").append(...tableWithIngredientLi);