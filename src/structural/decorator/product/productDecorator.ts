import { IProduct } from './iProduct';

export class ProductDecorator implements IProduct {
  constructor(protected product: IProduct) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
