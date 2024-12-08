import { Product, taxCalculation } from './06-function-destructuring'; //Con Ctrl + espacio aparece lo que puedo importar

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 300
    },
    {
        description: 'iPad',
        price: 600
    }
];

//Tax = 0.21%
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.21
});

console.log('Total', total);
console.log('tax', tax);
