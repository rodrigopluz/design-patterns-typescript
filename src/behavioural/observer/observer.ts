interface Subject {
  registerObserver(...observers: Observer[]): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class InputObservable implements Subject {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  registerObserver(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notifyObserver(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Subject): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}
  update(observable: Subject): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Valor:';
  return p;
}

const input_val1 = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());

const input_val2 = new InputObservable(makeInput());
const p2 = new ParagraphObserver(makeParagraph());

input_val1.registerObserver(p1);
input_val2.registerObserver(p2);

const result = makeParagraph();
result.setAttribute('id', 'result');
result.innerText = 'Resultado: ';

// input 1
input_val1.element.setAttribute('id', 'input_val1');
input_val1.element.setAttribute('type', 'number');
input_val1.element.setAttribute('placeholder', 'Valor 1');
input_val1.element.addEventListener('keyup', function () {
  input_val1.notifyObserver();
});

let resp = 0;
if (resp !== undefined || resp !== 'NaN') {
  // input 2
  input_val2.element.setAttribute('id', 'input_val2');
  input_val2.element.setAttribute('type', 'number');
  input_val2.element.setAttribute('placeholder', 'Valor 2');
  input_val2.element.addEventListener('keyup', function () {
    input_val2.notifyObserver();

    const val_input_1 = input_val1.element.value;
    const val_input_2 = input_val2.element.value;

    resp = parseInt(val_input_1) / parseInt(val_input_2);

    // result
    result.innerText = 'Resultado: ' + resp.toString();
  });
}
