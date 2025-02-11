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

// Task 2

function applydicount(products, discountRate){
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }

    ))
}

console.log(applydicount(products,.1))

// task 3 

let sales = [ 250, 400, 150, 900, 1200]

function calculateTotalRevenue(sales){
    return sales.reduce((total, sale) => total + sale, 0)
}

console.log(calculateTotalRevenue(sales))

// Task 4
let employee = {
    name: "John doe", 
    salary: 50000,
    position: "manager" 
};

function updateSalary(employee, percentageIncrease){
    return employee.salary += employee.salary + percentageIncrease
}

console.log(updateSalary(employee, 0.1))