# ![](../../../public/img/icon-observer-mini.png 'Observer') Observer - Behavioural (Comportamental)

## Intenção

_Define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados._

---

## Sobre o Observer

- Implementado com dois tipos de objetos: objetos observáveis (Subject) e objetos observadores (Observer)
- Objetos observáveis (Subject) tem uma referência para todos os seus observadores. Isso torna possível adicionar, remover e notificar todos observadores quando seu estado mudar.
- Objetos observadores (Observer) devem ter meios de receber notificações de seus Observáveis. Geralmente isso é feito com apenas um método.

---

## Estrutura

Veja a pasta diagramas.

Comando para executar esse pattern observer nobrowser.
`$ npx tsc src/behavioural/observer/observer.ts -w `

## Aplicabilidade

Use o Observer quando:

- você precisa notificar vários objetos sobre a mudança de estado de outro(s) objeto(s)

## Implementação

Veja o código e os diagramas dessa pasta para entender como o Observer é implementado.

## Consequências

O que é bom ou ruim no Observer:

**Bom:**

- Usa o SRP (Single Responsability Principal) e OCP (Open Close Principal)
- Facilita a comunicação entre objetos em tempo de execução

**Ruim:**

- Pode ser complexo ou impossível manter a ordem em que as notificações são enviadas
