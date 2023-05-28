# ![](../../../public/img/icon-strategy-mini.png 'Strategy') Strategy - Behavioural (Comportamental)

## Intenção

_Definir uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam._

---

## Sobre o Strategy

O Strategy é um padrão de projeto que visa separar o conceito de algoritmo da regra de negócio para permitir que vários algoritmos possam ser implementados sem a necessidade de alterar a regra de negócio ou outros algoritmos que já existam no sistema.

Veja um exemplo de uma solução do strategy.

### Solução - Strategy

O Strategy diz que devemos separar os algoritmos da classe do carrinho de compras.

Nesse caso, podemos gerar uma família de algoritmos que implementam a mesma interface e podem aplicar descontos diferentes da maneira que precisarmos.

Poderíamos, por exemplo, ter uma interface `iArma.ts` com o método `getNomeArma` para garantir que todas as classes de armas tenham o método `getNomeArma`.

Agora podemos fazer com que o carrinho de compras tenha um campo para receber uma classe do tipo `DiscountStrategy`. Ao chamar o método para obter o valor total no carrinho de compras, ele não precisa fazer nenhuma lógica adicional, basta chamar a sua estratégia de desconto.

Por exemplo:

```typescript
class Personagem {
  private arma: Arma;

  constructor(arma: Arma) {
    this.arma = arma;
  }

  public lutar(): void {
    this.arma.usarArma();
  }

  // Método que permite trocar a arma do personagem
  ...
}
```

Perceba que a classe do carrinho de compras não precisa fazer nenhuma lógica complexa sobre qual desconto aplicar, ela simplesmente delega a tarefa de aplicar desconto para outra classe que terá apenas um responsabilidade, aplicar um desconto.

Melhor do que isso, agora você pode mudar de arma quando quiser simplesmente configurando o campo `arma`, por exemplo:

```typescript
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

export default Personagem;
```

Para trocar de arma, apenas crie uma nova classe e configure usando `setArma`.

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o Strategy quando:

- você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução;
- você precisar isolar a regra de negócio do algoritmo que deve ser aplicado (aplicando o princípio da responsabilidade única)
- você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo

## Implementação

Veja o código e os diagramas dessa pasta para entender como o Strategy é implementado.

## Consequências

O que é bom ou ruim no Strategy:

**Bom:**

- Troca herança por composição
- Separa a regra de negócio de algoritmos complexos
- Aplica os princípios do aberto/fechado e da responsabilidade única

**Ruim:**

- Pode ser complexo criar toda uma hierarquia de classes para aplicar novos algoritmos
- Você pode obter o mesmo resultado com funções caso a linguagem de programação permitir
- O código cliente precisa conhecer as estratégias que vai usar
