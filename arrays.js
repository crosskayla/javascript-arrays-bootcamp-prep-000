var grilledCheeseIngredients = [
  "bread",
  "mild cheese",
  "sharp cheese",
  "butter",
  "tomato",
  "garlic"
]

var tomatoSauceIngredients = [
  "tomato",
  "garlic",
  "olive oil",
  "basil",
  "oregano"
]

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningofArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningofArray(array, element){
  return array.unshift(element)
}

function addElementToEndofArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}

destructivelyRemoveElementFromEndOfArray