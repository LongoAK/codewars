// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  recipe;
  available;
  let hash = {};
  for (const ingredient in available) {
    hash[ingredient] = Math.floor(available[ingredient] / recipe[ingredient]);
  }

  return Object.keys(recipe).filter(
    (el) => !Object.keys(available).includes(el)
  ).length > 0 || Math.min(...Object.values(hash)) === 0
    ? 0
    : Math.min(...Object.values(hash).filter((el) => el > 0));
}

// recipe = { flour: 500, sugar: 200, eggs: 1 };
// available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(
//   cakes(recipe, available),
//   2,
//   "Wrong result for example #1"
// );

// recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// available = { sugar: 500, flour: 2000, milk: 2000 };
// console.log(cakes(recipe, available), 0, "Wrong result for example #2");

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000, apples: 15, oil: 20 };
console.log(cakes(recipe, available), 0, "Wrong result for example #2");
