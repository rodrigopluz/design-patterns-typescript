import { Arma } from '../iArma';
import { Personagem } from '../strategy';

class Rainha extends Personagem {
  constructor(arma: Arma) {
    super(arma);
  }

  public lutar(): void {
    console.log('Rainha');
    super.lutar();
  }

  public setArma(arma: Arma): void {
    super.setArma(arma);
  }

  public getNome(): string {
    return 'Rainha';
  }

  public getNomeArma(): string {
    return super.getNomeArma();
  }

  public getArma(): Arma {
    return super.getArma();
  }
}

export default Rainha;
