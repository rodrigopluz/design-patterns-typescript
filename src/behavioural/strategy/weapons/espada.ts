import { Arma } from '../iArma';

class Espada implements Arma {
  getNome(): string {
    throw new Error('Method not implemented.');
  }
  public usarArma(): void {
    console.log('Usando espada');
  }
}

export default Espada;
