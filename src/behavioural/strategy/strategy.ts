import { Arma } from './iArma';

/**
 * The Context defines the interface of interest to clients.
 */
class Personagem {
  private arma: Arma;

  constructor(arma: Arma) {
    this.arma = arma;
  }

  public lutar(): void {
    this.arma.usarArma();
  }

  public setArma(arma: Arma): void {
    this.arma = arma;
  }

  public getArma(): Arma {
    return this.arma;
  }

  public getNomeArma(): string {
    return this.arma.getNome();
  }

  public getNome(): string {
    return 'Personagem';
  }
}

export { Personagem };
