/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class Machado implements Arma {
  public usarArma(): void {
    console.log('Usando machado');
  }
}

export default Machado;
