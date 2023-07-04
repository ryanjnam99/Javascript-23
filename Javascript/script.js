const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);
  
  
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);
console.log(sortedGroceries);







