import { Arma } from '../iArma';

class ArcoeFlexa implements Arma {
  getNome(): string {
    throw new Error('Method not implemented.');
  }

  public usarArma(): void {
    console.log('Usando arco');
  }
}

export default ArcoeFlexa;
