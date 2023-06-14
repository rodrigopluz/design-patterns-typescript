import { Arma } from '../iArma';

class Faca implements Arma {
  getNome(): string {
    throw new Error('Method not implemented.');
  }
  public usarArma(): void {
    console.log('Usando faca');
  }
}

export default Faca;
