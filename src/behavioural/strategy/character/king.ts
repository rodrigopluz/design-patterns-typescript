import { Arma } from '../iArma';
import { Personagem } from '../strategy';

class Rei extends Personagem {
  constructor(arma: Arma) {
    super(arma);
  }

  public lutar(): void {
    console.log('Rei');
    super.lutar();
  }

  public setArma(arma: Arma): void {
    super.setArma(arma);
  }

  public getNome(): string {
    return 'Rei';
  }

  public getNomeArma(): string {
    return super.getNomeArma();
  }

  public getArma(): Arma {
    return super.getArma();
  }
}

export default Rei;
