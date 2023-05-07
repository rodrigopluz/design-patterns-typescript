# ![](../../../public/img/icon-decorator-mini.png 'Decorator') Decorator - Structural (Estrutural)

## Intenção

_Agregar responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades._

---

## Sobre o Decorator

O Decorator é uma padrão de projeto usado para adicionar funcionalidades a objetos já criados, ou seja, sem a necessidade de alterar nenhum código. Isso faz com que este padrão aplique naturalmente o princípio do aberto/fechado (classes devem estar abertas para extensão, mas fechadas para modificação).

---

## Tarefa e Estrutura

O Ressaca`s é o bar de maior sucesso da região. A razão é a variada oferta de drinks a disposição dos clientes.

Por outro lado, o sistema de pedidos do bar se tornou mais complexo e está difícil mantê-lo por conta da grande variedade de drinks. O problema é que a pedido dos clientes, novos drinks foram criados pela adição de diferentes aditivos aos drinks existentes.

Os projetistas criaram novas classes para representar os novos drinks e calcular os preços de cada um deles levando em conta os diferentes ingredientes, e em decorrência houve uma verdadeira explosão de classes para representar os diferentes tipos de drinks.

O objetivo é apresentar o projeto (Diagrama de Classes) e Implementar o sistema Drinks do Ressaca's Bar, usando o padrão DECORATOR.

Veja a pasta diagramas e na pasta product.

## Aplicabilidade

Use o padrão Decorator quando:

- adicionado funcionalidades em objetos sem quebrar ou alterar o código existente
- usada composição ao invés de herança
- perceber que pode ocorrer uma explosão de subclasses em determinada estrutura

## Implementação

Veja o código e os diagramas dessa pasta para entender como o Decorator é implementado.

## Consequências

O que é bom ou ruim no Decorator:

**Bom:**

- Composição é melhor do que herança em grande maioria dos casos
- É fácil adicionar ou remover comportamento de objetos sem tocar em código já escrito ou testado (OCP - open close principal)
- É possível decorar um objeto já decorado, adicionando ainda mais funcionalidades (camadas)

**Ruim:**

- Quanto mais decorators em camadas, mais complexo seu código se torna
