import { Drinks } from './product/drinks';
import { ProductPersonDecorator } from './product/productPersonDecorator';
import { ProductCustomizationDecorator } from './product/productCustomizationDecorator';

const drinks = new Drinks();
const drinksWith = new ProductPersonDecorator(drinks);
const customizedDrinks = new ProductCustomizationDecorator(drinks);

console.log(drinks.getName(), drinks.getPrice());
console.log(customizedDrinks.getName(), customizedDrinks.getPrice());
console.log(drinksWith.getName(), drinksWith.getPrice());
