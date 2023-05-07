import { IProduct } from './iProduct';

export class Drinks implements IProduct {
  private name = 'Drinks';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
