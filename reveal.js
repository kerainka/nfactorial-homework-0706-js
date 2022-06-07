 /* *Футбольная команда Далиды* / *Чайная Далиды* используя:

1. ---Переменные - let, const
2. ---Типы данных - string, number, boolean, null, undefined
3. ---Объекты - создание, добавление и удаление свойства (через прямые скобки тоже), добавление функции в объект
4. ---Массивы - использовать все методы, которые мы прошли. Не забывать про map, filter, rest и spread операторы. Еще slice ;)
5. ---Сравнения - нестрогое и строгое, условный оператор, оператор нулевого слияния, преобразование к логическому типу, switch
6. ---Циклы - for, while, do while
7. ---Функции - обычные, function expression, arrow functions, destructuring
8. ---Импорт и экспорт - named export & import, export & import as, default export & import */

import { SHOP_NAME, ADDRESS as AD, FIRST_SELLER, SECOND_SELLER, BADGE } from './const.js';
import receiptMaker from './receiptMaker.js';

console.log(SHOP_NAME);
console.log(AD);
console.log(FIRST_SELLER);

let employees = 2;
let shopIsOpen = false;

if (!!employees) {
    shopIsOpen = true;
    console.log("Shop is open");
}

let customer = undefined;

console.log(customer ?? "default customer");

let basket = null;
/* console.log(basket); */

let menu = ["croissant", "chocolate cake", "doughnut", "birthday cake"]
let drinks = ["latte", "mocha", "cappuccino", "black tea", "milk tea"]

let products = [
    {
        name: "cake",
        price: 2000,
        best_before: "02.09.2022"
    },
    {
        name: "doughnut",
        price: 105,
        best_before: "09.05.2022"
    }
]

function deleteProduct(id) {
    products = products.slice(0, id).concat(products.slice(id + 1));
}

deleteProduct(0);

const addProduct = (product) => {
    products.push(product);
}

const addProductUnshift = (product) => {
    products.unshift(product);
}

const addProducts = function (...productsToAdd) {
    for (const key in productsToAdd) {
        addProduct(productsToAdd[key]);
    }
}

let product = {
    name: "croissant",
    price: 1800,
    best_before: "01.08.2022",
};
addProduct(product);
addProductUnshift(product);

addProducts(product, product);
console.log(products)

product.label = "red";
delete product.label;

let key = "label-color";
product[key] = "red";
delete product[key];

receiptMaker.setProduct(products[0]);
receiptMaker.print();

let sum = 0;
do {
    sum += products[0].price;
 } while (sum < 5000);
console.log(sum);

if (sum == "5040") {
    console.log("SHOULD PRINT");
}

if (sum === "5040") {
    console.log("DO NOT PRINT");
}

if (sum > 5000 && sum < 5050) {
    console.log("sum > 5000 && sum < 5050");
}

switch (sum) {
    case 5000:
        console.log("Sum is 5000");
        break;
    case 5040:
        console.log("Sum is 5040");
        break;
    default:
        console.log("Sum is unknown");
        break;
}

const cheapProducts = products.filter(product => product.price < 200);
const getNames = function (filteredProducts) {
    return filteredProducts.map(p => p.name).join(', ');
}
console.log(`Cheap products: ${getNames(cheapProducts)}`);

while (products.length > 0) {
    products.pop();
    if (product.length > 0) {
        products.shift();
    }
} 
console.log(products);

const sumPrices = (a, b, c) => {
    return a + b + c;
}

const prices = [100, 150, 300];
console.log(sumPrices(...prices));
