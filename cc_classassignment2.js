//Task 1 product filter
let products = [
    {name: "Iphone", price: 1500, category: "Electronics"},
    {name: "PS5", price: 500, category: "Electronics"},
    {name: "Banana", price: 2.00, category: "Produce"}
]

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
};

console.log(getProductsByCategory(products, "Electronics"));