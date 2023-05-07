import { ProductDecorator } from './productDecorator';

export class ProductPersonDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (personalizado)';
  }

  getPrice(): number {
    return this.product.getPrice() + 25;
  }
}
