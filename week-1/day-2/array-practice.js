const products = [
  { name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { name: "Headphones", price: 79, category: "Electronics", inStock: false },
  { name: "Desk Chair", price: 349, category: "Furniture", inStock: true },
  { name: "Notebook", price: 12, category: "Stationery", inStock: true },
  { name: "Monitor", price: 529, category: "Electronics", inStock: true },
  { name: "Pen Set", price: 18, category: "Stationery", inStock: false },
];


// Exercise 1: .map()
const productNames = products.map(function(product) {
	return product.name;
})

console.log(productNames);