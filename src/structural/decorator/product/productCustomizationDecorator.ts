import { ProductDecorator } from './productDecorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (+ de uma dose)';
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
