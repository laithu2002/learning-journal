const products = [
  { name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { name: "Headphones", price: 79, category: "Electronics", inStock: false },
  { name: "Desk Chair", price: 349, category: "Furniture", inStock: true },
  { name: "Notebook", price: 12, category: "Stationery", inStock: true },
  { name: "Monitor", price: 529, category: "Electronics", inStock: true },
  { name: "Pen Set", price: 18, category: "Stationery", inStock: false },
];


// Exercise 1: .map()
// const productNames = products.map(function(product) {
//	return product.name;
// })

// console.log(productNames);



// What .map() does:
// It loops through every item in the array, does something to it,
// and returns a NEW array with the results.
// Here we looped through every product and pulled out just the name.
// The word "product" represents one item at a time as it loops through.

// ---------------------------------------------------------------------


// Exercise 2: .filter()
// const inStockProd = products.filter(function(product) {
//	if (product.inStock == true) {
//	return product;
// }
// })

// console.log(inStockProd);



// What .filter() does:
// It loops through every item in the array, checks a condition,
// and returns a NEW array with only the items that pass the condition.
// Here we checked if inStock was true and returned only those products.

// ---------------------------------------------------------------------


// Exercise 3: .filter() with 2 conditions
const conditionalProd = products.filter(function(product) {
	if ((product.inStock == true) && (product.category == "Electronics")) {
	return product;
}
})

console.log(conditionalProd);

